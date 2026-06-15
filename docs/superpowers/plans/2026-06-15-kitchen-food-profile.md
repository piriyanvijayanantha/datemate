# Kitchen Food-Profile + Global Logout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a symmetric "Küche" food-profile feature (allergies, food notes, favorite dishes per partner, reference-only) plus a globally available logout, navigated via a bottom tab bar.

**Architecture:** Food-profile data lives directly on the `users/{uid}` Firestore document (Approach A — no new collection, no new security rules). A new `foodProfile` service holds pure array-mutation helpers (unit-tested) plus thin Firestore wrappers. A shared `AppHeader` (with logout) and a `BottomNav` are extracted/added so both Dashboard and the new Kitchen page share chrome. `PartnerLink` gets its own logout button.

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind, Firebase Firestore (`onSnapshot`/`updateDoc`), lucide-react icons, react-hot-toast, react-router-dom v6. Tests: Vitest (new).

Spec: `docs/superpowers/specs/2026-06-15-kitchen-food-profile-design.md`

## File Structure

- `vitest.config.ts` — new, test runner config (node environment)
- `package.json` — add `vitest` devDep + `test` scripts
- `src/types.ts` — add `FavoriteDish`, extend `UserProfile`
- `src/services/foodProfile.ts` — new: pure helpers + Firestore wrappers
- `src/services/foodProfile.test.ts` — new: unit tests for pure helpers
- `src/components/AppHeader.tsx` — new: shared header with logout (extracted from Dashboard)
- `src/components/BottomNav.tsx` — new: bottom tab bar (Wünsche / Küche)
- `src/components/DishForm.tsx` — new: add/edit dish modal
- `src/pages/Kitchen.tsx` — new: food-profile page (own editable + partner read-only)
- `src/pages/Dashboard.tsx` — modify: use AppHeader + BottomNav, raise FAB
- `src/pages/PartnerLink.tsx` — modify: add logout button
- `src/App.tsx` — modify: add `/kitchen` route

---

### Task 1: Vitest setup

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/sanity.test.ts` (temporary smoke test, deleted at end of task)

- [ ] **Step 1: Install vitest**

Run:
```bash
npm install -D vitest@^2.1.0
```
Expected: vitest added to devDependencies, no errors.

- [ ] **Step 2: Add test scripts to package.json**

In `package.json`, inside `"scripts"`, add two entries after `"preview"`:

```json
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
```

- [ ] **Step 3: Create vitest.config.ts**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
```

- [ ] **Step 4: Create a temporary smoke test**

Create `src/sanity.test.ts`:

```ts
import { describe, it, expect } from 'vitest';

describe('vitest setup', () => {
  it('runs', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Run the smoke test**

Run: `npm test`
Expected: PASS — 1 passed.

- [ ] **Step 6: Delete the smoke test**

Run: `rm src/sanity.test.ts`

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore: add vitest test setup"
```

---

### Task 2: Extend types

**Files:**
- Modify: `src/types.ts`

- [ ] **Step 1: Add FavoriteDish interface**

In `src/types.ts`, after the `WishStatus` type (line 11), add:

```ts
export interface FavoriteDish {
  id: string;          // crypto.randomUUID()
  name: string;
  note?: string;       // z.B. "am liebsten scharf, ohne Koriander"
  sourceUrl?: string;  // Rezept / TikTok / Insta
  createdAt: number;
}
```

- [ ] **Step 2: Extend UserProfile**

In `src/types.ts`, inside `interface UserProfile`, after the `partnerId?: string;` line, add three optional fields:

```ts
  partnerId?: string;     // UID des Partners (nach Verknüpfung)
  allergies?: string[];        // Tag-Chips, z.B. ["Nüsse", "Laktose"]
  foodNotes?: string;          // Freitext "sonstige wichtige Sachen"
  favoriteDishes?: FavoriteDish[];
```

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/types.ts
git commit -m "feat: add FavoriteDish type and food fields to UserProfile"
```

---

### Task 3: foodProfile pure helpers (TDD)

**Files:**
- Create: `src/services/foodProfile.ts`
- Test: `src/services/foodProfile.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/services/foodProfile.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import {
  dedupeAllergies,
  addDishToList,
  updateDishInList,
  removeDishFromList,
} from './foodProfile';
import { FavoriteDish } from '../types';

