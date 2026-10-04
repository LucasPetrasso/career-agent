import { Router } from "express";
import {
  createCareerProfileController,
  getCareerProfileController
} from "../controllers/careerProfile.controller.js";

const careerProfileRouter = Router();

careerProfileRouter.get("/", getCareerProfileController);
careerProfileRouter.post("/", createCareerProfileController);

export default careerProfileRouter;