import express from 'express';
import ExerciseController from '../controllers/ExerciseController.js';

const router = express.Router();

router.get('/', ExerciseController.getAll);

export default router;
