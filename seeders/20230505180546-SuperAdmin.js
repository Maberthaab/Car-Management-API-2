'use strict';
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [
    {
      nama: 'Berlian',
      class:"SuperAdmin",
      email: 'berlian@gmail.com',
      password: await bcrypt.hash("berlian", 10), //setup with bcrypt encrypt
      createdAt: new Date(),
      updatedAt:new Date(),
    }
  ], {});
  },
 async down(queryInterface, Sequelize){
  return queryInterface.bulkDelete('user', null, {});
 }
};
