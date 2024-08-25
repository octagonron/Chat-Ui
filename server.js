const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle task submission
app.post('/api/send-task', async (req, res) => {
    const { task } = req.body;

    try {
        // This is a placeholder. Replace with your actual API call.
        // const response = await fetch('https://api.yourservice.com/endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer YOUR_API_KEY'
        //     },
        //     body: JSON.stringify({ task })
        // });
        // const data = await response.json();

        // For now, let's just echo the message back
        const data = { message: `You said: ${task}` };
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error processing task', error: error.message });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

