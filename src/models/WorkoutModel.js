import db from '../config/db.js';

const WorkoutModel = {
    async createSession(sessionData) {
        const [session] = await db('workout_sessions').insert(sessionData).returning('*');
        return session;
    },

    async logSet(logData) {
        const [log] = await db('workout_logs').insert(logData).returning('*');
        return log;
    },

    async getSessionWithLogs(sessionId) {
        const session = await db('workout_sessions').where({ id: sessionId }).first();
        if (!session) return null;

        const logs = await db('workout_logs').where({ session_id: sessionId });
        return { ...session, logs };
    }
};

export default WorkoutModel;
