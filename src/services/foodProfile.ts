import { doc, onSnapshot, updateDoc, Unsubscribe } from 'firebase/firestore';
import { db } from '../firebase';
import { FavoriteDish, UserProfile } from '../types';

/** Trim, drop empties, dedupe case-insensitively (keeps first occurrence's form). */
export function dedupeAllergies(tags: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const raw of tags) {
    const t = raw.trim();
    if (!t) continue;
    const key = t.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(t);
  }
  return result;
}

export interface DishInput {
  name: string;
  note?: string;
  sourceUrl?: string;
}

/** Append a new dish (trims name and optional fields). idFn/nowFn are injectable for deterministic tests. */
export function addDishToList(
  dishes: FavoriteDish[],
  input: DishInput,
  idFn: () => string = () => crypto.randomUUID(),
  nowFn: () => number = () => Date.now(),
): FavoriteDish[] {
  const dish: FavoriteDish = { id: idFn(), name: input.name.trim(), createdAt: nowFn() };
  if (input.note && input.note.trim()) dish.note = input.note.trim();
  if (input.sourceUrl && input.sourceUrl.trim()) dish.sourceUrl = input.sourceUrl.trim();
  return [...dishes, dish];
}

/** Replace the dish with the matching id; returns the list unchanged if no id matches. */
export function updateDishInList(dishes: FavoriteDish[], updated: FavoriteDish): FavoriteDish[] {
  return dishes.map((d) => (d.id === updated.id ? updated : d));
}

/** Remove the dish with the matching id. */
export function removeDishFromList(dishes: FavoriteDish[], dishId: string): FavoriteDish[] {
  return dishes.filter((d) => d.id !== dishId);
}

/** Remove keys whose value is undefined (Firestore rejects undefined, even nested in arrays). */
export function cleanDish(dish: FavoriteDish): FavoriteDish {
  return Object.fromEntries(
    Object.entries(dish).filter(([, v]) => v !== undefined),
  ) as unknown as FavoriteDish;
}

const USERS_COL = 'users';

/** Realtime listener for a single user profile (own or partner). */
export function subscribeToProfile(
  uid: string,
  callback: (profile: UserProfile | null) => void,
): Unsubscribe {
  return onSnapshot(doc(db, USERS_COL, uid), (snap) => {
    callback(snap.exists() ? (snap.data() as UserProfile) : null);
  });
}

/** Save deduped allergy tags on the user's own profile. */
export async function saveAllergies(uid: string, tags: string[]): Promise<void> {
  await updateDoc(doc(db, USERS_COL, uid), { allergies: dedupeAllergies(tags) });
}

/** Save the free-text food notes on the user's own profile. */
export async function saveFoodNotes(uid: string, notes: string): Promise<void> {
  await updateDoc(doc(db, USERS_COL, uid), { foodNotes: notes });
}

/** Persist the favorite-dishes array on the user's own profile. */
export async function saveDishes(uid: string, dishes: FavoriteDish[]): Promise<void> {
  await updateDoc(doc(db, USERS_COL, uid), { favoriteDishes: dishes.map(cleanDish) });
}
