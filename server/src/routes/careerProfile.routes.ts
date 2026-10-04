import { Router } from 'express';
import {
  createCareerProfileController,
  getCareerProfileController,
  updateCareerProfileController,
} from '../controllers/careerProfile.controller.js';

const careerProfileRouter = Router();

careerProfileRouter.get('/', getCareerProfileController);
careerProfileRouter.post('/', createCareerProfileController);
careerProfileRouter.patch('/', updateCareerProfileController);

export default careerProfileRouter;
