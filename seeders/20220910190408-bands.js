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
    await queryInterface.bulkInsert('bands', [{
      band_name: 'Red Hot Chili Peppers',
      band_members: 5,
      band_genre: 'Rock',
      available_start_time: '2021-09-10 19:00:00',
      end_time: '2021-09-10 20:00:00',
    },
    {
      band_name: 'Linkin Park',
      band_members: 4,
      band_genre: 'Rock',
      available_start_time: '2021-09-10 20:00:00',
      end_time: '2021-09-10 21:00:00',
    },
    {
      band_name: 'Nirvana',
      band_members: 4,
      band_genre: 'Rock',
      available_start_time: '2021-09-10 21:00:00',
      end_time: '2021-09-10 22:00:00',
    },
    {
      band_name: 'Metallica',
      band_members: 5,
      band_genre: 'Rock',
      available_start_time: '2021-09-10 22:00:00',
      end_time: '2021-09-10 23:00:00',
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('bands', null, {});
  }
};
