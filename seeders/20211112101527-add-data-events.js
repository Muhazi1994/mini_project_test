const faker = require("faker");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("events", [
      {
        title: faker.commerce.department(),
        userId: 1,
        categoryId: 1,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.words(),
        dateStart: new Date(),
        dateEnd: new Date(),
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: faker.lorem.word(),
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: faker.commerce.department(),
        userId: 2,
        categoryId: 2,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.words(),
        dateStart: new Date(),
        dateEnd: new Date(),
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: faker.lorem.word(),
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: faker.commerce.department(),
        userId: 3,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.words(),
        dateStart: new Date(),
        dateEnd: new Date(),
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: faker.lorem.word(),
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: faker.commerce.department(),
        userId: 2,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.words(),
        dateStart: new Date(),
        dateEnd: new Date(),
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: faker.lorem.word(),
        linkMeet: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: faker.commerce.department(),
        userId: 1,
        categoryId: 3,
        photoEvent: faker.image.imageUrl(),
        detail: faker.lorem.words(),
        dateStart: new Date(),
        dateEnd: new Date(),
        speakerName: faker.name.findName(),
        speakerPhoto: faker.image.imageUrl(),
        organizer: faker.lorem.word(),
        linkMeet: faker.image.imageUrl(),
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
    await queryInterface.bulkDelete("events", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
