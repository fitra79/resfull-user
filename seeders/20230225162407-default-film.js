'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Film', [
      {
        title:'Fate Stay Night: Unlimited Blade',
        description: 'Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina mother, her total drops to 0 and she pulled into the Abyss, never to be seen again. But her mother last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!',
        genre: 'Action, Adventure, Fantasy,',
        director: 'anime',
        actors: 'anime',
        years: 'Oct 02, 2019 to ?',
        rating: '8.5 / 161 times',
        duration: '24 min',
        poster: 'details-pic.jpg',
        trailer: 'https://youtu.be/gDFWHD9cm-E'
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
