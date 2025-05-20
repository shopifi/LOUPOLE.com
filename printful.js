
// backend/printful.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/printful-order', async (req, res) => {
  const order = req.body;
  const response = await fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer mU0cBqSs6E8EOHiSsRioYZb4q7A3y7Iqj0z5Z5Mp',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  const data = await response.json();
  res.json(data);
});

module.exports = app;
