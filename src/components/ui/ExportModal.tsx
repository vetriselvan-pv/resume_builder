import React from 'react';
import { X, Download, Copy, FileText, Check, FileCode } from 'lucide-react';
import { GeneratedPackage } from '../../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: GeneratedPackage;
  onShowToast: (msg: string) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  pkg,
  onShowToast
}) => {
  if (!isOpen) return null;

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast(`Downloaded ${filename}`);
  };

  const handleDownloadAll = () => {
    const compClean = pkg.company.replace(/\s+/g, '_');
    downloadFile(`Vetriselvan_Panneerselvam_Resume_${compClean}.tex`, pkg.resumeLatex);
    downloadFile(`Vetriselvan_Panneerselvam_CoverLetter_${compClean}.tex`, pkg.coverLetterLatex);
    downloadFile(`Recruiter_Outreach_${compClean}.txt`, pkg.recruiterEmail);
    downloadFile(`LinkedIn_Note_${compClean}.txt`, pkg.linkedinConnection);
    
    const starTxt = pkg.starStories.map(s => 
      `STORY: ${s.title} (${s.project})\n` +
      `Situation: ${s.situation}\n` +
      `Task: ${s.task}\n` +
      `Action: ${s.action}\n` +
      `Result: ${s.result}\n` +
      `Tech: ${s.technologies.join(', ')}\n\n`
    ).join('----------------------------------------\n');
    
    downloadFile(`STAR_Stories_${compClean}.txt`, starTxt);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 shadow-xl text-slate-900 space-y-5 animate-in zoom-in-95 duration-150">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold">Export Career Application Package</h3>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600">
          Download all compiled LaTeX sources and communication drafts tailored for <strong className="text-slate-900">{pkg.position}</strong> at <strong className="text-indigo-700">{pkg.company}</strong>.
        </p>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="font-semibold block">resume.tex</span>
                <span className="text-[10px] text-slate-500">ATS LaTeX Resume Source</span>
              </div>
            </div>
            <button
              onClick={() => downloadFile(`Vetriselvan_Panneerselvam_Resume_${pkg.company.replace(/\s+/g, '_')}.tex`, pkg.resumeLatex)}
              className="text-xs bg-white hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-sm"
            >
              Download
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-indigo-600" />
              <div>
                <span className="font-semibold block">coverletter.tex</span>
                <span className="text-[10px] text-slate-500">Tailored Cover Letter LaTeX</span>
              </div>
            </div>
            <button
              onClick={() => downloadFile(`Vetriselvan_Panneerselvam_CoverLetter_${pkg.company.replace(/\s+/g, '_')}.tex`, pkg.coverLetterLatex)}
              className="text-xs bg-white hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-sm"
            >
              Download
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <div>
                <span className="font-semibold block">Outreach & STAR Stories (.txt)</span>
                <span className="text-[10px] text-slate-500">Recruiter Email, LinkedIn Note & Interview Prep</span>
              </div>
            </div>
            <button
              onClick={() => downloadFile(`Outreach_Notes_${pkg.company.replace(/\s+/g, '_')}.txt`, pkg.recruiterEmail + "\n\n" + pkg.linkedinConnection)}
              className="text-xs bg-white hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-sm"
            >
              Download
            </button>
          </div>
        </div>

        <div className="pt-2 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
          >
            Cancel
          </button>
          <button
            onClick={handleDownloadAll}
            className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Package</span>
          </button>
        </div>

      </div>
    </div>
  );
};
