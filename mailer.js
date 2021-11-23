const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
var bodyParser = require('body-parser');
// declare vars
var fromMail = 'sender.email19926@gmail.com';
var toMail ='' ;
var subject = 'Arhans project';
var text = "hello! " 

var prompt = require('prompt-sync')();
var toMail = prompt("Enter the recievers email?");
console.log("Sending Email to "+toMail);
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
