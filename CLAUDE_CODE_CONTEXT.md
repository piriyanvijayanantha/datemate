# DateMate — Projekt-Kontext

## Was ist das?
Eine Couples-App: Freundin trägt Wünsche ein (Restaurants, Geschenke, Ausflüge, TikTok-Ideen etc.), Boyfriend filtert nach Constraints (Zeit, Ort, Küche, Budget) und plant daraus Dates. Zwei Rollen mit Login — Boyfriend hat private Notizen/Wishes die Girlfriend nicht sieht.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend/DB**: Firebase (Auth mit Email/Passwort + Firestore NoSQL)
- **Hosting**: GitHub Pages auf `datemate.piriyan.dev`
- **Deploy**: `npm run build && npx gh-pages -d dist`

## Firebase Projekt
- Project ID: `datemate-a65bf`
- Firestore mit Security Rules (users + wishes Collections)
- Composite Index auf `wishes`: coupleId (asc) + createdAt (desc)
- `experimentalForceLongPolling: true` in Firestore Init wegen Safari-Kompatibilität

## Projektstruktur
```
src/
├── firebase.ts              # Firebase Init (Auth + Firestore mit LongPolling)
├── types.ts                 # Types: UserProfile, Wish, DatePlan, WishCategory, etc.
├── App.tsx                  # Routing: /login, /link, /
├── main.tsx                 # Entry mit BrowserRouter, AuthProvider, Toaster
├── index.css                # Tailwind + CSS vars (dark theme)
├── contexts/
│   └── AuthContext.tsx       # Auth State, signIn/signUp/signOut, linkPartner()
├── services/
│   └── firestore.ts         # CRUD: createWish, updateWish, deleteWish, subscribeToWishes, filterWishes
├── pages/
│   ├── Login.tsx             # Login/Register mit Rollenauswahl (boyfriend/girlfriend)
│   ├── PartnerLink.tsx       # Partner verknüpfen via 6-stelligem Code
│   └── Dashboard.tsx         # Haupt-View: Wishes anzeigen, filtern, suchen
└── components/
    ├── WishCard.tsx           # Einzelner Wish mit Status-Toggle, Edit, Delete
    └── WishForm.tsx           # Modal zum Erstellen/Bearbeiten von Wishes
```

## Datenmodell (Firestore)
- `users/{uid}`: displayName, email, role (boyfriend|girlfriend), partnerCode, partnerId, coupleId
- `wishes/{id}`: title, description, category, tags[], location, cuisine, priceRange(1-3), priority(1-5), status(open|planned|done), isPrivate, sourceUrl, createdBy, coupleId
- coupleId = sorted UIDs joined with '_': `[uid1, uid2].sort().join('_')`

## Bekannte Fixes die schon gemacht wurden
- Firestore `undefined`-Werte werden rausgefiltert vor dem Speichern (Object.fromEntries + filter)
- Safari Firestore: `experimentalForceLongPolling: true`
- Users Security Rule: `allow update: if request.auth != null` (statt nur eigenes Profil, weil linkPartner beide Profile updatet)
- PartnerLink zeigt Status statt Redirect wenn bereits verknüpft

## Design
- Dark Theme mit CSS variables (--color-bg: #0f0f14, --color-surface: #1a1a24, --color-accent: #f43f5e)
- Fonts: DM Serif Display (headings) + DM Sans (body) via Google Fonts
- Glass-Effekt (.glass class) für Cards
- Rose/Pink Akzentfarbe, Boyfriend=blue badges, Girlfriend=rose badges

## Nächste Features (noch nicht gebaut)
- Random-Wish-Picker ("Überrasch mich")
- Erweiterte Filter-Constraints (Zeit, Wetter, Budget-Buttons)
- Surprise-Mode (Boyfriend plant Date, Girlfriend sieht nur Datum)
- DatePlan-Erstellung aus mehreren Wishes
- Wetter-Integration
