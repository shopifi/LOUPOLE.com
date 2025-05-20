
// backend/gelato.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/gelato-order', async (req, res) => {
  const order = req.body;
  const response = await fetch('https://api.gelato.com/v2/orders', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer d17da3b0-xxx',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  const data = await response.json();
  res.json(data);
});

module.exports = app;
