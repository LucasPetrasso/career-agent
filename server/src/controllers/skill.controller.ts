import type { NextFunction, Request, Response } from "express";
import {
  createSkill,
  getSkills
} from "../services/skill.service.js";

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