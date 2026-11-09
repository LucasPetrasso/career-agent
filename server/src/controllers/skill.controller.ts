import type { NextFunction, Request, Response } from "express";
import {
  createSkill,
  getSkills,
  updateSkill
} from "../services/skill.service.js";
import type { UpdateSkillInput } from "../schemas/skill.schema.js";

export async function getSkillsController(
  request: Request,
  response: Response
) {
  const skills = await getSkills();

  response.status(200).json(skills);
}

export async function createSkillController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const skill = await createSkill(request.body);

    response.status(201).json(skill);
  } catch (error) {
    next(error);
  }
}

export async function updateSkillController(
  request: Request<{ id: string }, unknown, UpdateSkillInput>,
  response: Response,
  next: NextFunction
) {
  try {
    const skill = await updateSkill(request.params.id, request.body);

    response.status(200).json(skill);
  } catch (error) {
    next(error);
  }
}