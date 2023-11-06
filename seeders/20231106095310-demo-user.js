'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: 'Kevin',
      lastName: 'Mortensen',
      email: 'Kevin.Dyhr@Gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        firstName: 'Yuna',
        lastName: 'Kattesen',
        email: 'Kat@Kattemail.com',
        createdAt: new Date(),
        updatedAt: new Date()
        }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};