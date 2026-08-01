import { Router } from 'express';
import { generateCareerPackage } from '../controllers/careerPackageController';

const router = Router();

router.post("/", generateCareerPackage);

export default router;
