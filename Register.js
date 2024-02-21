const express = require('express');
const router = express.Router();
const mailgun = require('mailgun-js');

// Initialize mailgun instance
const mg = mailgun({ apiKey: 'your_api_key_here', domain: 'your_domain_here' });

// Handle POST request to send welcome email
router.post('/', (req, res) => {
    // Extract email from request body
    const recipientEmail = req.body.email;

    // Email data
    const emailData = {
        from: 'vanshaj4883.be22@chitkara.edu.in',
        to: recipientEmail,
        subject: 'Welcome to DEV@Deakin!',
        text: `Hey there,\n\nHold onto your coding hats, because you've just stepped into the wildest tech party this side of the digital universe! 🎉🎈🥳\n\nAt DEV@Deakin, we are all about coding, creating, and caffeine-fueled brainstorming sessions. Get ready to meet fellow coding comrades, discuss the meaning of life (and semicolons), and marvel at the marvels of technology.\n\nWarning: Your life may now include spontaneous bursts of code excitement and endless debates about tabs versus spaces.\n\nSo buckle up, because the tech extravaganza is just getting started!\n\nHigh-fives and error messages,\nThe Silly Tech Squad 🤖`
    };

    // Send email
    mg.messages().send(emailData, (error, body) => {
        if (error) {
            // Log error and send response
            console.error('Error sending email:', error);
            res.status(500).send('An error occurred while sending the welcome email.');
        } else {
            // Log success and send response
            console.log('Email sent successfully:', body);
            res.send('Welcome email sent successfully.');
        }
    });
});

module.exports = router;