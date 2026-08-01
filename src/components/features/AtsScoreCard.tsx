import React, { useState } from 'react';
import { Target, CheckCircle2, AlertTriangle, HelpCircle, Lightbulb, Search, ArrowUpRight } from 'lucide-react';
import { ATSReport } from '../../types';

interface AtsScoreCardProps {
  report: ATSReport;
  company: string;
  position: string;
}

export const AtsScoreCard: React.FC<AtsScoreCardProps> = ({
  report,
  company,
  position
}) => {
  const [filter, setFilter] = useState<'all' | 'found' | 'missing'>('all');

  const getScoreColor = (pct: number) => {
    if (pct >= 85) return { text: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', ring: 'stroke-emerald-400' };
    if (pct >= 70) return { text: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', ring: 'stroke-amber-400' };
    return { text: 'text-rose-400', bg: 'bg-rose-500/20', border: 'border-rose-500/30', ring: 'stroke-rose-400' };
  };

  const colors = getScoreColor(report.matchPercentage);
  const strokeDashoffset = 283 - (283 * report.matchPercentage) / 100;

  const filteredKeywords = report.keywordDensity.filter(item => {
    if (filter === 'found') return item.foundInProfile;
    if (filter === 'missing') return !item.foundInProfile;
    return true;
  });

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-6">
      
      {/* Header & Gauge Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">ATS Match & Keyword Diagnostics</h3>
            <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono">
              {company}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Real-time keyword alignment comparing Vetriselvan's permanent profile against {position} requirements.
          </p>
        </div>

        {/* Score Ring Gauge */}
        <div className="flex items-center space-x-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 shrink-0">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                className="stroke-slate-200"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                className={`${colors.ring} transition-all duration-1000 ease-out`}
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-base font-extrabold ${colors.text}`}>{report.matchPercentage}%</span>
              <span className="text-[8px] text-slate-500 font-semibold uppercase">ATS Score</span>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <div className="font-semibold text-slate-800">
              {report.matchPercentage >= 85 ? "Excellent ATS Alignment" : report.matchPercentage >= 70 ? "Good ATS Match" : "Moderate Alignment"}
            </div>
            <p className="text-[11px] text-slate-500 max-w-[180px] leading-tight">
              Top keywords mapped cleanly to FPX Library, Pulse, & Arab Bank projects.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Key Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Top Matching Skills */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Top Matching Skills ({report.matchingSkills.length})</h4>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {report.matchingSkills.map((skill, i) => (
              <span key={i} className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-amber-600">
            <AlertTriangle className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Missing Keywords ({report.missingKeywords.length})</h4>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {report.missingKeywords.length > 0 ? (
              report.missingKeywords.map((kw, i) => (
                <span key={i} className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded text-[11px] font-medium">
                  {kw}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500 italic">No critical keywords missing!</span>
            )}
          </div>
        </div>

        {/* Skills Not Demonstrated */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-sky-600">
            <HelpCircle className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Skills Not In Profile</h4>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {report.skillsNotDemonstrated.length > 0 ? (
              report.skillsNotDemonstrated.map((s, i) => (
                <span key={i} className="bg-white text-slate-500 border border-slate-200 px-2 py-0.5 rounded text-[11px]">
                  {s}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500 italic">None noted</span>
            )}
          </div>
        </div>
      </div>

      {/* Suggested Resume Improvements */}
      {report.suggestedImprovements && report.suggestedImprovements.length > 0 && (
        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-indigo-600">
            <Lightbulb className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Strategic Alignment Recommendations</h4>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-6 list-disc">
            {report.suggestedImprovements.map((imp, idx) => (
              <li key={idx} className="leading-relaxed">{imp}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Keyword Density Table / Filter */}
      {report.keywordDensity && report.keywordDensity.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-2">
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Keyword Density Breakdown</span>
            </h4>
            <div className="flex items-center space-x-1 text-[10px]">
              <button
                onClick={() => setFilter('all')}
                className={`px-2 py-0.5 rounded ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                All ({report.keywordDensity.length})
              </button>
              <button
                onClick={() => setFilter('found')}
                className={`px-2 py-0.5 rounded ${filter === 'found' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                Matched
              </button>
              <button
                onClick={() => setFilter('missing')}
                className={`px-2 py-0.5 rounded ${filter === 'missing' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                Missing
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {filteredKeywords.map((item, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                  item.foundInProfile
                    ? 'bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}
              >
                <span className="font-mono text-[11px] truncate">{item.keyword}</span>
                {item.foundInProfile ? (
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Match</span>
                ) : (
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">Absent</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
