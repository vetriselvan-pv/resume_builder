import { Router } from 'express';
import { generateCareerPackage } from '../controllers/careerPackageController.js';

const router = Router();

router.post("/", generateCareerPackage);

export default router;
