import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, UtensilsCrossed } from 'lucide-react';

const TABS = [
  { path: '/', label: 'Wünsche', Icon: Heart },
  { path: '/kitchen', label: 'Küche', Icon: UtensilsCrossed },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 glass border-t border-[var(--color-border)]">
      <div className="max-w-2xl mx-auto px-4 flex">
        {TABS.map(({ path, label, Icon }) => {
          const active = pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                active ? 'text-rose-400' : 'text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" fill={active ? 'currentColor' : 'none'} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
