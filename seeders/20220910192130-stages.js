'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('stages', [{
      stage_name: 'Center Stage',
      stage_location: 'Center',
    },
    {
      stage_name: 'East Stage',
      stage_location: 'East',
    },
    {
      stage_name: 'West Stage',
      stage_location: 'West',
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stages', null, {});
  }
};
