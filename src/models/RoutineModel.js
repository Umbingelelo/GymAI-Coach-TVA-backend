import db from '../config/db.js';

const RoutineModel = {
    async findAll() {
        return db('routines').select('*');
    },

    async findById(id) {
        return db('routines').where({ id }).first();
    },

    async findByUserId(userId) {
        return db('routines').where({ user_id: userId }).select('*');
    },

    /**
     * Creates a routine along with its plan details in a transaction.
     * @param {Object} routineData - Data for 'routines' table
     * @param {Array<Object>} planData - Array of objects for 'routine_plan' table
     */
    async createWithPlan(routineData, planData) {
        return db.transaction(async (trx) => {
            const [routine] = await trx('routines').insert(routineData).returning('*');

            if (planData && planData.length > 0) {
                // Add routine_id to each plan item
                const planItems = planData.map(item => ({ ...item, routine_id: routine.id }));
                await trx('routine_plan').insert(planItems);
            }

            return routine;
        });
    },

    async getRoutineWithPlan(routineId) {
        const routine = await db('routines').where({ id: routineId }).first();
        if (!routine) return null;

        const plan = await db('routine_plan').where({ routine_id: routineId });
        return { ...routine, plan };
    }
};

export default RoutineModel;
