export type Role = 'boyfriend' | 'girlfriend';

export type WishCategory = 
  | 'restaurant' 
  | 'gift' 
  | 'activity' 
  | 'place' 
  | 'tiktok' 
  | 'other';

export type WishStatus = 'open' | 'planned' | 'done';

export interface FavoriteDish {
  id: string;          // crypto.randomUUID()
  name: string;
  note?: string;       // z.B. "am liebsten scharf, ohne Koriander"
  sourceUrl?: string;  // Rezept / TikTok / Insta
  createdAt: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: Role;
  partnerCode: string;    // Code zum Teilen mit Partner
  partnerId?: string;     // UID des Partners (nach Verknüpfung)
  allergies?: string[];        // Tag-Chips, z.B. ["Nüsse", "Laktose"]
  foodNotes?: string;          // Freitext "sonstige wichtige Sachen"
  favoriteDishes?: FavoriteDish[];
  createdAt: number;
}

export interface Wish {
  id: string;
  createdBy: string;      // UID
  coupleId: string;       // Verbindet beide Partner
  category: WishCategory;
  title: string;
  description?: string;
  tags: string[];
  location?: string;
  cuisine?: string;       // Für Restaurants
  priceRange?: 1 | 2 | 3; // € / €€ / €€€
  priority: 1 | 2 | 3 | 4 | 5;
  status: WishStatus;
  isPrivate: boolean;     // Nur für Creator sichtbar
  imageUrl?: string;
  sourceUrl?: string;     // TikTok/Instagram Link
  createdAt: number;
  updatedAt: number;
}

export interface DatePlan {
  id: string;
  coupleId: string;
  plannedBy: string;
  title: string;
  wishIds: string[];
  date?: number;
  constraints: {
    maxTime?: number;     // in Minuten
    cuisine?: string;
    location?: string;
  };
  isSurprise: boolean;   // GF sieht es nicht
  notes?: string;        // Private Notizen für BF
  status: 'draft' | 'confirmed' | 'completed';
  createdAt: number;
}

export const CATEGORY_CONFIG: Record<WishCategory, { label: string; emoji: string }> = {
  restaurant: { label: 'Restaurant', emoji: '🍽️' },
  gift: { label: 'Geschenk', emoji: '🎁' },
  activity: { label: 'Aktivität', emoji: '🎯' },
  place: { label: 'Ort', emoji: '📍' },
  tiktok: { label: 'TikTok Idee', emoji: '📱' },
  other: { label: 'Sonstiges', emoji: '✨' },
};

export const PRIORITY_LABELS: Record<number, string> = {
  1: 'Nice to have',
  2: 'Wäre cool',
  3: 'Will ich',
  4: 'Sehr wichtig',
  5: 'MUSS SEIN',
};
