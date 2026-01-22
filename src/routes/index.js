import express from 'express';
import exerciseRoutes from './exerciseRoutes.js';
import routineRoutes from './routineRoutes.js';
import workoutRoutes from './workoutRoutes.js';

const router = express.Router();

router.use('/exercises', exerciseRoutes);
router.use('/routines', routineRoutes);
router.use('/workouts', workoutRoutes);

export default router;
