import { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import { cleanJsonResponse } from '../utils/helpers.js';
import { generateFallbackPackage } from '../services/fallbackService.js';
import { env } from "../config/env.js";

export const generateCareerPackage = async (req: Request, res: Response): Promise<any> => {
  try {
    const { profile, company, position, jobDescription } = req.body;

    if (!jobDescription || !jobDescription.trim()) {
      return res.status(400).json({ error: "Job description is required." });
    }

    const companyName = company && company.trim() ? company.trim() : "Target Company";
    const roleName = position && position.trim() ? position.trim() : "Senior Full Stack Engineer";

    const apiKey = env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log("No GEMINI_API_KEY found, using intelligent fallback generator.");
      const fallback = generateFallbackPackage(profile, companyName, roleName, jobDescription);
      return res.json(fallback);
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const promptText = `
You are an expert Technical Recruiter, ATS Resume Consultant, Hiring Manager, Senior Software Engineering Career Coach, and Professional LaTeX Resume Writer.

CRITICAL HARD RULES:
1. NEVER fabricate experience, projects, achievements, certifications, or metrics.
2. Rely strictly on the provided PERMANENT PROFILE of Vetriselvan Panneerselvam.
3. Every resume bullet point MUST follow the exact format: [Action Verb] + [Technology] + [Business Impact].
4. Output valid, compile-ready LaTeX for resume.tex and coverletter.tex.
5. Provide a realistic ATS match percentage, keyword analysis, STAR stories (mapped to real projects: FPX Library, Pulse, API Exchange, Arab Bank, iTurmeric Studio, Sberbank, Newage), recruiter email, LinkedIn note, and interview prep.

CANDIDATE PERMANENT PROFILE:
\${JSON.stringify(profile, null, 2)}

TARGET JOB DETAILS:
Company: \${companyName}
Position: \${roleName}
Job Description:
\${jobDescription}

Please output your complete analysis and generated application documents strictly as JSON matching the following JSON structure:

{
  "company": "\${companyName}",
  "position": "\${roleName}",
  "resumeLatex": "<COMPLETE_VALID_LATEX_CODE_FOR_RESUME_TEX>",
  "coverLetterLatex": "<COMPLETE_VALID_LATEX_CODE_FOR_COVERLETTER_TEX>",
  "atsReport": {
    "matchPercentage": 88,
    "matchingSkills": ["Angular", "Spring Boot", "TypeScript", "Microservices", "RxJS", "Nx Monorepo"],
    "missingKeywords": ["AWS", "Kubernetes"],
    "skillsNotDemonstrated": ["GraphQL"],
    "suggestedImprovements": [
      "Emphasize configuration-driven UI architecture prominently.",
      "Highlight Java Spring Boot API security mechanisms."
    ],
    "keywordDensity": [
      { "keyword": "Angular", "foundInProfile": true, "relevance": "High" }
    ]
  },
  "recruiterEmail": "<TEXT_OF_RECRUITER_EMAIL>",
  "linkedinConnection": "<300_CHAR_MAX_LINKEDIN_NOTE>",
  "followUpEmail": "<TEXT_OF_FOLLOW_UP_EMAIL>",
  "starStories": [
    {
      "title": "Story Title",
      "project": "Project Name",
      "situation": "...",
      "task": "...",
      "action": "...",
      "result": "...",
      "technologies": ["Angular", "Spring Boot"]
    }
  ],
  "interviewPrep": [
    {
      "category": "Architecture",
      "question": "Question text...",
      "answerHint": "Hint text...",
      "tailoredAnswer": "Detailed response..."
    }
  ]
}

Make sure LaTeX code is clean, properly escaped for JSON (use \\\\ for backslashes in JSON strings), uses geometry margins, hyperref, and is immediately ready to compile on Overleaf or pdflatex.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: promptText,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      });

      const rawJson = response.text;
      if (!rawJson) {
        throw new Error("Empty response from Gemini model.");
      }

      const parsed = JSON.parse(cleanJsonResponse(rawJson));
      return res.json({
        ...parsed,
        timestamp: new Date().toISOString()
      });

    } catch (geminiError: any) {
      console.error("Gemini API error, falling back to smart engine:", geminiError);
      const fallback = generateFallbackPackage(profile, companyName, roleName, jobDescription);
      return res.json(fallback);
    }

  } catch (error: any) {
    console.error("Error in generate-career-package endpoint:", error);
    res.status(500).json({ error: error.message || "Failed to process application package." });
  }
};
