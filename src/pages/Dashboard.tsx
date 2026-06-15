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

export default function Dashboard() {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingWish, setEditingWish] = useState<Wish | null>(null);
  const [activeCategory, setActiveCategory] = useState<WishCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Redirect wenn kein Partner verknüpft
  useEffect(() => {
    if (profile && !profile.partnerId) {
      navigate('/link');
    }
  }, [profile, navigate]);

  // Realtime Wishes laden
  useEffect(() => {
    if (!profile?.partnerId) return;

    const coupleId = [profile.uid, profile.partnerId].sort().join('_');
    const unsub = subscribeToWishes(coupleId, profile.uid, (data) => {
      setWishes(data);
    });

    return unsub;
  }, [profile]);

  if (!profile) return null;

  // Filtern
  const filtered = wishes.filter((w) => {
    if (activeCategory !== 'all' && w.category !== activeCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        w.title.toLowerCase().includes(q) ||
        w.description?.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q)) ||
        w.cuisine?.toLowerCase().includes(q) ||
        w.location?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const openWishes = filtered.filter((w) => w.status === 'open');
  const plannedWishes = filtered.filter((w) => w.status === 'planned');
  const doneWishes = filtered.filter((w) => w.status === 'done');

  return (
    <div className="min-h-screen pb-24">
      <AppHeader />

      <main className="max-w-2xl mx-auto px-4 pt-4">
        {/* Search & Filter Bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Suchen..."
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2.5 rounded-xl border transition-colors ${
              showFilters || activeCategory !== 'all'
                ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-white/10 text-white'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              Alle
            </button>
            {Object.entries(CATEGORY_CONFIG).map(([key, { label, emoji }]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as WishCategory)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === key
                    ? 'bg-rose-500/15 text-rose-400'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white'
                }`}
              >
                {emoji} {label}
              </button>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="glass rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">{openWishes.length}</div>
            <div className="text-xs text-[var(--color-text-muted)]">Offen</div>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-amber-400">{plannedWishes.length}</div>
            <div className="text-xs text-[var(--color-text-muted)]">Geplant</div>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-emerald-400">{doneWishes.length}</div>
            <div className="text-xs text-[var(--color-text-muted)]">Erledigt</div>
          </div>
        </div>

        {/* Wish Lists */}
        {openWishes.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Wünsche ({openWishes.length})
            </h2>
            <div className="space-y-2">
              {openWishes.map((wish) => (
                <WishCard
                  key={wish.id}
                  wish={wish}
                  currentUserId={profile.uid}
                  onEdit={(w) => { setEditingWish(w); setShowForm(true); }}
                />
              ))}
            </div>
          </section>
        )}

        {plannedWishes.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-semibold text-amber-400/70 uppercase tracking-wider mb-3">
              Geplant ({plannedWishes.length})
            </h2>
            <div className="space-y-2">
              {plannedWishes.map((wish) => (
                <WishCard
                  key={wish.id}
                  wish={wish}
                  currentUserId={profile.uid}
                  onEdit={(w) => { setEditingWish(w); setShowForm(true); }}
                />
              ))}
            </div>
          </section>
        )}

        {doneWishes.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-semibold text-emerald-400/70 uppercase tracking-wider mb-3">
              Erledigt ({doneWishes.length})
            </h2>
            <div className="space-y-2 opacity-60">
              {doneWishes.map((wish) => (
                <WishCard
                  key={wish.id}
                  wish={wish}
                  currentUserId={profile.uid}
                  onEdit={(w) => { setEditingWish(w); setShowForm(true); }}
                />
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">💭</div>
            <p className="text-[var(--color-text-muted)]">
              {searchQuery ? 'Nichts gefunden' : 'Noch keine Wünsche. Füg den ersten hinzu!'}
            </p>
          </div>
        )}
      </main>

      {/* FAB */}
      <button
        onClick={() => { setEditingWish(null); setShowForm(true); }}
        className="fixed bottom-20 right-6 w-14 h-14 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Wish Form Modal */}
      {showForm && (
        <WishForm
          wish={editingWish}
          coupleId={[profile.uid, profile.partnerId!].sort().join('_')}
          userId={profile.uid}
          onClose={() => { setShowForm(false); setEditingWish(null); }}
        />
      )}
      <BottomNav />
    </div>
  );
}
