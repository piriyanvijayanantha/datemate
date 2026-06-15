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
