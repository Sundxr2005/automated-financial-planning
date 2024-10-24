const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    investments: Array, // Stores investment details
    totalValue: Number,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
