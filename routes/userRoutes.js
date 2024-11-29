
const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

// Example protected route
router.get('/admin', protect, authorize(['Admin']), (req, res) => {
    res.json({ message: 'Admin access granted' });
});

router.get('/moderator', protect, authorize(['Admin', 'Moderator']), (req, res) => {
    res.json({ message: 'Moderator access granted' });
});

router.get('/user', protect, authorize(['Admin', 'Moderator', 'User']), (req, res) => {
    res.json({ message: 'User access granted' });
});

module.exports = router;
            