const dish = (over: Partial<FavoriteDish> = {}): FavoriteDish => ({
  id: 'a',
  name: 'Pasta',
  createdAt: 1,
  ...over,
});

describe('dedupeAllergies', () => {
  it('trims, drops empties, and dedupes case-insensitively keeping first form', () => {
    expect(dedupeAllergies([' Nüsse ', 'nüsse', '', '  ', 'Laktose'])).toEqual([
      'Nüsse',
      'Laktose',
    ]);
  });
});

describe('addDishToList', () => {
  it('appends a dish with generated id and createdAt', () => {
    const result = addDishToList(
      [dish()],
      { name: 'Sushi', note: 'scharf' },
      () => 'fixed-id',
      () => 42,
    );
    expect(result).toHaveLength(2);
    expect(result[1]).toEqual({
      id: 'fixed-id',
      name: 'Sushi',
      note: 'scharf',
      createdAt: 42,
    });
  });

  it('omits empty optional fields', () => {
    const result = addDishToList([], { name: 'Reis', note: '', sourceUrl: '' }, () => 'x', () => 1);
    expect(result[0]).toEqual({ id: 'x', name: 'Reis', createdAt: 1 });
    expect('note' in result[0]).toBe(false);
    expect('sourceUrl' in result[0]).toBe(false);
  });
});

describe('updateDishInList', () => {
  it('replaces the dish with matching id, preserving order', () => {
    const result = updateDishInList(
      [dish({ id: 'a' }), dish({ id: 'b', name: 'Reis' })],
      { id: 'b', name: 'Reis mit Gemüse', createdAt: 5 },
    );
    expect(result[1]).toEqual({ id: 'b', name: 'Reis mit Gemüse', createdAt: 5 });
    expect(result[0].id).toBe('a');
  });
});

