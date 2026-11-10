import type { NextFunction, Request, Response } from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject
} from "../services/project.service.js";
import type {
  CreateProjectInput,
  UpdateProjectInput
} from "../schemas/project.schema.js";

export async function getProjectsController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const projects = await getProjects();

    response.status(200).json(projects);
  } catch (error) {
    next(error);
  }
}

export async function createProjectController(
  request: Request<unknown, unknown, CreateProjectInput>,
  response: Response,
  next: NextFunction
) {
  try {
    const project = await createProject(request.body);

    response.status(201).json(project);
  } catch (error) {
    next(error);
  }
}

export async function updateProjectController(
  request: Request<{ id: string }, unknown, UpdateProjectInput>,
  response: Response,
  next: NextFunction
) {
  try {
    const project = await updateProject(request.params.id, request.body);

    response.status(200).json(project);
  } catch (error) {
    next(error);
  }
}

export async function deleteProjectController(
  request: Request<{ id: string }>,
  response: Response,
  next: NextFunction
) {
  try {
    const project = await deleteProject(request.params.id);

    response.status(200).json(project);
  } catch (error) {
    next(error);
  }
}
