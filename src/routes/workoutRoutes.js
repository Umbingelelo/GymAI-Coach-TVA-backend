import express from 'express';
import WorkoutController from '../controllers/WorkoutController.js';

const router = express.Router();

router.post('/session', WorkoutController.createSession);
router.post('/log', WorkoutController.logSet);

export default router;
