require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const llmHandler = require('./llmHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/sendMessage', async (req, res) => {
    const { message } = req.body;
    try {
        const answer = await llmHandler.sendMessageToLLM(message);
        res.json({ answer });
    } catch (error) {
        res.status(500).send("Failed to fetch response from LLM.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});