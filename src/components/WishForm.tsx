import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Wish, WishCategory, CATEGORY_CONFIG } from '../types';
import { createWish, updateWish } from '../services/firestore';
import toast from 'react-hot-toast';

interface Props {
  wish: Wish | null; // null = neuer Wish
  coupleId: string;
  userId: string;
  onClose: () => void;
}

export default function WishForm({ wish, coupleId, userId, onClose }: Props) {
  const isEdit = !!wish;
  const [title, setTitle] = useState(wish?.title ?? '');
  const [description, setDescription] = useState(wish?.description ?? '');
  const [category, setCategory] = useState<WishCategory>(wish?.category ?? 'restaurant');
  const [location, setLocation] = useState(wish?.location ?? '');
  const [cuisine, setCuisine] = useState(wish?.cuisine ?? '');
  const [priceRange, setPriceRange] = useState<1 | 2 | 3>(wish?.priceRange ?? 2);
  const [priority, setPriority] = useState<number>(wish?.priority ?? 3);
  const [isPrivate, setIsPrivate] = useState(wish?.isPrivate ?? false);
  const [sourceUrl, setSourceUrl] = useState(wish?.sourceUrl ?? '');
  const [tagsInput, setTagsInput] = useState(wish?.tags.join(', ') ?? '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      toast.error('Titel ist erforderlich');
      return;
    }

    setLoading(true);
    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      if (isEdit && wish) {
        await updateWish(wish.id, {
          title: title.trim(),
          description: description.trim() || undefined,
          category,
          location: location.trim() || undefined,
          cuisine: cuisine.trim() || undefined,
          priceRange: category === 'restaurant' ? priceRange : undefined,
          priority: priority as 1 | 2 | 3 | 4 | 5,
          isPrivate,
          sourceUrl: sourceUrl.trim() || undefined,
          tags,
        });
        toast.success('Aktualisiert!');
      } else {
        await createWish({
          createdBy: userId,
          coupleId,
          title: title.trim(),
          description: description.trim() || undefined,
          category,
          location: location.trim() || undefined,
          cuisine: cuisine.trim() || undefined,
          priceRange: category === 'restaurant' ? priceRange : undefined,
          priority: priority as 1 | 2 | 3 | 4 | 5,
          status: 'open',
          isPrivate,
          sourceUrl: sourceUrl.trim() || undefined,
          tags,
        });
        toast.success('Wunsch hinzugefügt! ✨');
      }
      onClose();
    } catch (err) {
      toast.error('Fehler beim Speichern');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-t-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="font-display text-lg text-white">
            {isEdit ? 'Wunsch bearbeiten' : 'Neuer Wunsch'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <X className="w-5 h-5 text-[var(--color-text-muted)]" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Titel */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Titel *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="z.B. Sushi Zanmai in Bern"
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          {/* Beschreibung */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Beschreibung</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Details, warum, wann gesehen..."
              rows={2}
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
            />
          </div>

          {/* Kategorie */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Kategorie</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(CATEGORY_CONFIG).map(([key, { label, emoji }]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCategory(key as WishCategory)}
                  className={`py-2 rounded-xl border text-xs font-medium transition-all ${
                    category === key
                      ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                      : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]'
                  }`}
                >
                  {emoji} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurant-spezifisch */}
          {category === 'restaurant' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Küche</label>
                <input
                  type="text"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  placeholder="Japanisch, Italienisch..."
                  className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Preis</label>
                <div className="flex gap-1.5">
                  {([1, 2, 3] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriceRange(p)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs transition-all ${
                        priceRange === p
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                          : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)]'
                      }`}
                    >
                      {'💰'.repeat(p)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Ort */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Ort</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Bern, Zürich, egal..."
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          {/* Priorität */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">
              Priorität: <span className="text-white">{['', 'Nice to have', 'Wäre cool', 'Will ich', 'Sehr wichtig', 'MUSS SEIN'][priority]}</span>
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] mt-0.5">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Tags (kommagetrennt)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="romantisch, abend, draussen..."
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          {/* Source URL */}
          <div>
            <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Link (TikTok, Insta...)</label>
            <input
              type="url"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>

          {/* Private Toggle */}
          <button
            type="button"
            onClick={() => setIsPrivate(!isPrivate)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
              isPrivate
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-transparent border-[var(--color-border)] hover:border-[var(--color-text-muted)]'
            }`}
          >
            {isPrivate ? (
              <EyeOff className="w-4 h-4 text-amber-400" />
            ) : (
              <Eye className="w-4 h-4 text-[var(--color-text-muted)]" />
            )}
            <div className="text-left">
              <div className="text-sm font-medium text-white">
                {isPrivate ? 'Privat — nur du siehst das' : 'Sichtbar für beide'}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {isPrivate ? 'Perfekt für Überraschungen 🤫' : 'Dein Partner sieht diesen Wunsch auch'}
              </div>
            </div>
          </button>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading || !title.trim()}
            className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Speichern...' : isEdit ? 'Aktualisieren' : 'Wunsch hinzufügen'}
          </button>
        </div>
      </div>
    </div>
  );
}
