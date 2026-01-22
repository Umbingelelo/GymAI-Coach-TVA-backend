import WorkoutModel from '../models/WorkoutModel.js';

const WorkoutController = {
    async createSession(req, res) {
        try {
            const sessionData = req.body;
            const session = await WorkoutModel.createSession(sessionData);
            res.status(201).json({ success: true, data: session });
        } catch (error) {
            console.error('Error creating workout session:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    async logSet(req, res) {
        try {
            const logData = req.body;
            const log = await WorkoutModel.logSet(logData);
            res.status(201).json({ success: true, data: log });
        } catch (error) {
            console.error('Error logging set:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
};

export default WorkoutController;
