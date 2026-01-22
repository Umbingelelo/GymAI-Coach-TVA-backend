import express from 'express';
import ProfileController from '../controllers/ProfileController.js';

const router = express.Router();

router.post('/', ProfileController.create);
router.get('/:id', ProfileController.getById);
router.put('/:id', ProfileController.update);

export default router;
