const Sequelize = require('sequelize');

const dotenv = require('dotenv');

dotenv.config(); // Use .env

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DRIVER,
  }
);

const connectDB = () => {
  // Check Database Connection
  sequelize
    .authenticate()
    .then(() => console.log('Database is Connected...'.cyan.underline))
    .catch((err) => console.error(`Database Error: ${err}`.red.underline.bold));
};

module.exports = connectDB;