describe('removeDishFromList', () => {
  it('removes the dish with matching id', () => {
    const result = removeDishFromList([dish({ id: 'a' }), dish({ id: 'b' })], 'a');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('b');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — cannot resolve `./foodProfile` / functions not exported.

- [ ] **Step 3: Implement the pure helpers**

Create `src/services/foodProfile.ts`:

```ts
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

/** Append a new dish. idFn/nowFn are injectable for deterministic tests. */
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

/** Replace the dish with the matching id. */
export function updateDishInList(dishes: FavoriteDish[], updated: FavoriteDish): FavoriteDish[] {
  return dishes.map((d) => (d.id === updated.id ? updated : d));
}

/** Remove the dish with the matching id. */
export function removeDishFromList(dishes: FavoriteDish[], dishId: string): FavoriteDish[] {
  return dishes.filter((d) => d.id !== dishId);
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all describe blocks green.

- [ ] **Step 5: Commit**

```bash
git add src/services/foodProfile.ts src/services/foodProfile.test.ts
git commit -m "feat: add pure food-profile helpers with tests"
```

---

### Task 4: foodProfile Firestore wrappers

**Files:**
- Modify: `src/services/foodProfile.ts`

- [ ] **Step 1: Add Firestore imports and wrapper functions**

In `src/services/foodProfile.ts`, add imports at the very top of the file (above the existing `import { FavoriteDish }` line):

```ts
import { doc, onSnapshot, updateDoc, Unsubscribe } from 'firebase/firestore';
import { db } from '../firebase';
import { UserProfile } from '../types';
```

Then append these functions to the end of the file:

```ts
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
  await updateDoc(doc(db, USERS_COL, uid), { favoriteDishes: dishes });
}
```

(`addDishToList` already omits empty optional fields, so the persisted dish objects contain no `undefined` values — Firestore-safe.)

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Verify existing tests still pass**

Run: `npm test`
Expected: PASS — pure-helper tests unaffected.

- [ ] **Step 4: Commit**

```bash
git add src/services/foodProfile.ts
git commit -m "feat: add Firestore wrappers for food profile"
```

---

### Task 5: AppHeader component

**Files:**
- Create: `src/components/AppHeader.tsx`

- [ ] **Step 1: Create AppHeader**

This extracts the existing Dashboard header (logo, name badge, partner link, logout) into a reusable component. Create `src/components/AppHeader.tsx`:

```tsx
import { useNavigate } from 'react-router-dom';
import { Heart, LogOut, Link2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function AppHeader() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  if (!profile) return null;
  const isBf = profile.role === 'boyfriend';

  return (
    <header className="sticky top-0 z-30 glass">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
          <span className="font-display text-lg text-white">DateMate</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            isBf ? 'bg-blue-500/15 text-blue-400' : 'bg-rose-500/15 text-rose-400'
          }`}>
            {profile.displayName}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate('/link')}
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
            title="Partner"
          >
            <Link2 className="w-4 h-4" />
          </button>
          <button
            onClick={signOut}
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
            title="Abmelden"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/AppHeader.tsx
git commit -m "feat: extract shared AppHeader with logout"
```

---

### Task 6: BottomNav component

**Files:**
- Create: `src/components/BottomNav.tsx`

- [ ] **Step 1: Create BottomNav**

Create `src/components/BottomNav.tsx`:

```tsx
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, UtensilsCrossed } from 'lucide-react';

const TABS = [
  { path: '/', label: 'Wünsche', Icon: Heart },
  { path: '/kitchen', label: 'Küche', Icon: UtensilsCrossed },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 glass border-t border-[var(--color-border)]">
      <div className="max-w-2xl mx-auto px-4 flex">
        {TABS.map(({ path, label, Icon }) => {
          const active = pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                active ? 'text-rose-400' : 'text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" fill={active ? 'currentColor' : 'none'} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/BottomNav.tsx
git commit -m "feat: add bottom tab nav (Wünsche / Küche)"
```

---

### Task 7: Wire Dashboard to AppHeader + BottomNav, add route

**Files:**
- Modify: `src/pages/Dashboard.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace Dashboard imports**

In `src/pages/Dashboard.tsx`, replace the imports block (lines 1-8). Remove the now-unused header icons (`Heart`, `LogOut`, `Link2`) and add the two new components:

```tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter, X, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { subscribeToWishes } from '../services/firestore';
import { Wish, WishCategory, CATEGORY_CONFIG } from '../types';
import WishCard from '../components/WishCard';
import WishForm from '../components/WishForm';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
```

- [ ] **Step 2: Drop signOut from the useAuth destructure**

In `src/pages/Dashboard.tsx`, change:

```tsx
  const { profile, signOut } = useAuth();
```
to:
```tsx
  const { profile } = useAuth();
```

- [ ] **Step 3: Replace the inline header with AppHeader**

In `src/pages/Dashboard.tsx`, replace the entire `<header>...</header>` block (originally lines 66-94) with:

```tsx
      <AppHeader />
```

- [ ] **Step 4: Raise the FAB above the tab bar and render BottomNav**

In `src/pages/Dashboard.tsx`, change the FAB button className from `fixed bottom-6 right-6` to `fixed bottom-20 right-6`:

```tsx
      <button
        onClick={() => { setEditingWish(null); setShowForm(true); }}
        className="fixed bottom-20 right-6 w-14 h-14 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20"
      >
        <Plus className="w-6 h-6" />
      </button>
```

Then, immediately before the closing `</div>` of the root element (the last line before the final `);`), add:

```tsx
      <BottomNav />
```

- [ ] **Step 5: Add the /kitchen route in App.tsx**

In `src/App.tsx`, add the Kitchen import after the PartnerLink import:

```tsx
import PartnerLink from './pages/PartnerLink';
import Kitchen from './pages/Kitchen';
```

And add a route after the `/` route (before the wildcard):

```tsx
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/kitchen" element={<ProtectedRoute><Kitchen /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
```

> Note: `Kitchen` is created in Task 9. This step will not compile until then; that's expected. Commit happens after Task 9 wiring. For now, proceed — the build check is deferred to Step 6.

- [ ] **Step 6: Verify Dashboard changes compile in isolation**

Since `Kitchen` does not exist yet, temporarily comment out the `/kitchen` route line and its import to verify the Dashboard refactor compiles:

Run: `npx tsc -b`
Expected: no errors (with the kitchen route/import temporarily commented). Then uncomment them again before committing (the import resolves once Task 9 lands).

- [ ] **Step 7: Commit (Dashboard only)**

```bash
git add src/pages/Dashboard.tsx
git commit -m "refactor: Dashboard uses AppHeader + BottomNav, raise FAB"
```

(Hold the `App.tsx` change uncommitted until Task 9, or stash it; it is committed together with Kitchen in Task 9.)

---

### Task 8: DishForm modal

**Files:**
- Create: `src/components/DishForm.tsx`

- [ ] **Step 1: Create DishForm**

Modeled on `WishForm.tsx`. It does NOT write to Firestore itself — it calls back with the field values, so the parent (Kitchen) owns the array mutation. Create `src/components/DishForm.tsx`:

```tsx
import { useState } from 'react';
import { X } from 'lucide-react';
import { FavoriteDish } from '../types';
import toast from 'react-hot-toast';

interface Props {
  dish: FavoriteDish | null; // null = neues Gericht
  onSave: (values: { name: string; note?: string; sourceUrl?: string }) => Promise<void>;
  onClose: () => void;
}

export default function DishForm({ dish, onSave, onClose }: Props) {
  const isEdit = !!dish;
  const [name, setName] = useState(dish?.name ?? '');
  const [note, setNote] = useState(dish?.note ?? '');
  const [sourceUrl, setSourceUrl] = useState(dish?.sourceUrl ?? '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error('Name ist erforderlich');
      return;
    }
    setLoading(true);
    try {
      await onSave({
        name: name.trim(),
        note: note.trim() || undefined,
        sourceUrl: sourceUrl.trim() || undefined,
      });
      toast.success(isEdit ? 'Aktualisiert!' : 'Gericht hinzugefügt! 🍽️');
      onClose();
    } catch {
      toast.error('Fehler beim Speichern');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-t-2xl sm:rounded-2xl">
        <div className="sticky top-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="font-display text-lg text-white">
            {isEdit ? 'Gericht bearbeiten' : 'Neues Lieblingsgericht'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <X className="w-5 h-5 text-[var(--color-text-muted)]" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="z.B. Pasta Carbonara"
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Notiz</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="am liebsten scharf, ohne Koriander..."
              rows={2}
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Link (Rezept, TikTok...)</label>
            <input
              type="url"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !name.trim()}
            className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Speichern...' : isEdit ? 'Aktualisieren' : 'Gericht hinzufügen'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc -b` (temporarily keep `/kitchen` route commented in App.tsx if still uncompiled)
Expected: no errors for DishForm.

- [ ] **Step 3: Commit**

```bash
git add src/components/DishForm.tsx
git commit -m "feat: add DishForm modal"
```

---

### Task 9: Kitchen page

**Files:**
- Create: `src/pages/Kitchen.tsx`
- Modify: `src/App.tsx` (commit the route added in Task 7)

- [ ] **Step 1: Create Kitchen page**

Subscribes to own + partner profiles (realtime), renders own section editable and partner section read-only. Create `src/pages/Kitchen.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, ExternalLink, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { UserProfile, FavoriteDish } from '../types';
import {
  subscribeToProfile,
  saveAllergies,
  saveFoodNotes,
  saveDishes,
  addDishToList,
  updateDishInList,
  removeDishFromList,
} from '../services/foodProfile';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import DishForm from '../components/DishForm';
import toast from 'react-hot-toast';

export default function Kitchen() {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [me, setMe] = useState<UserProfile | null>(null);
  const [partner, setPartner] = useState<UserProfile | null>(null);
  const [showDishForm, setShowDishForm] = useState(false);
  const [editingDish, setEditingDish] = useState<FavoriteDish | null>(null);
  const [allergyInput, setAllergyInput] = useState('');
  const [notesDraft, setNotesDraft] = useState('');

  // Kein Partner → zur Verknüpfung (gleicher Guard wie Dashboard)
  useEffect(() => {
    if (profile && !profile.partnerId) navigate('/link');
  }, [profile, navigate]);

  // Eigenes Profil realtime
  useEffect(() => {
    if (!profile?.uid) return;
    return subscribeToProfile(profile.uid, (p) => {
      setMe(p);
      setNotesDraft(p?.foodNotes ?? '');
    });
  }, [profile?.uid]);

  // Partner-Profil realtime
  useEffect(() => {
    if (!profile?.partnerId) return;
    return subscribeToProfile(profile.partnerId, setPartner);
  }, [profile?.partnerId]);

  if (!profile) return null;
  const uid = profile.uid;

  const myAllergies = me?.allergies ?? [];
  const myDishes = me?.favoriteDishes ?? [];

  const handleAddAllergy = async () => {
    const value = allergyInput.trim();
    if (!value) return;
    setAllergyInput('');
    await saveAllergies(uid, [...myAllergies, value]);
  };

  const handleRemoveAllergy = async (tag: string) => {
    await saveAllergies(uid, myAllergies.filter((t) => t !== tag));
  };

  const handleSaveNotes = async () => {
    if (notesDraft === (me?.foodNotes ?? '')) return;
    await saveFoodNotes(uid, notesDraft);
    toast.success('Notiz gespeichert');
  };

  const handleSaveDish = async (values: { name: string; note?: string; sourceUrl?: string }) => {
    if (editingDish) {
      await saveDishes(uid, updateDishInList(myDishes, { ...editingDish, ...values }));
    } else {
      await saveDishes(uid, addDishToList(myDishes, values));
    }
  };

  const handleDeleteDish = async (id: string) => {
    if (!confirm('Gericht wirklich löschen?')) return;
    await saveDishes(uid, removeDishFromList(myDishes, id));
    toast.success('Gelöscht');
  };

  return (
    <div className="min-h-screen pb-24">
      <AppHeader />
      <main className="max-w-2xl mx-auto px-4 pt-4 space-y-8">
        {/* === MEINS === */}
        <section className="space-y-4">
          <h2 className="font-display text-xl text-white">Mein Essens-Profil</h2>

          {/* Allergien */}
          <div className="glass rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Allergien
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {myAllergies.length === 0 && (
                <span className="text-sm text-[var(--color-text-muted)]">Keine eingetragen</span>
              )}
              {myAllergies.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400">
                  {tag}
                  <button onClick={() => handleRemoveAllergy(tag)} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={allergyInput}
                onChange={(e) => setAllergyInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddAllergy(); }}
                placeholder="z.B. Nüsse"
                className="flex-1 px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
              />
              <button
                onClick={handleAddAllergy}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors"
              >
                Hinzufügen
              </button>
            </div>
          </div>

          {/* Wichtige Notizen */}
          <div className="glass rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Wichtige Notizen
            </h3>
            <textarea
              value={notesDraft}
              onChange={(e) => setNotesDraft(e.target.value)}
              onBlur={handleSaveNotes}
              placeholder="Vorlieben, Abneigungen, was sonst wichtig ist..."
              rows={3}
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
            />
          </div>

          {/* Lieblingsgerichte */}
          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Lieblingsgerichte
              </h3>
              <button
                onClick={() => { setEditingDish(null); setShowDishForm(true); }}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300"
              >
                <Plus className="w-4 h-4" /> Gericht
              </button>
            </div>
            <div className="space-y-2">
              {myDishes.length === 0 && (
                <p className="text-sm text-[var(--color-text-muted)]">Noch keine Lieblingsgerichte.</p>
              )}
              {myDishes.map((d) => (
                <div key={d.id} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--color-bg)] group">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white">{d.name}</div>
                    {d.note && <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{d.note}</p>}
                  </div>
                  <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {d.sourceUrl && (
                      <a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button onClick={() => { setEditingDish(d); setShowDishForm(true); }} className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDeleteDish(d.id)} className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-rose-400 hover:bg-rose-500/10">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PARTNER === */}
        <section className="space-y-4">
          <h2 className="font-display text-xl text-white">
            {partner ? `${partner.displayName}s Essens-Profil` : 'Partner'}
          </h2>

          {/* Partner Allergien — als Warnung */}
          <div className="glass rounded-xl p-4">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" /> Allergien
            </h3>
            <div className="flex flex-wrap gap-2">
              {(partner?.allergies ?? []).length === 0 && (
                <span className="text-sm text-[var(--color-text-muted)]">Keine eingetragen</span>
              )}
              {(partner?.allergies ?? []).map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Partner Notizen */}
          {partner?.foodNotes && (
            <div className="glass rounded-xl p-4">
              <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                Wichtige Notizen
              </h3>
              <p className="text-sm text-white whitespace-pre-wrap">{partner.foodNotes}</p>
            </div>
          )}

          {/* Partner Lieblingsgerichte */}
          <div className="glass rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Lieblingsgerichte
            </h3>
            <div className="space-y-2">
              {(partner?.favoriteDishes ?? []).length === 0 && (
                <p className="text-sm text-[var(--color-text-muted)]">Noch keine Lieblingsgerichte.</p>
              )}
              {(partner?.favoriteDishes ?? []).map((d) => (
                <div key={d.id} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--color-bg)]">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white">{d.name}</div>
                    {d.note && <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{d.note}</p>}
                  </div>
                  {d.sourceUrl && (
                    <a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {showDishForm && (
        <DishForm
          dish={editingDish}
          onSave={handleSaveDish}
          onClose={() => { setShowDishForm(false); setEditingDish(null); }}
        />
      )}

      <BottomNav />
    </div>
  );
}
```

- [ ] **Step 2: Ensure the /kitchen route + import are active in App.tsx**

Confirm `src/App.tsx` has both the `import Kitchen from './pages/Kitchen';` line and the `<Route path="/kitchen" ... />` line uncommented (added in Task 7).

- [ ] **Step 3: Verify the full build compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Kitchen.tsx src/App.tsx
git commit -m "feat: add Kitchen food-profile page and route"
```

---

### Task 10: PartnerLink logout button

**Files:**
- Modify: `src/pages/PartnerLink.tsx`

- [ ] **Step 1: Import logout icon and pull signOut from useAuth**

In `src/pages/PartnerLink.tsx`, update the icon import (line 3) to add `LogOut`:

```tsx
import { Link2, Copy, Check, ArrowRight, LogOut } from 'lucide-react';
```

And update the `useAuth` destructure (line 8) to include `signOut`:

```tsx
  const { profile, linkPartner, signOut } = useAuth();
```

- [ ] **Step 2: Add a logout button to the "already linked" state**

In `src/pages/PartnerLink.tsx`, in the `if (profile.partnerId)` block, add a logout button below the "Zum Dashboard" button. Replace the existing button with the button plus a logout link:

```tsx
            <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors"
            >
              Zum Dashboard
            </button>
            <button
                onClick={signOut}
                className="mx-auto flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" /> Abmelden
            </button>
```

- [ ] **Step 3: Add a fixed logout button to the main (not-yet-linked) state**

In `src/pages/PartnerLink.tsx`, in the main `return`, immediately after the opening `<div className="min-h-screen flex items-center justify-center px-4">`, add a fixed top-right logout button:

```tsx
    <div className="min-h-screen flex items-center justify-center px-4">
      <button
        onClick={signOut}
        className="fixed top-4 right-4 z-20 p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
        title="Abmelden"
      >
        <LogOut className="w-5 h-5" />
      </button>
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/PartnerLink.tsx
git commit -m "feat: add logout button to PartnerLink (both states)"
```

---

### Task 11: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Full typecheck + production build**

Run: `npm run build`
Expected: `tsc -b` passes and `vite build` completes without errors.

- [ ] **Step 2: Run all tests**

Run: `npm test`
Expected: PASS — all food-profile helper tests green.

- [ ] **Step 3: Manual smoke test in dev**

Run: `npm run dev`, open the app, and verify against this checklist (requires two linked accounts, or inspect one side):
- Bottom tab bar shows Wünsche + Küche; switching navigates correctly and highlights the active tab.
- Logout button is visible on Dashboard, Kitchen, and PartnerLink (both linked and not-linked states).
- On Kitchen: add/remove an allergy chip → persists after reload. Edit notes (blur) → persists. Add/edit/delete a favorite dish → persists.
- The partner section shows the partner's allergies (amber), notes, and dishes read-only and updates live.
- Dashboard FAB sits above the tab bar, not hidden behind it.

- [ ] **Step 4: Commit any final fixes** (only if Step 3 surfaced issues)

```bash
git add -A
git commit -m "fix: address kitchen feature smoke-test findings"
```

---

## Self-Review notes

- **Spec coverage:** types (Task 2), service+pure logic (Tasks 3-4), bottom nav (Task 6), shared header/logout (Task 5), Kitchen page with own+partner allergies/notes/dishes (Task 9), DishForm (Task 8), Dashboard wiring (Task 7), PartnerLink logout (Task 10), no security-rule change (none needed), Vitest + helper tests (Tasks 1, 3). All spec sections mapped.
- **Type consistency:** `addDishToList`/`updateDishInList`/`removeDishFromList`/`dedupeAllergies` names match between Task 3 (definition + tests) and Task 9 (usage). `subscribeToProfile`/`saveAllergies`/`saveFoodNotes`/`saveDishes` match between Task 4 and Task 9. `DishForm` `onSave` signature `{name, note?, sourceUrl?}` matches `handleSaveDish` and `addDishToList`'s `DishInput`.
- **Ordering caveat:** Task 7 adds the `/kitchen` route referencing `Kitchen` before it exists (Task 9). The plan handles this explicitly: verify Dashboard with the route temporarily commented, then commit Dashboard alone; App.tsx route is committed together with Kitchen in Task 9.
