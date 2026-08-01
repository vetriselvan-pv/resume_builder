import React from 'react';
import { Briefcase, UserCheck, Download, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { Profile } from '../types';

interface HeaderProps {
  profile: Profile;
  onOpenProfile: () => void;
  onExportPackage?: () => void;
  hasGenerated: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenProfile,
  onExportPackage,
  hasGenerated
}) => {
  return (
    <header className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold tracking-tight text-slate-900">Career Application AI</h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                LaTeX & ATS Suite
              </span>
            </div>
            <p className="text-xs text-slate-500">Truthful, company-specific job application generator</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Profile Badge Button */}
          <button
            onClick={onOpenProfile}
            id="btn-view-profile"
            className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium transition-all"
          >
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline font-semibold">{profile.name}</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">7+ Yrs Exp</span>
          </button>

          {/* Export All Package Button */}
          {hasGenerated && onExportPackage && (
            <button
              onClick={onExportPackage}
              id="btn-export-all"
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export Package</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
