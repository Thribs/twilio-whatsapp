
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = (req, res) => {
  const { name = 'world' } = req.query;
  res.status(200).send(`Hello, ${name}!`);
};

module.exports = app;
