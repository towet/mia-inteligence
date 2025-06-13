// Make sure to run 'npm install dotenv' if you haven't already
require('dotenv').config(); // Loads environment variables from .env file

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Backend server port

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Nodemailer Transporter Setup
// IMPORTANT: Replace with your actual Gmail and App Password in the .env file
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,       // Your Gmail address from .env
    pass: 'epuc faap kqbp omao'  // Your Google App Password from .env
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Email server is running!');
});

// Route to handle form submission
app.post('/api/submit-form', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  console.log('Received form data:', req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address (your Gmail from .env)
    to: 'aztech.intelligence@gmail.com', // Receiver address (your specified email)
    subject: `New Consultation Form Submission from ${name}`,
    html: `
      <h1>New Consultation Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <pre>${message}</pre>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.', details: error.message });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Form submitted and email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
