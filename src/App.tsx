import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { ProfileDrawer } from './components/features/ProfileDrawer';
import { JobInputSection } from './components/features/JobInputSection';
import { AtsScoreCard } from './components/features/AtsScoreCard';
import { LaTeXEditor } from './components/features/LaTeXEditor';
import { OptionalOutputsSection } from './components/features/OptionalOutputsSection';
import { Toast } from './components/ui/Toast';
import { ExportModal } from './components/ui/ExportModal';
import { VETRISELVAN_PROFILE } from './data/defaultProfile';
import { Profile, GeneratedPackage } from './types';

export default function App() {
  const [profile, setProfile] = useState<Profile>(VETRISELVAN_PROFILE);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [packageData, setPackageData] = useState<GeneratedPackage | null>(null);


  const generatePackage = async (company: string, position: string, jobDescription: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-career-package", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile,
          company,
          position,
          jobDescription
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate career application package.");
      }

      const data: GeneratedPackage = await response.json();
      setPackageData(data);
      setToastMessage(`Generated package for ${company} (${position})`);
    } catch (error: any) {
      console.error("Generation error:", error);
      setToastMessage("Generation error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1c] pb-12">
      
      {/* Top Header Navigation */}
      <Header
        profile={profile}
        onOpenProfile={() => setIsProfileDrawerOpen(true)}
        onExportPackage={() => setIsExportModalOpen(true)}
        hasGenerated={!!packageData}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        
        {/* Job Input & Sample Selector */}
        <JobInputSection
          onGenerate={generatePackage}
          isLoading={isLoading}
        />

        {/* Loading Overlay State */}
        {isLoading && (
          <div className="ai-card p-10 text-center space-y-4 animate-pulse flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
            <h3 className="text-[13px] font-medium text-[#1a1a1c]">Analyzing Job Description & Generating Career Package...</h3>
            <p className="text-[11px] text-[#737373] max-w-lg mx-auto">
              Extracting required skills, mapping Vetriselvan's FPX Library & Pulse projects, enforcing Action Verb + Tech + Impact bullet rules, and writing compile-ready LaTeX.
            </p>
          </div>
        )}

        {/* Active Package Results */}
        {!isLoading && packageData && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            
            {/* ATS Score & Keyword Match Breakdown */}
            <AtsScoreCard
              report={packageData.atsReport}
              company={packageData.company}
              position={packageData.position}
            />

            {/* LaTeX Source Code Editor & High Fidelity Paper Preview */}
            <LaTeXEditor
              resumeLatex={packageData.resumeLatex}
              coverLetterLatex={packageData.coverLetterLatex}
              company={packageData.company}
              position={packageData.position}
              onUpdateResumeLatex={(val) => setPackageData({ ...packageData, resumeLatex: val })}
              onUpdateCoverLetterLatex={(val) => setPackageData({ ...packageData, coverLetterLatex: val })}
              onShowToast={(msg) => setToastMessage(msg)}
            />

            {/* Outreach Emails, STAR Stories & Interview Prep Guide */}
            <OptionalOutputsSection
              recruiterEmail={packageData.recruiterEmail}
              linkedinConnection={packageData.linkedinConnection}
              followUpEmail={packageData.followUpEmail}
              starStories={packageData.starStories}
              interviewPrep={packageData.interviewPrep}
              company={packageData.company}
              position={packageData.position}
              onShowToast={(msg) => setToastMessage(msg)}
            />

          </div>
        )}

      </main>

      {/* Slide-over Profile Drawer */}
      <ProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        profile={profile}
        onUpdateProfile={(updated) => setProfile(updated)}
      />

      {/* Export Zip/Files Modal */}
      {packageData && (
        <ExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          pkg={packageData}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      )}

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
