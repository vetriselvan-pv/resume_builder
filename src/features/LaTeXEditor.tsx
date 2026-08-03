import React, { useState } from 'react';
import { FileCode2, Copy, Download, Check, Eye, Code, ExternalLink, RefreshCw } from 'lucide-react';
import { VisualResumePreview } from './VisualResumePreview';

interface LaTeXEditorProps {
  resumeLatex: string;
  coverLetterLatex: string;
  company: string;
  position: string;
  onUpdateResumeLatex: (val: string) => void;
  onUpdateCoverLetterLatex: (val: string) => void;
  onShowToast: (msg: string) => void;
}

export const LaTeXEditor: React.FC<LaTeXEditorProps> = ({
  resumeLatex,
  coverLetterLatex,
  company,
  position,
  onUpdateResumeLatex,
  onUpdateCoverLetterLatex,
  onShowToast
}) => {
  const [activeDoc, setActiveDoc] = useState<'resume' | 'coverLetter'>('resume');
  const [viewMode, setViewMode] = useState<'split' | 'preview' | 'code'>('split');
  const [copied, setCopied] = useState(false);

  const currentCode = activeDoc === 'resume' ? resumeLatex : coverLetterLatex;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    onShowToast(`Copied ${activeDoc === 'resume' ? 'resume.tex' : 'coverletter.tex'} to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = activeDoc === 'resume' 
      ? `Vetriselvan_Panneerselvam_Resume_${company.replace(/\s+/g, '_')}.tex`
      : `Vetriselvan_Panneerselvam_CoverLetter_${company.replace(/\s+/g, '_')}.tex`;

    const blob = new Blob([currentCode], { type: 'text/x-tex;charset=utf-8' });
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

  const handleOpenOverleafInfo = () => {
    window.open("https://www.overleaf.com/docs", "_blank");
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
      
      {/* Top Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        
        {/* Document Tabs */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveDoc('resume')}
            id="tab-doc-resume"
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeDoc === 'resume'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/40'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>resume.tex</span>
          </button>

          <button
            onClick={() => setActiveDoc('coverLetter')}
            id="tab-doc-coverletter"
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeDoc === 'coverLetter'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/40'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>coverletter.tex</span>
          </button>
        </div>

        {/* View Mode Toggle & Copy/Download */}
        <div className="flex items-center space-x-2">
          
          {/* View Segmented Toggle */}
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center space-x-1 text-xs">
            <button
              onClick={() => setViewMode('split')}
              id="view-split"
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                viewMode === 'split' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => setViewMode('preview')}
              id="view-preview"
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center space-x-1 transition-colors ${
                viewMode === 'preview' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Paper Preview</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              id="view-code"
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center space-x-1 transition-colors ${
                viewMode === 'code' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Code className="w-3 h-3" />
              <span>LaTeX Source</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            id="btn-copy-latex-source"
            className="flex items-center space-x-1.5 bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold transition-all shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy LaTeX'}</span>
          </button>

          <button
            onClick={handleDownload}
            id="btn-download-tex-source"
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .tex</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Display Grid */}
      <div className="h-[600px] lg:h-[750px] grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-scroll">
        
        {/* Left Side: LaTeX Source Code Editor */}
        {(viewMode === 'split' || viewMode === 'code') && (
          <div className={`flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden h-full ${
            viewMode === 'code' ? 'col-span-full' : ''
          }`}>
            <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px] text-slate-700">
                {activeDoc === 'resume' ? 'resume.tex' : 'coverletter.tex'}
              </span>
              <button
                onClick={handleOpenOverleafInfo}
                className="text-[10px] text-indigo-600 hover:underline flex items-center space-x-1"
              >
                <span>Compile in Overleaf</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            <textarea
              value={currentCode}
              onChange={(e) => {
                if (activeDoc === 'resume') onUpdateResumeLatex(e.target.value);
                else onUpdateCoverLetterLatex(e.target.value);
              }}
              id="textarea-latex-code"
              spellCheck={false}
              className="flex-1 w-full bg-white text-slate-800 font-mono text-[11.5px] p-4 leading-relaxed focus:outline-none resize-none selection:bg-indigo-500/20 overflow-y-auto"
            />
          </div>
        )}

        {/* Right Side: Paper Document Simulation Preview */}
        {(viewMode === 'split' || viewMode === 'preview') && (
          <div className={`h-full ${viewMode === 'preview' ? 'col-span-full' : ''}`}>
            <VisualResumePreview
              latexCode={currentCode}
              candidateName="Vetriselvan Panneerselvam"
              companyName={company}
              positionName={position}
              onCopyLatex={handleCopy}
              onDownloadTex={handleDownload}
            />
          </div>
        )}

      </div>
    </div>
  );
};
