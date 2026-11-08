import { prisma } from "../config/prisma.js";
import type {
  CreateSkillInput,
  UpdateSkillInput
} from "../schemas/skill.schema.js";


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

export async function updateSkill(id: string, data: UpdateSkillInput) {
  const existingSkill = await prisma.skill.findUnique({
    where: {
      id
    }
  });

  if (!existingSkill) {
    throw new Error("Skill not found");
  }

  if (data.name !== undefined && data.name !== existingSkill.name) {
    const duplicateSkill = await prisma.skill.findUnique({
      where: {
        profileId_name: {
          profileId: existingSkill.profileId,
          name: data.name
        }
      }
    });

    if (duplicateSkill) {
      throw new Error("Skill already exists");
    }
  }

  const skill = await prisma.skill.update({
    where: {
      id
    },
    data
  });

  return skill;
}