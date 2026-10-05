import type { NextFunction, Request, Response } from "express";
import {
  createCareerProfile,
  getCareerProfile,
  updateCareerProfile
} from "../services/careerProfile.service.js";

export async function getCareerProfileController(
  request: Request,
  response: Response
) {
  const profile = await getCareerProfile();

  response.status(200).json(profile);
}

export async function createCareerProfileController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const profile = await createCareerProfile(request.body);

    response.status(201).json(profile);
  } catch (error) {
    next(error);
  }
}

export async function updateCareerProfileController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const profile = await updateCareerProfile(request.body);

    response.status(200).json(profile);
  } catch (error) {
    next(error);
  }
}