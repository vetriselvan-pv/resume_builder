import { Profile, GeneratedPackage } from '../types';

export const generateCareerPackage = async (
  profile: Profile,
  company: string,
  position: string,
  jobDescription: string
): Promise<GeneratedPackage> => {
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

  return response.json();
};
