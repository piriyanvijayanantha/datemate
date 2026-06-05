import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { UserProfile, Role } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, role: Role) => Promise<void>;
  signOut: () => Promise<void>;
  linkPartner: (code: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}

function generatePartnerCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Auth State Listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const profileDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (profileDoc.exists()) {
          setProfile(profileDoc.data() as UserProfile);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const signIn = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const profileDoc = await getDoc(doc(db, 'users', cred.user.uid));
    if (profileDoc.exists()) {
      setProfile(profileDoc.data() as UserProfile);
    }
  };

  const signUp = async (email: string, password: string, name: string, role: Role) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const newProfile: UserProfile = {
      uid: cred.user.uid,
      email,
      displayName: name,
      role,
      partnerCode: generatePartnerCode(),
      createdAt: Date.now(),
    };
    await setDoc(doc(db, 'users', cred.user.uid), newProfile);
    setProfile(newProfile);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    setProfile(null);
  };

  const linkPartner = async (code: string): Promise<boolean> => {
    if (!profile) return false;
    
    // Finde den Partner anhand des Codes
    const { query, where, getDocs, collection, updateDoc } = await import('firebase/firestore');
    const q = query(collection(db, 'users'), where('partnerCode', '==', code.toUpperCase()));
    const snap = await getDocs(q);
    
    if (snap.empty) return false;
    
    const partnerDoc = snap.docs[0];
    const partnerId = partnerDoc.id;
    
    if (partnerId === profile.uid) return false; // Kann sich nicht selbst verknüpfen
    
    // Beide Profile verknüpfen mit coupleId
    const coupleId = [profile.uid, partnerId].sort().join('_');
    
    await updateDoc(doc(db, 'users', profile.uid), { partnerId, coupleId });
    await updateDoc(doc(db, 'users', partnerId), { partnerId: profile.uid, coupleId });
    
    setProfile({ ...profile, partnerId });
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signUp, signOut, linkPartner }}>
      {children}
    </AuthContext.Provider>
  );
}
