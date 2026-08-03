import React, { useState } from 'react';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginScreenProps {
  onLogin: (password: string) => Promise<boolean>;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setIsLoading(true);
    setError(null);

    const success = await onLogin(password);
    
    if (!success) {
      setError('Invalid password. Please try again.');
      setIsLoading(false);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-4">
      {/* Background decoration elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-indigo-100 to-purple-50 blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-emerald-100 to-cyan-50 blur-[100px] opacity-60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-zinc-200/50 rounded-3xl p-10 shadow-2xl shadow-zinc-200/50 flex flex-col items-center">
          
          <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 shadow-inner shadow-white/20">
            <Lock className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-2xl font-semibold text-zinc-900 mb-2 text-center tracking-tight">
            Career Package Studio
          </h1>
          <p className="text-sm text-zinc-500 mb-8 text-center max-w-[280px]">
            Enter your password to access the AI generation studio and build your application.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-medium text-zinc-700 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-300 group-hover:border-zinc-300"
                  disabled={isLoading}
                  autoFocus
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-500 font-medium ml-1"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl px-4 py-3.5 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-zinc-900/20 active:scale-[0.98]"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Enter Studio
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          
        </div>
        
        <p className="text-center text-xs text-zinc-400 mt-8 font-medium">
          Secured by local environment variables
        </p>
      </motion.div>
    </div>
  );
};
