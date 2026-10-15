import { SkillCategory, SkillLevel } from "../generated/prisma/enums.js";
import { prisma } from "../config/prisma.js";
import type { CreateSkillInput } from "../schemas/skill.schema.js";

export async function getSkills() {
  const skills = await prisma.skill.findMany();

  return skills;
}

export async function createSkill(data: CreateSkillInput) {
  const profile = await prisma.careerProfile.findFirst();

  if (!profile) {
    throw new Error("Career profile not found");
  }

  const existingSkill = await prisma.skill.findUnique({
  where: {
    profileId_name: {
      profileId: profile.id,
      name: data.name
    }
  }
});

if (existingSkill) {
  throw new Error("Skill already exists");
}

  const skill = await prisma.skill.create({
    data: {
      ...data,
      profileId: profile.id
    }
  });

  return skill;
}