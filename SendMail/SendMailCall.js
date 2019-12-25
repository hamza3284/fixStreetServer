var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kashif.zahid18@gmail.com',
    pass: 'Tgbyhnujm8ik'
  }
});

var mailOptions = {
  from: 'kashif.zahid18@gmail.com',
  to: 'kashif.zahid18@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

exports.caller=function(){



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}