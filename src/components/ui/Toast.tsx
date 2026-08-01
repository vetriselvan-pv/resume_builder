import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-white border border-slate-200 text-slate-900 px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 animate-in slide-in-from-bottom-5 duration-200">
      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
      <span className="text-xs font-semibold">{message}</span>
      <button onClick={onClose} className="text-slate-500 hover:text-slate-900 text-xs pl-2">
        ✕
      </button>
    </div>
  );
};
