# DateMate — Küche / Essens-Profil + globaler Logout

**Datum:** 2026-06-15
**Status:** Genehmigt (Design)

## Ziel

Zwei Dinge:

1. **Logout immer verfügbar** — der Abmelden-Button existiert aktuell nur im Dashboard-Header. Ein eingeloggter, aber nicht verknüpfter User landet auf `/link` (`PartnerLink`) ohne Logout-Möglichkeit und sitzt fest.
2. **Essens-Profil ("Küche")** — beide Partner pflegen je ein eigenes Profil mit Allergien, wichtigen Notizen und Lieblingsgerichten. Der jeweils andere liest es (z.B. Boyfriend, wenn er für Girlfriend kocht). Reines Referenz-Feature, keine KI-Generierung.

## Entscheidungen (aus Brainstorming)

- **Boyfriend-Nutzung:** nur Referenz (keine KI-Rezeptvorschläge).
- **Profile:** symmetrisch — beide Partner haben ein eigenes Essens-Profil; jeder bearbeitet nur das eigene, sieht aber das des Partners.
- **Lieblingsgericht-Eintrag:** Name + optionale Notiz + optionaler Link.
- **Allergien/Vorlieben:** Tag-Chips für Allergien + Freitext-Notizfeld für "sonstige wichtige Sachen".
- **Navigation:** untere Tab-Leiste mit "Wünsche" und "Küche".
- **Datenspeicherung:** Ansatz A — alles am User-Dokument (keine neue Collection, keine neuen Security Rules).

## Datenmodell (`src/types.ts`)

```ts
export interface FavoriteDish {
  id: string;          // crypto.randomUUID() — für Edit/Delete im Array
  name: string;
  note?: string;       // z.B. "am liebsten scharf, ohne Koriander"
  sourceUrl?: string;  // Rezept / TikTok / Insta
  createdAt: number;
}
```

`UserProfile` wird um drei **optionale** Felder erweitert (bestehende Profile bleiben gültig, keine Migration):

```ts
export interface UserProfile {
  // ... bestehende Felder
  allergies?: string[];          // Tag-Chips, z.B. ["Nüsse", "Laktose"]
  foodNotes?: string;            // Freitext "sonstige wichtige Sachen"
  favoriteDishes?: FavoriteDish[];
}
```

## Service-Schicht (neu: `src/services/foodProfile.ts`)

Reine, isolierte Funktionen rund um das User-Dokument:

- `subscribeToProfile(uid, callback): Unsubscribe` — `onSnapshot` auf `users/{uid}`, liefert `UserProfile`. Wird auf der Küche-Seite für das eigene **und** das Partner-Profil verwendet (zwei Listener).
- `updateAllergies(uid, allergies: string[]): Promise<void>` — `updateDoc`.
- `updateFoodNotes(uid, notes: string): Promise<void>` — `updateDoc`.
- `addDish(uid, currentDishes, dish): Promise<void>`
- `updateDish(uid, currentDishes, dish): Promise<void>`
- `removeDish(uid, currentDishes, dishId): Promise<void>`

Die `*Dish`-Funktionen arbeiten auf einer Kopie des Arrays und schreiben das Ergebnis via `updateDoc` zurück. `undefined`-Felder werden vor dem Speichern herausgefiltert (gleiche `Object.fromEntries`-Logik wie in `firestore.ts`). Eine reine Helfer-Funktion `dedupeAllergies(tags): string[]` (trim, leere raus, case-insensitive dedupe) kapselt die Tag-Logik.

Die Array-Mutationslogik (add/update/remove dish, dedupe allergies) wird als reine Funktionen gehalten, damit sie ohne Firestore unit-testbar ist.

## Navigation & Layout

