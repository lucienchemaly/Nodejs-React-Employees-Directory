'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const testEmployees = [];
    const faker = require('faker');
    const deparments = ["HR", "Finance", "Sales", "IT", "Software Engineering", "Marketing", "RF"];
    for(let i = 0; i < 200; i++) {
      testEmployees.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        dob: new Date().toUTCString(),
        phoneNumber: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        prefix: faker.name.prefix(),
        department: deparments[Math.floor(Math.random() * 6)],
        imageUrl:faker.internet.avatar(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Employees', testEmployees, {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Employees', null, {});
  }
};
