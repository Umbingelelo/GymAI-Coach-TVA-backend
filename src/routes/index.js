import express from 'express';
import exerciseRoutes from './exerciseRoutes.js';
import routineRoutes from './routineRoutes.js';
import workoutRoutes from './workoutRoutes.js';
import profileRoutes from './profileRoutes.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use('/exercises', exerciseRoutes);
router.use('/routines', routineRoutes);
router.use('/workouts', workoutRoutes);
router.use('/profiles', profileRoutes);

export default router;