- **`src/components/BottomNav.tsx`** (neu): fixierte Leiste unten, zwei Tabs — 🗒️ **Wünsche** (`/`) und 🍽️ **Küche** (`/kitchen`). Aktiver Tab in Rose, inaktiv in `--color-text-muted`. Reagiert auf `useLocation`.
- **`src/components/AppHeader.tsx`** (neu): der bestehende Dashboard-Header (DateMate-Logo + `Heart`, Name-Badge mit rollenabhängiger Farbe, Partner-Icon → `/link`, **Logout**-Button → `signOut`) wird hierher extrahiert. Dashboard und Küche nutzen denselben Header inkl. Logout.
- **Dashboard (`pages/Dashboard.tsx`)**: nutzt `AppHeader`; FAB rückt auf `bottom-20` (über die Tab-Leiste), `pb` des Containers erhöht, `BottomNav` eingebunden.
- **Routing (`App.tsx`)**: neue protected Route `/kitchen` mit demselben Guard wie Dashboard (kein Partner → Redirect `/link`).

## Küche-Seite (`src/pages/Kitchen.tsx`)

Lädt eigenes Profil (aus `useAuth`) und abonniert zusätzlich das Partner-Profil via `subscribeToProfile(partnerId, ...)`.

Zwei Bereiche: **"Meins"** (editierbar) und **"[Partner-Name]"** (read-only). Untereinander oder per Umschalter — Detail wird im Implementierungsplan festgelegt; Default: untereinander, eigener Bereich oben.

Pro Bereich drei Blöcke:

- **Allergien**: Tag-Chips. Eigener Bereich: Chips mit Entfernen-X + Eingabe zum Hinzufügen. Partner-Bereich: nur Anzeige. Partner-Allergien optisch als Warnung hervorgehoben (amber-Ton), weil kochrelevant.
- **Wichtige Notizen**: `foodNotes` als Freitext. Eigener Bereich: `textarea` mit Speichern (on blur / debounced). Partner: read-only Text.
- **Lieblingsgerichte**: Liste von `FavoriteDish`-Karten (Name, Notiz, Link-Icon falls `sourceUrl`). Eigener Bereich: Edit/Delete pro Karte + "+ Gericht"-Button. Partner: nur Anzeige.

**`src/components/DishForm.tsx`** (neu): kleines Modal zum Erstellen/Bearbeiten eines Gerichts (Felder: Name [pflicht], Notiz, Link), im Stil von `WishForm.tsx`.

## Logout "immer verfügbar"

- Header inkl. Logout liegt via `AppHeader` auf Dashboard **und** Küche.
- **`PartnerLink.tsx`**: bekommt zusätzlich einen Logout-Button (oben rechts, gleiche Optik wie im Header), damit man aus dem "noch nicht verknüpft"-Zustand abmelden kann. Gilt für beide Zustände der Seite (verknüpft / nicht verknüpft).

## Security Rules

**Keine Änderung nötig.** `users` erlaubt bereits Lesen für jeden eingeloggten User (für Partner-Suche) und Schreiben nur aufs eigene Profil (`request.auth.uid == userId`). Damit ist Partner-Lesen abgedeckt und das Bearbeiten des fremden Profils bereits serverseitig verhindert.

## Tests

Das Projekt hat aktuell kein Test-Setup. Im Rahmen dieses Features wird ein leichtes **Vitest**-Setup hinzugefügt:

- `vitest` als devDependency, `test`-Script in `package.json`, minimale Config (Vite ist bereits vorhanden).
- Unit-Tests für die reine Logik in `foodProfile.ts`: `addDish`/`updateDish`/`removeDish` (korrekte Array-Mutation, ID-Erhalt) und `dedupeAllergies` (trim, leere raus, case-insensitive dedupe).
- UI-Komponenten bleiben vorerst ungetestet.

## Nicht im Scope

- KI-/Rezeptgenerierung (evtl. später).
- Zutatenlisten / strukturierte Rezepte je Gericht.
- Bilder-Upload für Gerichte.

## Betroffene/neue Dateien

- `src/types.ts` (erweitern)
- `src/services/foodProfile.ts` (neu)
- `src/components/BottomNav.tsx` (neu)
- `src/components/AppHeader.tsx` (neu)
- `src/components/DishForm.tsx` (neu)
- `src/pages/Kitchen.tsx` (neu)
- `src/pages/Dashboard.tsx` (Header extrahieren, FAB/Padding, BottomNav)
- `src/pages/PartnerLink.tsx` (Logout-Button)
- `src/App.tsx` (Route `/kitchen`)
- `package.json` + Vitest-Config + Tests (neu)
