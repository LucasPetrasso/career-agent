import type { Request, Response } from "express";
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
  response: Response
) {
  try {
    const profile = await createCareerProfile(request.body);

    response.status(201).json(profile);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Career profile already exists"
    ) {
      response.status(409).json({
        message: error.message
      });

      return;
    }

    response.status(500).json({
      message: "Internal server error"
    });
  }
}

export async function updateCareerProfileController(
  request: Request,
  response: Response
) {
  try {
    const profile = await updateCareerProfile(request.body);

    response.status(200).json(profile);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Career profile not found"
    ) {
      response.status(404).json({
        message: error.message
      });

      return;
    }

    response.status(500).json({
      message: "Internal server error"
    });
  }
}