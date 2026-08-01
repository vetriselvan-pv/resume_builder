import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SampleJD } from '../../types';

interface JobInputSectionProps {
  onGenerate: (company: string, position: string, jdText: string) => void;
  isLoading: boolean;
}

export const JobInputSection: React.FC<JobInputSectionProps> = ({
  onGenerate,
  isLoading
}) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [jdText, setJdText] = useState('');
  const [selectedSampleId, setSelectedSampleId] = useState<string>("");

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
    <div className="ai-card p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#eaeaeb]">
        <div>
          <h2 className="text-base font-medium text-[#1a1a1c]">
            Target Job & Company Description
          </h2>
          <p className="text-[11px] text-[#737373] mt-1">
            Paste any Job Description or select a preset to generate a company-specific, ATS-optimized LaTeX resume, cover letter, and STAR stories.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company & Role Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-medium text-[#737373] mb-1.5">
              Company Name
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
              className="ai-input w-full px-4 py-2.5 text-[13px]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#737373] mb-1.5">
              Job Title / Position
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
              className="ai-input w-full px-4 py-2.5 text-[13px]"
            />
          </div>
        </div>

        {/* Job Description Textarea */}
        <div>
          <label className="block text-[11px] font-medium text-[#737373] mb-1.5 flex items-center justify-between">
            <span>Full Job Description (JD)</span>
            <span className="text-[10px] text-[#a1a1aa] font-normal">Paste key responsibilities & stack</span>
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
            className="ai-input w-full p-4 text-[13px] leading-relaxed resize-y"
          />
        </div>

        {/* Submit CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#eaeaeb]">
          <div className="flex items-center space-x-2 text-[10px] text-[#737373]">
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>Strictly enforces Action Verb + Technology + Business Impact formatting.</span>
          </div>

          <button
            type="submit"
            disabled={isLoading || !jdText.trim()}
            id="btn-generate-package"
            className="ai-btn-primary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span className="text-[13px]">Generating...</span>
              </>
            ) : (
              <span className="text-[13px]">Generate Resume</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
