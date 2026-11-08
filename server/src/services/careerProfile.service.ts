import { prisma } from "../config/prisma.js";
import type {
  CreateCareerProfileInput,
  UpdateCareerProfileInput
} from "../schemas/careerProfile.schema.js";

export async function getCareerProfile() {
  const profile = await prisma.careerProfile.findFirst();

  return profile;
}

export async function createCareerProfile(
  data: CreateCareerProfileInput
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
  data: UpdateCareerProfileInput
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