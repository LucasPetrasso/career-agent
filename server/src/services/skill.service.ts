import { SkillCategory, SkillLevel } from "../generated/prisma/enums.js";
import { prisma } from "../config/prisma.js";

interface CreateSkillData {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export async function getSkills() {
  const skills = await prisma.skill.findMany();

  return skills;
}

export async function createSkill(data: CreateSkillData) {
  const profile = await prisma.careerProfile.findFirst();

  if (!profile) {
    throw new Error("Career profile not found");
  }

  const skill = await prisma.skill.create({
    data: {
      ...data,
      profileId: profile.id
    }
  });

  return skill;
}