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

interface UpdateCareerProfileData {
  name?: string;
  professionalTitle?: string;
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
  const existingProfile = await prisma.careerProfile.findFirst();

  if (existingProfile) {
    throw new Error("Career profile already exists");
  }

  const profile = await prisma.careerProfile.create({
    data
  });

  return profile;
}

export async function updateCareerProfile(
  data: UpdateCareerProfileData
) {
  const existingProfile = await prisma.careerProfile.findFirst();

  if (!existingProfile) {
    throw new Error("Career profile not found");
  }

  const profile = await prisma.careerProfile.update({
    where: {
      id: existingProfile.id
    },
    data
  });

  return profile;
}