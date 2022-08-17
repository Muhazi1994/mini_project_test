"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Photography",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      },
      {
        name: "Design",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lifestyle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Others",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
