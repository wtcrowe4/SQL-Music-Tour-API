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
    await queryInterface.bulkInsert('meet_greets', [{
      event_id: 1,
      band_id: 1,
      meet_greet_location: 'East Stage',
      start_time: '2022-10-21 19:00:00',
      end_time: '2022-10-21 20:00:00',
      date: '2022-10-21'
    },
    {
      event_id: 2,
      band_id: 2,
      meet_greet_location: 'West Stage',
      start_time: '2022-10-21 20:00:00',
      end_time: '2022-10-21 21:00:00',
      date: '2022-10-21'
    },
    {
      event_id: 3,
      band_id: 3,
      meet_greet_location: 'East Stage',
      start_time: '2022-10-21 21:00:00',
      end_time: '2022-10-21 22:00:00',
      date: '2022-10-21'
    },
    {
      event_id: 4,
      band_id: 4,
      meet_greet_location: 'West Stage',
      start_time: '2022-10-21 22:00:00',
      end_time: '2022-10-21 23:00:00',
      date: '2022-10-21'
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
