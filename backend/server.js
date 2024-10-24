const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [{ username: "user", password: "pass" }];
let expenses = [];
let goals = [];
let portfolios = [];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return res.json({ username: user.username });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

// Expense endpoints
app.post('/api/expense', (req, res) => {
    const { name, amount } = req.body;
    expenses.push({ name, amount });
    res.status(201).json({ message: 'Expense added' });
});

app.get('/api/expense', (req, res) => {
    res.json(expenses);
});

// Goal endpoints
app.post('/api/goal', (req, res) => {
    const { name, targetAmount } = req.body;
    goals.push({ name, targetAmount });
    res.status(201).json({ message: 'Goal added' });
});

app.get('/api/goal', (req, res) => {
    res.json(goals);
});

// Portfolio endpoints
app.post('/api/portfolio', (req, res) => {
    const { investmentName, amountInvested } = req.body;
    portfolios.push({ investmentName, amountInvested });
    res.status(201).json({ message: 'Investment added' });
});

app.get('/api/portfolio', (req, res) => {
    res.json(portfolios);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
