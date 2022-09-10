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
    await queryInterface.bulkInsert('stages_events', [{
      stage_id: 2,
      event_id: 1,
    },
    {
      stage_id: 3,
      event_id: 2,
    },
    {
      stage_id: 2,
      event_id: 3,
    },
    {
      stage_id: 3,
      event_id: 4,
    },
    {
      stage_id: 1,
      event_id: 5,
    },
    {
      stage_id: 1,
      event_id: 6,
    },
    {
      stage_id: 1,
      event_id: 7,
    },
    {
      stage_id: 1,
      event_id: 8,
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
