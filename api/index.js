const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The robots are coming! Head for the hills!");

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The robots are coming! Head for the hills!");

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

const test = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};

module.exports = app;
