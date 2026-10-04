import { prisma } from "../config/prisma.js";

interface CreateCareerProfileData {
  name: string;
  professionalTitle: string;
  bio?: string;
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
}

export async function getCareerProfile() {
  const profile = await prisma.careerProfile.findFirst();

  return profile;
}

export async function createCareerProfile(
  data: CreateCareerProfileData
) {
  const profile = await prisma.careerProfile.create({
    data
  });

  return profile;
}