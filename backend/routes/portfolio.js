const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolioModel');

// Add Portfolio Route
router.post('/', async (req, res) => {
    const { userId, investments, totalValue } = req.body;
    const portfolio = new Portfolio({ userId, investments, totalValue });
    await portfolio.save();
    res.json({ message: 'Portfolio updated successfully' });
});

module.exports = router;
