import type { NextFunction, Request, Response } from "express";

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error.message === "Career profile already exists") {
    response.status(409).json({
      message: error.message
    });

    return;
  }

  if (error.message === "Career profile not found") {
    response.status(404).json({
      message: error.message
    });

    return;
  }

  response.status(500).json({
    message: "Internal server error"
  });
}