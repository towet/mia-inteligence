const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, service, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and message are required.' })
      };
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aztech.intelligence@gmail.com',
        pass: 'zhtkzlphqqkysogy'
      }
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'aztech.intelligence@gmail.com',
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

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Form submitted and email sent successfully!' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.', details: error.message })
    };
  }
};
