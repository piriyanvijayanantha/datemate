import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Wish, WishCategory, WishStatus } from '../types';

const WISHES_COL = 'wishes';

/**
 * Wish erstellen
 */
export async function createWish(
    wish: Omit<Wish, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const now = Date.now();
  // undefined-Werte rausfiltern (Firestore akzeptiert die nicht)
  const cleanData = Object.fromEntries(
      Object.entries({ ...wish, createdAt: now, updatedAt: now })
          .filter(([_, v]) => v !== undefined)
  );
  const docRef = await addDoc(collection(db, WISHES_COL), cleanData);
  return docRef.id;
}

/**
 * Wish aktualisieren
 */
export async function updateWish(id: string, data: Partial<Wish>): Promise<void> {
  const cleanData = Object.fromEntries(
      Object.entries({ ...data, updatedAt: Date.now() })
          .filter(([_, v]) => v !== undefined)
  );
  await updateDoc(doc(db, WISHES_COL, id), cleanData);
}

/**
 * Wish löschen
 */
export async function deleteWish(id: string): Promise<void> {
  await deleteDoc(doc(db, WISHES_COL, id));
}

/**
 * Realtime Listener für Wishes eines Paares
 * Filtert private Wishes des Partners raus
 */
export function subscribeToWishes(
  coupleId: string,
  currentUserId: string,
  callback: (wishes: Wish[]) => void,
): Unsubscribe {
  const q = query(
    collection(db, WISHES_COL),
    where('coupleId', '==', coupleId),
    orderBy('createdAt', 'desc'),
  );

  return onSnapshot(q, (snap) => {
    const wishes: Wish[] = [];
    snap.forEach((doc) => {
      const data = doc.data() as Omit<Wish, 'id'>;
      // Private Wishes des Partners nicht anzeigen
      if (data.isPrivate && data.createdBy !== currentUserId) return;
      wishes.push({ ...data, id: doc.id });
    });
    callback(wishes);
  });
}

/**
 * Wishes filtern nach Constraints
 */
export function filterWishes(
  wishes: Wish[],
  filters: {
    category?: WishCategory;
    cuisine?: string;
    location?: string;
    status?: WishStatus;
    maxPrice?: 1 | 2 | 3;
    minPriority?: number;
  },
): Wish[] {
  return wishes.filter((w) => {
    if (filters.category && w.category !== filters.category) return false;
    if (filters.cuisine && w.cuisine?.toLowerCase() !== filters.cuisine.toLowerCase()) return false;
    if (filters.location && w.location?.toLowerCase() !== filters.location.toLowerCase()) return false;
    if (filters.status && w.status !== filters.status) return false;
    if (filters.maxPrice && w.priceRange && w.priceRange > filters.maxPrice) return false;
    if (filters.minPriority && w.priority < filters.minPriority) return false;
    return true;
  });
}
