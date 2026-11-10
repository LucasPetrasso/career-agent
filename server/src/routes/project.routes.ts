import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getProjectsController,
  updateProjectController
} from "../controllers/project.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
  createProjectSchema,
  updateProjectSchema
} from "../schemas/project.schema.js";

const projectRouter = Router();

projectRouter.get("/", getProjectsController);
projectRouter.post(
  "/",
  validateRequest(createProjectSchema),
  createProjectController
);
projectRouter.patch(
  "/:id",
  validateRequest(updateProjectSchema),
  updateProjectController
);
projectRouter.delete("/:id", deleteProjectController);

export default projectRouter;
