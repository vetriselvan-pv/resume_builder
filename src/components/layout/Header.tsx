import React from 'react';
import { Briefcase, UserCheck, Download, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { Profile } from '../../types';
import logo from '../../assets/logo.svg';
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
    <header className="bg-white border-b border-[#eaeaeb] text-[#1a1a1c] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold tracking-tight text-[#1a1a1c]">Career Application AI</h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                LaTeX & ATS Suite
              </span>
            </div> 
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Profile Badge Button */}
          <button
            onClick={onOpenProfile}
            id="btn-view-profile"
            className="flex items-center space-x-2 ai-btn-secondary px-3 py-1.5 text-xs transition-all"
          >
            <UserCheck className="w-4 h-4 text-zinc-600" />
            <span className="hidden sm:inline font-medium">{profile.name}</span>
            <span className="text-[10px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded border border-zinc-200">7+ Yrs Exp</span>
          </button>

          {/* Export All Package Button */}
          {hasGenerated && onExportPackage && (
            <button
              onClick={onExportPackage}
              id="btn-export-all"
              className="flex items-center space-x-2 ai-btn-primary px-4 py-1.5 text-xs transition-all"
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
