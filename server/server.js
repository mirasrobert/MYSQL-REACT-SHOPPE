const express = require('express');
const db = require('./database/database.js');
const dotenv = require('dotenv');

require('colors'); // Make our console have colors

dotenv.config(); // Use .env

db.connectDB(); // Connect to Database

const app = express();

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use('/api/products', require('./routes/api/products'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
);
