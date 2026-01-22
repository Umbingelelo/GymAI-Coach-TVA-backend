import ProfileModel from '../models/ProfileModel.js';

const ProfileController = {
    async getById(req, res) {
        try {
            const { id } = req.params;
            const profile = await ProfileModel.findById(id);
            if (!profile) {
                return res.status(404).json({ success: false, message: 'Profile not found' });
            }
            res.json({ success: true, data: profile });
        } catch (error) {
            console.error('Error fetching profile:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    async create(req, res) {
        try {
            const profileData = req.body;
            // Ensure ID is provided if strictly following schema (uuid from auth)
            // or if it's auto-generated, but profiles usually link to auth.users
            const profile = await ProfileModel.create(profileData);
            res.status(201).json({ success: true, data: profile });
        } catch (error) {
            console.error('Error creating profile:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const profileData = req.body;
            const profile = await ProfileModel.update(id, profileData);
            if (!profile) {
                return res.status(404).json({ success: false, message: 'Profile not found' });
            }
            res.json({ success: true, data: profile });
        } catch (error) {
            console.error('Error updating profile:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
};

export default ProfileController;
