import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Role } from '../types';
import toast from 'react-hot-toast';

export default function Login() {
  const { signIn, signUp } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role>('boyfriend');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isRegister) {
        await signUp(email, password, name, role);
        toast.success('Account erstellt!');
      } else {
        await signIn(email, password);
        toast.success('Willkommen zurück!');
      }
    } catch (err: any) {
      const msg = err.code === 'auth/invalid-credential'
        ? 'Falsche E-Mail oder Passwort'
        : err.code === 'auth/email-already-in-use'
        ? 'E-Mail bereits registriert'
        : err.code === 'auth/weak-password'
        ? 'Passwort muss mindestens 6 Zeichen haben'
        : 'Etwas ist schiefgelaufen';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-4">
            <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
          </div>
          <h1 className="font-display text-3xl text-white">DateMate</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            {isRegister ? 'Account erstellen' : 'Willkommen zurück'}
          </p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <>
                <div>
                  <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Rolle</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('boyfriend')}
                      className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        role === 'boyfriend'
                          ? 'bg-blue-500/15 border-blue-500/40 text-blue-400'
                          : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]'
                      }`}
                    >
                      👨 Boyfriend
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('girlfriend')}
                      className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        role === 'girlfriend'
                          ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                          : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]'
                      }`}
                    >
                      👩 Girlfriend
                    </button>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">E-Mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Moment...
                </span>
              ) : isRegister ? 'Registrieren' : 'Einloggen'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-[var(--color-text-muted)] hover:text-rose-400 transition-colors"
            >
              {isRegister ? 'Bereits registriert? Einloggen' : 'Noch kein Account? Registrieren'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
