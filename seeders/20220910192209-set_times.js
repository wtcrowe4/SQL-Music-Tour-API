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
    await queryInterface.bulkInsert('set_times', [{
      event_id: 5,
      stage_id: 1,
      band_id: 1,
      start_time: '2022-10-22 19:00:00',
      end_time: '2022-10-22 20:00:00',
      date: '2022-10-22'
    },
    {
      event_id: 6,
      stage_id: 1,
      band_id: 2,
      start_time: '2022-10-22 20:00:00',
      end_time: '2022-10-22 21:00:00',
      date: '2022-10-22'
    },
    {
      event_id: 7,
      stage_id: 1,
      band_id: 3,
      start_time: '2022-10-22 21:00:00',
      end_time: '2022-10-22 22:00:00',
      date: '2022-10-22'
    },
    {
      event_id: 8,
      stage_id: 1,
      band_id: 4,
      start_time: '2022-10-22 22:00:00',
      end_time: '2022-10-22 23:00:00',
      date: '2022-10-22'
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
    await queryInterface.bulkDelete('set_times', null, {});
  }
};
