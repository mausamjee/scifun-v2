const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
 res.json({ message: 'Welcome to the API!' });
});

// Example route with parameters
app.get('/hello/:name', (req, res) => {
 res.json({ message: `Hello, ${req.params.name}!` });
});

// POST example
app.post('/data', (req, res) => {
 const data = req.body;
 res.json({
  message: 'Data received',
  data: data
 });
});

// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});