import 'dotenv/config';
import app from './src/app.js';
import db from './src/config/db.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Check database connection
        // Note: We're not running migrations here as per instructions, but we can verify connection
        // Ideally we would trigger a simple query, but for now we just start the server.
        // If the DB connection is invalid, Knex might not throw until first query is executed
        // or if we explicitly check it.

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
