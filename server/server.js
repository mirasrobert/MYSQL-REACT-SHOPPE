const express = require('express');
const products = require('./data/products');
const connectDB = require('./database/database.js');
const dotenv = require('dotenv');

require('colors'); // Make our console have colors

dotenv.config(); // Use .env

connectDB(); // Connect to Database

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
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
);
