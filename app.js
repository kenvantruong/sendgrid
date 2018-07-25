var Handlebars = require('handlebars');
var fs = require('fs');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const keys = require('./keys');
var options = {
  auth: {
    api_user: keys.keys.username,
    api_key: keys.keys.password
  }
}
// import template - send mail
var mailer = nodemailer.createTransport(sgTransport(options));
var source = fs.readFileSync('apple.handlebars' , 'utf8');
var template = Handlebars.compile(source);
var result = template({
  name: 'Ken',
  phone: 'iphone'
});

fs.writeFileSync('index.html', result , 'utf8')