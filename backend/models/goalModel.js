const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    goalName: String,
    targetAmount: Number,
    currentAmount: Number,
    deadline: Date,
});

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
