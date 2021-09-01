const Sequelize = require('sequelize');
const db = require('../database/database');

const Review = db.define(
  'Review',
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      references: { model: 'products', key: 'id' },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  { timestamps: true, underscored: true }
);

module.exports = Review;
