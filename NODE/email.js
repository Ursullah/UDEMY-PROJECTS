//nodemailer is used for sending emails from the web application ands and server
//Used for sending the account verification emails, password reset emails, etc


//importing and configuration
const nodemailer = require('nodemailer');

const x = nodemailer.createTransport({
    //x object is responsilbe for sending the emails.
    service: 'gmail',
    auth: {
        user: 'khanguhaursula@gmail.com',
        pass: 'bcqi qlpp tkee yjgb',
    }
})

//defining mail options
const y = {
    //y defines the email properties, including the sender, recipient, 
    // subject and email body content.
    from: 'khanguhaursula@gmail.com',
    to: 'uakhonya@kabarak.ac.ke',
    subject: 'Testing',
    text: 'Hello! This email was sent from a Node.js script using Nodemailer.'
}

//using sendMail method
x.sendMail(y, (error, info) => {
    if(error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});