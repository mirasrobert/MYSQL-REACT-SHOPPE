'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Admin User',
          email: 'admin@gmail.com',
          password:
            '$2a$12$zMxj7jInxzv0BYEeZWt87eqlw8T8D7USFDI2w0.RJBHMj3ArJ7Ugy',
          isAdmin: true,
        },
        {
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          password:
            '$2a$12$zMxj7jInxzv0BYEeZWt87eqlw8T8D7USFDI2w0.RJBHMj3ArJ7Ugy',
          isAdmin: false,
        },
        {
          name: 'Jane Doe',
          email: 'janedoe@gmail.com',
          password:
            '$2a$12$zMxj7jInxzv0BYEeZWt87eqlw8T8D7USFDI2w0.RJBHMj3ArJ7Ugy',
          isAdmin: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
