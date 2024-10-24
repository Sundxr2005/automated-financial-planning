const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    description: String,
    amount: Number,
    date: Date,
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
