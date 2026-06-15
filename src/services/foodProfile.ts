import { FavoriteDish } from '../types';

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
