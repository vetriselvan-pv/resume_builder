import React, { useState } from 'react';
import { Building2, Briefcase, FileText, Sparkles, CheckCircle2, Globe, FileCode2, ArrowRight } from 'lucide-react';
import { SAMPLE_JOB_DESCRIPTIONS } from '../data/defaultProfile';
import { SampleJD } from '../types';

interface JobInputSectionProps {
  onGenerate: (company: string, position: string, jdText: string) => void;
  isLoading: boolean;
}

export const JobInputSection: React.FC<JobInputSectionProps> = ({
  onGenerate,
  isLoading
}) => {
  const [company, setCompany] = useState("Stripe");
  const [position, setPosition] = useState("Senior Full Stack Engineer - Financial Products");
  const [jdText, setJdText] = useState(SAMPLE_JOB_DESCRIPTIONS[0].description);
  const [selectedSampleId, setSelectedSampleId] = useState<string>("stripe-fullstack");

  const handleSelectSample = (sample: SampleJD) => {
    setSelectedSampleId(sample.id);
    setCompany(sample.company);
    setPosition(sample.role);
    setJdText(sample.description);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jdText.trim()) return;
    onGenerate(company, position, jdText);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <span>Target Job & Company Description</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Paste any Job Description or select a preset to generate a company-specific, ATS-optimized LaTeX resume, cover letter, and STAR stories.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-medium text-slate-500 mr-1">Presets:</span>
          {SAMPLE_JOB_DESCRIPTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectSample(s)}
              type="button"
              id={`preset-${s.id}`}
              className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                selectedSampleId === s.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {s.company}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company & Role Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Company Name</span>
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setSelectedSampleId("");
              }}
              placeholder="e.g. Stripe, Barclays, Revolut, Adyen"
              id="input-company-name"
              className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-900 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
              <Briefcase className="w-3.5 h-3.5 text-slate-500" />
              <span>Job Title / Position</span>
            </label>
            <input
              type="text"
              required
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
                setSelectedSampleId("");
              }}
              placeholder="e.g. Senior Full Stack Engineer"
              id="input-job-title"
              className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-900 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Job Description Textarea */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Full Job Description (JD)</span>
            </span>
            <span className="text-[10px] text-slate-400 font-normal">Paste key responsibilities, qualifications & stack</span>
          </label>
          <textarea
            required
            rows={7}
            value={jdText}
            onChange={(e) => {
              setJdText(e.target.value);
              setSelectedSampleId("");
            }}
            placeholder="Paste the target job description here..."
            id="textarea-job-description"
            className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-900 rounded-xl p-3.5 text-xs font-mono leading-relaxed focus:outline-none transition-all resize-y"
          />
        </div>

        {/* Submit CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center space-x-2 text-[11px] text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Strictly enforces Action Verb + Technology + Business Impact formatting.</span>
          </div>

          <button
            type="submit"
            disabled={isLoading || !jdText.trim()}
            id="btn-generate-package"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Analyzing JD & Generating LaTeX Package...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Career Application Package</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
