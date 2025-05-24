const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST /api/leads
app.post('/api/leads', (req, res) => {
    const { name, email, company, message } = req.body;

  // Basic validation
    if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
    }

    const query = 'INSERT INTO leads (name, email, company, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, company || '', message || ''];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Insert error:', err);
            return res.status(500).json({ error: 'Failed to save lead.' });
        }

    return res.status(200).json({ message: 'Lead submitted successfully!' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    });