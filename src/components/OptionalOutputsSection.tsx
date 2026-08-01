import React, { useState } from 'react';
import { Mail, Linkedin, Clock, Sparkles, BookOpen, Copy, Check, ChevronDown, ChevronUp, MessageSquareText } from 'lucide-react';
import { STARStory, InterviewQuestion } from '../types';

interface OptionalOutputsSectionProps {
  recruiterEmail: string;
  linkedinConnection: string;
  followUpEmail: string;
  starStories: STARStory[];
  interviewPrep: InterviewQuestion[];
  company: string;
  position: string;
  onShowToast: (msg: string) => void;
}

export const OptionalOutputsSection: React.FC<OptionalOutputsSectionProps> = ({
  recruiterEmail,
  linkedinConnection,
  followUpEmail,
  starStories,
  interviewPrep,
  company,
  position,
  onShowToast
}) => {
  const [activeTab, setActiveTab] = useState<'recruiter' | 'linkedin' | 'followup' | 'star' | 'interview'>('recruiter');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedStory, setExpandedStory] = useState<number | null>(0);
  const [expandedPrep, setExpandedPrep] = useState<number | null>(0);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast("Copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
      
      {/* Header & Category Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <MessageSquareText className="w-5 h-5 text-indigo-600" />
            <span>Recruiter Outreach & Interview Prep Suite</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tailored communication drafts, STAR interview stories, and company-specific technical Q&A for {company}.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('recruiter')}
            id="tab-outreach-recruiter"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'recruiter' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter Email</span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            id="tab-outreach-linkedin"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'linkedin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Note</span>
          </button>

          <button
            onClick={() => setActiveTab('followup')}
            id="tab-outreach-followup"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'followup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Follow-up</span>
          </button>

          <button
            onClick={() => setActiveTab('star')}
            id="tab-outreach-star"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'star' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAR Stories ({starStories.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('interview')}
            id="tab-outreach-interview"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'interview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interview Prep</span>
          </button>
        </div>
      </div>

      {/* Content Panes */}
      <div className="pt-1">
        
        {/* Recruiter Email */}
        {activeTab === 'recruiter' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
              <div className="text-xs">
                <span className="text-slate-500 font-semibold uppercase text-[10px] block">Email Purpose</span>
                <span className="text-slate-800 font-medium">Cold Outreach / Application Pitch to Recruiter at {company}</span>
              </div>
              <button
                onClick={() => copyText('recruiter', recruiterEmail)}
                id="btn-copy-recruiter-email"
                className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow transition-all"
              >
                {copiedKey === 'recruiter' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'recruiter' ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono leading-relaxed text-slate-700 whitespace-pre-wrap selection:bg-indigo-500/20 shadow-sm">
              {recruiterEmail}
            </div>
          </div>
        )}

        {/* LinkedIn Connection Note */}
        {activeTab === 'linkedin' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
              <div className="text-xs">
                <span className="text-slate-500 font-semibold uppercase text-[10px] block">LinkedIn Constraint</span>
                <span className="text-slate-800 font-medium">300 Characters Maximum Connection Request</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-mono font-semibold text-slate-500">
                  {linkedinConnection.length} / 300 chars
                </span>
                <button
                  onClick={() => copyText('linkedin', linkedinConnection)}
                  id="btn-copy-linkedin-note"
                  className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow transition-all"
                >
                  {copiedKey === 'linkedin' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'linkedin' ? 'Copied' : 'Copy Note'}</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono leading-relaxed text-slate-700 selection:bg-indigo-500/20 shadow-sm">
              {linkedinConnection}
            </div>
          </div>
        )}

        {/* Follow Up Email */}
        {activeTab === 'followup' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
              <div className="text-xs">
                <span className="text-slate-500 font-semibold uppercase text-[10px] block">Timing</span>
                <span className="text-slate-800 font-medium">Post-Interview or 1-Week Follow-up</span>
              </div>
              <button
                onClick={() => copyText('followup', followUpEmail)}
                id="btn-copy-followup-email"
                className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow transition-all"
              >
                {copiedKey === 'followup' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'followup' ? 'Copied' : 'Copy Follow-up'}</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono leading-relaxed text-slate-700 whitespace-pre-wrap selection:bg-indigo-500/20 shadow-sm">
              {followUpEmail}
            </div>
          </div>
        )}

        {/* STAR Stories */}
        {activeTab === 'star' && (
          <div className="space-y-3">
            {starStories.map((story, idx) => {
              const isExpanded = expandedStory === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setExpandedStory(isExpanded ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-slate-900">{story.title}</span>
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono border border-indigo-200">
                          {story.project}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {story.technologies.map((tech, i) => (
                          <span key={i} className="text-[9.5px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-slate-500">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3 text-xs">
                      <div>
                        <span className="font-bold text-amber-600 uppercase text-[10px] tracking-wider block">Situation</span>
                        <p className="text-slate-700 leading-relaxed">{story.situation}</p>
                      </div>
                      <div>
                        <span className="font-bold text-sky-600 uppercase text-[10px] tracking-wider block">Task</span>
                        <p className="text-slate-700 leading-relaxed">{story.task}</p>
                      </div>
                      <div>
                        <span className="font-bold text-indigo-600 uppercase text-[10px] tracking-wider block">Action</span>
                        <p className="text-slate-700 leading-relaxed">{story.action}</p>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-600 uppercase text-[10px] tracking-wider block">Result & Business Impact</span>
                        <p className="text-slate-800 font-medium leading-relaxed bg-emerald-50 p-2.5 rounded border border-emerald-200">
                          {story.result}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Interview Prep */}
        {activeTab === 'interview' && (
          <div className="space-y-3">
            {interviewPrep.map((item, idx) => {
              const isExpanded = expandedPrep === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setExpandedPrep(isExpanded ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-indigo-700">
                          {item.category}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{item.question}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 italic mt-1">Hint: {item.answerHint}</p>
                    </div>

                    <div className="text-slate-500 shrink-0 ml-2">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs space-y-2">
                      <span className="font-bold text-emerald-600 uppercase text-[10px] tracking-wider block">Tailored Candidate Response</span>
                      <p className="text-slate-800 leading-relaxed whitespace-pre-wrap bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        {item.tailoredAnswer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
