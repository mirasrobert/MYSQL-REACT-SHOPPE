'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'reviews',
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        product_id: {
          type: Sequelize.BIGINT,
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
          type: Sequelize.DECIMAL,
          allowNull: false,
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
    await queryInterface.dropTable('reviews');
  },
};
