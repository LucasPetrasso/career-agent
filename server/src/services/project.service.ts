import { prisma } from "../config/prisma.js";
import type {
  CreateProjectInput,
  UpdateProjectInput
} from "../schemas/project.schema.js";

export async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      skills: true
    }
  });

  return projects;
}

export async function createProject(data: CreateProjectInput) {
  const profile = await prisma.careerProfile.findFirst();

  if (!profile) {
    throw new Error("Career profile not found");
  }

  const skillIds = [...new Set(data.skillIds)];
  const skills = await prisma.skill.findMany({
    where: {
      id: {
        in: skillIds
      },
      profileId: profile.id
    }
  });

  if (skills.length !== skillIds.length) {
    throw new Error("Skill not found");
  }

  const { skillIds: _skillIds, ...projectData } = data;
  const project = await prisma.project.create({
    data: {
      ...projectData,
      profileId: profile.id,
      skills: {
        connect: skillIds.map((id) => ({ id }))
      }
    },
    include: {
      skills: true
    }
  });

  return project;
}

export async function updateProject(id: string, data: UpdateProjectInput) {
  const existingProject = await prisma.project.findUnique({
    where: {
      id
    }
  });

  if (!existingProject) {
    throw new Error("Project not found");
  }

  const { skillIds, ...projectData } = data;

  if (skillIds !== undefined) {
    const uniqueSkillIds = [...new Set(skillIds)];
    const skills = await prisma.skill.findMany({
      where: {
        id: {
          in: uniqueSkillIds
        },
        profileId: existingProject.profileId
      }
    });

    if (skills.length !== uniqueSkillIds.length) {
      throw new Error("Skill not found");
    }

    const project = await prisma.project.update({
      where: {
        id
      },
      data: {
        ...projectData,
        skills: {
          set: uniqueSkillIds.map((skillId) => ({ id: skillId }))
        }
      },
      include: {
        skills: true
      }
    });

    return project;
  }

  const project = await prisma.project.update({
    where: {
      id
    },
    data: projectData,
    include: {
      skills: true
    }
  });

  return project;
}

export async function deleteProject(id: string) {
  const existingProject = await prisma.project.findUnique({
    where: {
      id
    }
  });

  if (!existingProject) {
    throw new Error("Project not found");
  }

  const project = await prisma.project.delete({
    where: {
      id
    }
  });

  return project;
}
