const express = require('express');
const nodemailer = require('nodemailer');
const { homedir } = require('os');
const router = express.Router();
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
if (req.url == "/") {
fs.readFile("test.txt", (err, data) => {
if (err)
{
res.write('Contents could not be found');
res.end();
}
else
{
res.write(data.toString());
res.end();
}
});
}
}).listen(8088);


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
