import RoutineModel from '../models/RoutineModel.js';

const RoutineController = {
    async create(req, res) {
        try {
            // Expecting { name, user_id, start_date, ..., plan: [...] }
            const { plan, ...routineData } = req.body;

            const newRoutine = await RoutineModel.createWithPlan(routineData, plan);
            res.status(201).json({ success: true, data: newRoutine });
        } catch (error) {
            console.error('Error creating routine:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    async getByUser(req, res) {
        try {
            const { userId } = req.params;
            const routines = await RoutineModel.findByUserId(userId);
            res.json({ success: true, data: routines });
        } catch (error) {
            console.error('Error fetching routines:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
};

export default RoutineController;
