import type { Request, Response } from "express";
import {
  createCareerProfile,
  getCareerProfile
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
  response: Response
) {
  const profile = await createCareerProfile(request.body);

  response.status(201).json(profile);
}