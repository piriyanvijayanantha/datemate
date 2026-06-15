import { useState, useEffect, useRef } from 'react';
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
  dedupeAllergies,
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
  const notesInitialized = useRef(false);

  // Kein Partner → zur Verknüpfung (gleicher Guard wie Dashboard)
  useEffect(() => {
    if (profile && !profile.partnerId) navigate('/link');
  }, [profile, navigate]);

  // Eigenes Profil realtime
  useEffect(() => {
    if (!profile?.uid) return;
    return subscribeToProfile(profile.uid, (p) => {
      setMe(p);
      if (!notesInitialized.current && p) {
        setNotesDraft(p.foodNotes ?? '');
        notesInitialized.current = true;
      }
    });
  }, [profile?.uid]);

  // Partner-Profil realtime
  useEffect(() => {
    if (!profile?.partnerId) return;
    return subscribeToProfile(profile.partnerId, setPartner);
  }, [profile?.partnerId]);

  if (!profile) return null;
  const uid = profile.uid;

  const myAllergies = dedupeAllergies(me?.allergies ?? []);
  const myDishes = me?.favoriteDishes ?? [];
  const partnerAllergies = dedupeAllergies(partner?.allergies ?? []);

  const handleAddAllergy = async () => {
    const value = allergyInput.trim();
    if (!value) return;
    setAllergyInput('');
    try {
      await saveAllergies(uid, [...myAllergies, value]);
    } catch {
      toast.error('Fehler beim Speichern');
    }
  };

  const handleRemoveAllergy = async (tag: string) => {
    try {
      await saveAllergies(uid, myAllergies.filter((t) => t !== tag));
    } catch {
      toast.error('Fehler beim Speichern');
    }
  };

  const handleSaveNotes = async () => {
    if (notesDraft === (me?.foodNotes ?? '')) return;
    try {
      await saveFoodNotes(uid, notesDraft);
      toast.success('Notiz gespeichert');
    } catch {
      toast.error('Fehler beim Speichern');
    }
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
    try {
      await saveDishes(uid, removeDishFromList(myDishes, id));
      toast.success('Gelöscht');
    } catch {
      toast.error('Fehler beim Speichern');
    }
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
                  <button onClick={() => handleRemoveAllergy(tag)} aria-label={`${tag} entfernen`} className="hover:text-white">
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
              {partnerAllergies.length === 0 && (
                <span className="text-sm text-[var(--color-text-muted)]">Keine eingetragen</span>
              )}
              {partnerAllergies.map((tag) => (
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
