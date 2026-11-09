import { Router } from "express";
import {
  createSkillController,
  deleteSkillController,
  getSkillsController,
  updateSkillController
} from "../controllers/skill.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
  createSkillSchema,
  updateSkillSchema
} from "../schemas/skill.schema.js";

const skillRouter = Router();

skillRouter.get("/", getSkillsController);
skillRouter.post(
  "/",
  validateRequest(createSkillSchema),
  createSkillController
);
skillRouter.patch(
  "/:id",
  validateRequest(updateSkillSchema),
  updateSkillController
);
skillRouter.delete("/:id", deleteSkillController);

export default skillRouter;