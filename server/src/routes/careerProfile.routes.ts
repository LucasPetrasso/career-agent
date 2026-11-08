import { Router } from 'express';
import {
  createCareerProfileController,
  getCareerProfileController,
  updateCareerProfileController,
} from '../controllers/careerProfile.controller.js';
import { validateRequest } from "../middleware/validateRequest.js";
import {
  createCareerProfileSchema,
  updateCareerProfileSchema
} from "../schemas/careerProfile.schema.js";

const careerProfileRouter = Router();

careerProfileRouter.get(
  '/', 
  getCareerProfileController
);
careerProfileRouter.post(
  '/',
   validateRequest(createCareerProfileSchema), 
   createCareerProfileController
  );
careerProfileRouter.patch(
  '/', 
  validateRequest(updateCareerProfileSchema), 
  updateCareerProfileController
);

export default careerProfileRouter;
