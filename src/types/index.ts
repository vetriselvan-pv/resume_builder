export interface Profile {
  name: string;
  currentTitle: string;
  experience: string;
  location: string;
  openTo: string[];
  noticePeriod: string;
  portfolio: string;
  github: string;
  linkedin: string;
  medium: string;
  summary: string;
  skills: {
    frontend: string[];
    backend: string[];
    architecture: string[];
    databases: string[];
    cloudDevOps: string[];
    testing: string[];
    versionControl: string[];
    tools: string[];
  };
  projects: {
    name: string;
    description: string;
    tech: string[];
    responsibilities: string[];
  }[];
  leadership: string[];
  openSource: string[];
  technicalWriting: string[];
  awards: string[];
  education: string;
  languages: string[];
}

export interface SampleJD {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  description: string;
}

export interface ATSReport {
  matchPercentage: number;
  matchingSkills: string[];
  missingKeywords: string[];
  skillsNotDemonstrated: string[];
  suggestedImprovements: string[];
  keywordDensity: { keyword: string; foundInProfile: boolean; relevance: 'High' | 'Medium' | 'Low' }[];
}

export interface STARStory {
  title: string;
  project: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  technologies: string[];
}

export interface InterviewQuestion {
  category: 'Technical' | 'Architecture' | 'Behavioral' | 'Fintech/Domain';
  question: string;
  answerHint: string;
  tailoredAnswer: string;
}

export interface GeneratedPackage {
  company: string;
  position: string;
  resumeLatex: string;
  coverLetterLatex: string;
  atsReport: ATSReport;
  recruiterEmail: string;
  linkedinConnection: string;
  followUpEmail: string;
  starStories: STARStory[];
  interviewPrep: InterviewQuestion[];
  timestamp: string;
}
