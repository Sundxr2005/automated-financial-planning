const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Login Route
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ message: 'Login successful', userId: user._id });
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
