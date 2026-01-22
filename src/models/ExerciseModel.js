import db from '../config/db.js';

const ExerciseModel = {
    async findAll() {
        return db('exercises').select('*');
    },

    async findById(id) {
        return db('exercises').where({ id }).first();
    },

    async create(data) {
        const [exercise] = await db('exercises').insert(data).returning('*');
        return exercise;
    },

    async update(id, data) {
        const [exercise] = await db('exercises').where({ id }).update(data).returning('*');
        return exercise;
    }
};

export default ExerciseModel;
