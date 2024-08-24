const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle task submission
app.post('/api/send-task', async (req, res) => {
    const { task } = req.body;

    try {
        const response = await fetch('https://api.yourservice.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({ task })
        });

        const data = await response.json();
        res.json({ message: data.message });
    } catch (error) {
        res.status(500).json({ message: 'Error processing task', error: error.message });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
