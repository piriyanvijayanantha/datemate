import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link2, Copy, Check, ArrowRight, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function PartnerLink() {
  const { profile, linkPartner, signOut } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!profile) return null;

  // Bereits verknüpft → zeige Info statt Redirect
  if (profile.partnerId) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-sm text-center space-y-6">
            <div className="text-4xl">💑</div>
            <h1 className="font-display text-2xl text-white">Ihr seid verknüpft!</h1>
            <p className="text-[var(--color-text-muted)]">Alles bereit. Wünsche werden geteilt.</p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors"
            >
              Zum Dashboard
            </button>
            <button
                onClick={signOut}
                className="mx-auto flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" /> Abmelden
            </button>
          </div>
        </div>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.partnerCode);
    setCopied(true);
    toast.success('Code kopiert!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLink = async () => {
    if (!code.trim()) return;
    setLoading(true);
    try {
      const success = await linkPartner(code.trim());
      if (success) {
        toast.success('Partner verknüpft! 🎉');
        navigate('/');
      } else {
        toast.error('Code nicht gefunden. Prüfe den Code nochmal.');
      }
    } catch {
      toast.error('Etwas ist schiefgelaufen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <button
        onClick={signOut}
        className="fixed top-4 right-4 z-20 p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
        title="Abmelden"
      >
        <LogOut className="w-5 h-5" />
      </button>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-sm relative z-10 space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-4">
            <Link2 className="w-7 h-7 text-rose-500" />
          </div>
          <h1 className="font-display text-2xl text-white">Partner verknüpfen</h1>
          <p className="text-[var(--color-text-muted)] mt-1 text-sm">
            Teile deinen Code oder gib den Code deines Partners ein
          </p>
        </div>

        {/* Eigener Code */}
        <div className="glass rounded-2xl p-5">
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Dein Code zum Teilen:</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-4 py-3 bg-[var(--color-bg)] rounded-xl font-mono text-xl tracking-[0.3em] text-center text-white">
              {profile.partnerCode}
            </div>
            <button
              onClick={handleCopy}
              className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-rose-500/30 transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-[var(--color-text-muted)]" />}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[var(--color-border)]" />
          <span className="text-xs text-[var(--color-text-muted)]">ODER</span>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        {/* Partner Code eingeben */}
        <div className="glass rounded-2xl p-5">
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Code deines Partners:</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              maxLength={6}
              placeholder="ABC123"
              className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl font-mono text-xl tracking-[0.3em] text-center text-white placeholder:text-[var(--color-text-muted)]/30 focus:outline-none focus:border-rose-500/50 transition-colors uppercase"
            />
            <button
              onClick={handleLink}
              disabled={loading || code.length < 4}
              className="p-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
