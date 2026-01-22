import ExerciseModel from '../models/ExerciseModel.js';

const ExerciseController = {
    async getAll(req, res) {
        try {
            const exercises = await ExerciseModel.findAll();
            res.json({ success: true, data: exercises });
        } catch (error) {
            console.error('Error fetching exercises:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
};

export default ExerciseController;
