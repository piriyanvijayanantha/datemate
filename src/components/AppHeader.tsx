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
