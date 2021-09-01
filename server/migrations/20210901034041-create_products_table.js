'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'products',
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
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0,
        },
        reviews_count: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0,
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0,
        },
        count_in_stock: {
          type: Sequelize.INTEGER,
          allowNull: false,
          default: 0,
        },
        created_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
        updated_at: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
      },
      { underscored: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
