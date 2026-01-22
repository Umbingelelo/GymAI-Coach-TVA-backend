import db from '../config/db.js';

const ProfileModel = {
    async findAll() {
        return db('profiles').select('*');
    },

    async findById(id) {
        return db('profiles').where({ id }).first();
    },

    async create(data) {
        const [profile] = await db('profiles').insert(data).returning('*');
        return profile;
    },

    async update(id, data) {
        const [profile] = await db('profiles').where({ id }).update(data).returning('*');
        return profile;
    }
};

export default ProfileModel;
