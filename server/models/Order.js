import Sequelize from 'sequelize';
import db from '../database/database';

const Order = db.define(
  'Order',
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
    product_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: { model: 'products', key: 'id' },
    },
    shipping_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: { model: 'shippings', key: 'id' },
    },
    shipping_price: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    total_price: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0,
    },
    payment_method: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tax: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0.0,
    },
    paid_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    delivered_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  { timestamps: true, underscored: true }
);

export default Order;
