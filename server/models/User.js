const Sequelize = require('sequelize');
const db = require('../database/database');

const User = db.sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
  },
  { timestamps: true, underscored: true }
);

module.exports = User;
