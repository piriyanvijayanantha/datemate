# ❤️ DateMate

Wünsche tracken, Dates planen, Freundin glücklich machen.

## 🚀 Setup (15 Minuten)

### 1. Firebase Projekt erstellen

1. Geh zu [console.firebase.google.com](https://console.firebase.google.com)
2. **"Projekt hinzufügen"** → Name: `datemate` → Erstellen
3. Im Projekt → **"Web-App hinzufügen"** (</> Icon)
   - App-Name: `datemate`
   - Firebase Hosting **NICHT** aktivieren (wir nutzen GitHub Pages)
   - **Registrieren** klicken
   - Die Config-Werte kopieren (apiKey, authDomain, etc.)

### 2. Firebase Auth aktivieren

1. Linkes Menü → **Authentication** → **Erste Schritte**
2. Tab **"Sign-in method"** → **"E-Mail/Passwort"** aktivieren → Speichern

### 3. Firestore erstellen

1. Linkes Menü → **Firestore Database** → **"Datenbank erstellen"**
2. Standort: `europe-west6` (Zürich!) → **Weiter**
3. **"Im Produktionsmodus starten"** → **Erstellen**
4. Tab **"Regeln"** → Inhalt von `firestore.rules` reinkopieren → **Veröffentlichen**

### 4. Firestore Index erstellen

Du brauchst einen Composite Index für die Wishes-Query:

1. Firestore → Tab **"Indexe"** → **"Index erstellen"**
2. Collection: `wishes`
3. Felder:
   - `coupleId` → Ascending
   - `createdAt` → Descending
4. Query scope: **Collection** → **Erstellen**

⏳ Der Index braucht 2-5 Minuten zum Bauen.

### 5. Projekt lokal einrichten

```bash
# In den Projektordner wechseln
cd datemate

# Dependencies installieren
npm install

# .env Datei erstellen
cp .env.example .env
```

Jetzt `.env` öffnen und die Firebase-Werte eintragen:

```
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=datemate-xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=datemate-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=datemate-xxxxx.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 6. Starten

```bash
npm run dev
```

Öffne http://localhost:5173 → 🎉

### 7. Testen

1. **Account 1 erstellen**: z.B. du als "Boyfriend"
2. Partner-Code kopieren
3. Inkognito-Tab öffnen → **Account 2 erstellen**: als "Girlfriend"
4. Partner-Code eingeben → Verknüpft!
5. Wünsche hinzufügen und testen

---

## 🌐 Deploy auf GitHub Pages

### Option A: Mit Custom Domain (piriyan.dev)

```bash
# 1. Build erstellen
npm run build

# 2. gh-pages Branch pushen
npx gh-pages -d dist

# 3. GitHub Repo → Settings → Pages
#    Source: "Deploy from a branch"
#    Branch: gh-pages / root
```

DNS bei deinem Domain-Provider:
- CNAME Record: `datemate.piriyan.dev` → `<dein-github-user>.github.io`

In GitHub Repo → Settings → Pages → Custom Domain: `datemate.piriyan.dev`

### Option B: Ohne Custom Domain

```bash
# vite.config.ts anpassen:
# base: '/datemate/'

npm run deploy
```

Erreichbar unter: `https://<user>.github.io/datemate/`

⚠️ **Wichtig**: In Firebase Console → Authentication → Settings → Authorized Domains → Deine Domain hinzufügen!

---

## 📁 Projektstruktur

```
src/
├── firebase.ts           # Firebase Init
├── types.ts              # TypeScript Types
├── contexts/
│   └── AuthContext.tsx    # Auth State Management
├── services/
│   └── firestore.ts      # Firestore CRUD
├── pages/
│   ├── Login.tsx          # Login/Register
│   ├── PartnerLink.tsx    # Partner verknüpfen
│   └── Dashboard.tsx      # Haupt-Dashboard
└── components/
    ├── WishCard.tsx        # Wunsch-Karte
    └── WishForm.tsx        # Wunsch erstellen/bearbeiten
```

## 🔒 Sicherheit

- Firebase API Keys sind **by design public** — der Schutz läuft über Firestore Security Rules
- Die `.env` Datei wird **nicht** committed (in `.gitignore`)
- Aber: Die Keys landen im Build-Output (JS Bundle). Das ist normal und sicher, solange die Firestore Rules korrekt sind
- Jeder User sieht nur Daten seines Paares
- Private Wishes sind nur für den Creator sichtbar
