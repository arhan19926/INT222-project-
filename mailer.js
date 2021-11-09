const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const path = require('path');
const app = express();

router.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/home.html'));
	//__dirname resolves to our project folder.
  });

 app.use('/',router);
 app.listen(process.env.port || 3000);

console.log('Running at Port 3000'); 
  
app.get('/',(req,res)=>{
	res.send('hello');
	
})

// declare vars
var fromMail = 'sender.email19926@gmail.com';
var toMail = document.getElementsByName('mail1').value;
var subject = 'Arhans project';
var text = "hello! " 

// auth
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: fromMail ,
		pass: 'test@12345'
	}
	});
	
// email options
	let mailOptions = {
		from: fromMail,
		to: toMail,
		subject: subject,
		text: text
		};
// sending email
		transporter.sendMail(mailOptions, (error, response) => {
			if (error) {
				console.log(error);
			}
			console.log(response)
			});