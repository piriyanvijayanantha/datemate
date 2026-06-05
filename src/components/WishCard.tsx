import { Eye, EyeOff, ExternalLink, Pencil, Trash2, ChevronRight } from 'lucide-react';
import { Wish, CATEGORY_CONFIG, PRIORITY_LABELS } from '../types';
import { updateWish, deleteWish } from '../services/firestore';
import toast from 'react-hot-toast';

interface Props {
  wish: Wish;
  currentUserId: string;
  onEdit: (wish: Wish) => void;
}

export default function WishCard({ wish, currentUserId, onEdit }: Props) {
  const cat = CATEGORY_CONFIG[wish.category];
  const isOwn = wish.createdBy === currentUserId;

  const handleStatusCycle = async () => {
    const next = wish.status === 'open' ? 'planned' : wish.status === 'planned' ? 'done' : 'open';
    await updateWish(wish.id, { status: next });
    const labels = { planned: 'Als geplant markiert', done: 'Erledigt! 🎉', open: 'Zurück auf offen' };
    toast.success(labels[next]);
  };

  const handleDelete = async () => {
    if (!confirm('Wirklich löschen?')) return;
    await deleteWish(wish.id);
    toast.success('Gelöscht');
  };

  const priorityColor =
    wish.priority >= 4 ? 'text-rose-400' : wish.priority >= 3 ? 'text-amber-400' : 'text-[var(--color-text-muted)]';

  return (
    <div className="glass rounded-xl p-4 hover:border-rose-500/20 transition-colors group">
      <div className="flex items-start gap-3">
        {/* Category Emoji */}
        <button
          onClick={handleStatusCycle}
          className="mt-0.5 w-10 h-10 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-lg shrink-0 hover:bg-rose-500/10 transition-colors"
          title="Status ändern"
        >
          {wish.status === 'done' ? '✅' : wish.status === 'planned' ? '📅' : cat.emoji}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white truncate">{wish.title}</h3>
            {wish.isPrivate && (
              <EyeOff className="w-3.5 h-3.5 text-[var(--color-text-muted)] shrink-0" />
            )}
          </div>

          {wish.description && (
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5 line-clamp-2">
              {wish.description}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className={`text-xs font-medium ${priorityColor}`}>
              {PRIORITY_LABELS[wish.priority]}
            </span>
            {wish.cuisine && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">
                {wish.cuisine}
              </span>
            )}
            {wish.location && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                📍 {wish.location}
              </span>
            )}
            {wish.priceRange && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
                {'💰'.repeat(wish.priceRange)}
              </span>
            )}
            {wish.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-[var(--color-text-muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {wish.sourceUrl && (
            <a
              href={wish.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {isOwn && (
            <>
              <button
                onClick={() => onEdit(wish)}
                className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-rose-400 hover:bg-rose-500/10"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
