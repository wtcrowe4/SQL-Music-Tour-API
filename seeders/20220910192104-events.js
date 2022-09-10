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
    await queryInterface.bulkInsert('events', [{
      event_name: 'Event 1',
      event_location: 'East Stage',
      event_date: '2022-10-21',
      start_time: '2022-10-21 19:00:00',
      end_time: '2022-10-21 20:00:00'
    },
    {
      event_name: 'Event 2',
      event_location: 'West Stage',
      event_date: '2022-10-21',
      start_time: '2022-10-21 20:00:00',
      end_time: '2022-10-21 21:00:00'
    },
    {
      event_name: 'Event 3',
      event_location: 'East Stage',
      event_date: '2022-10-21',
      start_time: '2022-10-21 21:00:00',
      end_time: '2022-10-21 22:00:00'
    },
    {
      event_name: 'Event 4',
      event_location: 'West Stage',
      event_date: '2022-10-21',
      start_time: '2022-10-21 22:00:00',
      end_time: '2022-10-21 23:00:00'
    },
    {
      event_name: 'Event 5',
      event_location: 'Center Stage',
      event_date: '2022-10-22',
      start_time: '2022-10-22 19:00:00',
      end_time: '2022-10-22 20:00:00'
    },
    {
      event_name: 'Event 6',
      event_location: 'Center Stage',
      event_date: '2022-10-22',
      start_time: '2022-10-22 20:00:00',
      end_time: '2022-10-22 21:00:00'
    },
    {
      event_name: 'Event 7',
      event_location: 'Center Stage',
      event_date: '2022-10-22',
      start_time: '2022-10-22 21:00:00',
      end_time: '2022-10-22 22:00:00'
    },
    {
      event_name: 'Event 8',
      event_location: 'Center Stage',
      event_date: '2022-10-22',
      start_time: '2022-10-22 22:00:00',
      end_time: '2022-10-22 23:00:00'
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};
