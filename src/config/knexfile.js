import 'dotenv/config';

/**
 * @type { import("knex").Knex.Config }
 */
const config = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    }
};

export default config;
