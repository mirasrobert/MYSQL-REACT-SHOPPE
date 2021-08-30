const express = require('express');
const products = require('./data/products');

require('dotenv').config(); // Use .env

const app = express();

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
