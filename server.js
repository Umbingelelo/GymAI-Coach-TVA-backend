import 'dotenv/config';
import app from './src/app.js';
import db from './src/config/db.js';

const PORT = process.env.PORT || 3000;


const startServer = async () => {
    try {
        // Check database connection
        try {
            await db.raw('SELECT 1');
            console.log('Database connected successfully');
        } catch (dbError) {
            console.error('Database connection failed:', dbError);
            process.exit(1);
        }

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
