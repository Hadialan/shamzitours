const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the client app (if built)
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Fallback to client app for any other route
app.get('*', (req, res) => {
    // If client build exists
    const clientIndex = path.join(__dirname, '../client/dist/index.html');
    if (require('fs').existsSync(clientIndex)) {
        res.sendFile(clientIndex);
    } else {
        res.send('API running. Client not built yet.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
