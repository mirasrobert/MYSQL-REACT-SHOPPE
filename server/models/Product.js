const Sequelize = require('sequelize');
const db = require('../database/database');

const Product = db.define(
  'Product',
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      onDelete: 'CASCADE',
      references: { model: 'users', key: 'id' },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
    },
    reviews_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
    },
    count_in_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
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

module.exports = Product;
