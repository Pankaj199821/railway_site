// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for ticket booking
app.post('/book-ticket', (req, res) => {
    const { trainNumber, fromStation, toStation, date, passengers } = req.body;

    // Process the booking data (mock example)
    if (!trainNumber || !fromStation || !toStation || !date || !passengers) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Mock response for successful booking
    const bookingDetails = {
        bookingId: Math.floor(Math.random() * 100000),
        trainNumber,
        fromStation,
        toStation,
        date,
        passengers
    };

    res.status(200).json({ message: 'Booking successful', bookingDetails });
});

// Endpoint for payment processing
app.post('/process-payment', (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;

    // Validate payment details (mock example)
    if (!cardNumber || !expiryDate || !cvv) {
        return res.status(400).json({ message: 'All payment fields are required' });
    }

    // Mock payment processing response
    const paymentStatus = {
        paymentId: Math.floor(Math.random() * 100000),
        status: 'Success'
    };

    res.status(200).json({ message: 'Payment successful', paymentStatus });
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
