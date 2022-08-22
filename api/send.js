require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const autoToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, autoToken);


const send = (req, res) => {
  console.log("Attempting to send message")
  client.messages
    .create({
      body: "Hello there!",
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+553597179655'
    })
    .then(message => console.log(`sent message ${message.sid}`))
    .catch(err => console.log(`Sorry. An error has occured.
      Please report to the administrator. ERROR: ${err}`)
    );
    const { name = 'world' } = req.query;
    res.status(200).send(`Hello, ${name}!`);
 }

module.exports = send;
