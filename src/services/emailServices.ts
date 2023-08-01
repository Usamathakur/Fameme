const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'thakurusama72@gmail.com',
    pass: 'zsqzmdjdlysqiztv',
  },
});

export async function sendEmailToken(email: string, token: string) {
  console.log('email: ', email, token);

  const message = {
    from: 'thakurusama72@gmail.com',
    to: email,
    subject: 'Your one-time password',
    text: `Your one time password: ${token}`,
  };

  try {
    return await transporter.sendMail(message);
  } catch (e) {
    console.log('Error sending email', e);
    throw e;
  }
}

