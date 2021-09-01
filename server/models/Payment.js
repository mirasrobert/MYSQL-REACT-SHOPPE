import Sequelize from 'sequelize';
import db from '../database/database';

const Payment = db.define(
  'Payment',
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
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    update_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true }
);

export default Payment;
