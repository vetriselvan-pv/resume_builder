import React, { useState } from 'react';
import { X, ShieldCheck, Briefcase, Award, Code, BookOpen, MapPin, Globe, Clock, Layers, Check } from 'lucide-react';
import { Profile } from '../../types';
import { VETRISELVAN_PROFILE } from '../../data/defaultProfile';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  onUpdateProfile: (updated: Profile) => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'projects' | 'leadership'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editedSummary, setEditedSummary] = useState(profile.summary);

  if (!isOpen) return null;

  const handleReset = () => {
    onUpdateProfile(VETRISELVAN_PROFILE);
    setEditedSummary(VETRISELVAN_PROFILE.summary);
    setIsEditing(false);
  };

  const handleSaveSummary = () => {
    onUpdateProfile({
      ...profile,
      summary: editedSummary
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-white border-l border-slate-200 text-slate-900 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white/90 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{profile.name}</h2>
              <p className="text-xs text-slate-500">{profile.currentTitle} • Permanent Profile</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleReset}
              id="btn-reset-profile"
              className="text-xs text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Reset Default
            </button>
            <button
              onClick={onClose}
              id="btn-close-profile-drawer"
              className="text-slate-500 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Truthful Guarantee Banner */}
        <div className="mx-6 mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-800">
            <span className="font-semibold block text-amber-900">Truthful Application Policy</span>
            All resume bullet points and cover letters generated from this profile adhere to 100% truthful claims. No fabricated experience, unearned certifications, or fake metrics.
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 mt-4 flex space-x-6 text-xs font-medium">
          {(['overview', 'skills', 'projects', 'leadership'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 capitalize border-b-2 transition-all ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-700 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Basic Details Grid */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center space-x-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Location</span>
                    <span className="font-medium">{profile.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Notice Period</span>
                    <span className="font-medium">{profile.noticePeriod}</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center space-x-2 text-slate-700 pt-2 border-t border-slate-200">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Open To</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profile.openTo.map((item, i) => (
                        <span key={i} className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded text-[10px]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800 uppercase tracking-wider text-[11px]">Professional Summary</h3>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-indigo-600 hover:underline text-[10px]"
                    >
                      Edit Summary
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveSummary}
                      className="text-emerald-600 hover:underline text-[10px] flex items-center space-x-1"
                    >
                      <Check className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  )}
                </div>
                {!isEditing ? (
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {profile.summary}
                  </p>
                ) : (
                  <textarea
                    value={editedSummary}
                    onChange={(e) => setEditedSummary(e.target.value)}
                    rows={5}
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-sm"
                  />
                )}
              </div>

              {/* Links & Channels */}
              <div>
                <h3 className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] mb-2">Online Profiles & Blog</h3>
                <div className="space-y-1.5 text-slate-700">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 font-mono w-20">Portfolio:</span>
                    <a href={profile.portfolio} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline truncate">
                      {profile.portfolio}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 font-mono w-20">GitHub:</span>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline truncate">
                      {profile.github}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 font-mono w-20">LinkedIn:</span>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline truncate">
                      {profile.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 font-mono w-20">Blog:</span>
                    <a href={profile.medium} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline truncate">
                      {profile.medium}
                    </a>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] mb-2">Recognitions & Awards</h3>
                <div className="grid grid-cols-2 gap-2">
                  {profile.awards.map((award, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                      <Award className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-medium text-slate-800">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4">
              {Object.entries(profile.skills).map(([category, skillList]) => (
                <div key={category} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-indigo-700 capitalize text-[11px] mb-2 tracking-wide">
                    {category.replace(/([AZ])/g, ' $1').trim()}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillList.map((skill, i) => (
                      <span key={i} className="bg-white text-slate-700 border border-slate-200 shadow-sm px-2.5 py-1 rounded-md text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              {profile.projects.map((proj, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900">{proj.name}</h4>
                    <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {proj.description}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 py-1">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 text-[11px] pt-1">
                    {proj.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leadership' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-semibold text-slate-800 text-xs flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Engineering Leadership</span>
                </h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1.5 text-[11px]">
                  {profile.leadership.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-semibold text-slate-800 text-xs flex items-center space-x-2">
                  <Code className="w-4 h-4 text-emerald-600" />
                  <span>Open Source Contributions</span>
                </h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1.5 text-[11px]">
                  {profile.openSource.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-semibold text-slate-800 text-xs flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>Technical Writing & Authorship</span>
                </h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1.5 text-[11px]">
                  {profile.technicalWriting.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
