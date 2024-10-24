const express = require('express');
const router = express.Router();
const Goal = require('../models/goalModel');

// Add Goal Route
router.post('/', async (req, res) => {
    const { userId, goalName, targetAmount, currentAmount, deadline } = req.body;
    const goal = new Goal({ userId, goalName, targetAmount, currentAmount, deadline });
    await goal.save();
    res.json({ message: 'Goal added successfully' });
});

module.exports = router;
