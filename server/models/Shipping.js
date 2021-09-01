import Sequelize from 'sequelize';
import db from '../database/database';

const Order = db.define(
  'Shipping',
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
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
      default: 0,
    },
  },
  { timestamps: true, underscored: true }
);

export default Shipping;
