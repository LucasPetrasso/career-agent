import { Router } from "express";
import {
  createSkillController,
  getSkillsController
} from "../controllers/skill.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createSkillSchema } from "../schemas/skill.schema.js";

const skillRouter = Router();

skillRouter.get("/", getSkillsController);
skillRouter.post(
  "/",
  validateRequest(createSkillSchema),
  createSkillController
);

export default skillRouter;