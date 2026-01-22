import express from 'express';
import RoutineController from '../controllers/RoutineController.js';

const router = express.Router();

router.post('/', RoutineController.create);
router.get('/:userId', RoutineController.getByUser);

export default router;
