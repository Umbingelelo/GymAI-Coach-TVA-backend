import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];

        // Verify token using Supabase JWT Secret
        // Note: verify throws an error if token is invalid or expired
        const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET);

        // Attach user info to request object
        // Supabase JWT typically has user id in 'sub' field
        req.user = {
            id: decoded.sub,
            email: decoded.email,
            role: decoded.role,
            ...decoded
        };

        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error.message);
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
};

export default authMiddleware;
