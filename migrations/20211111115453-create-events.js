"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      photoEvent: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      detail: {
        allowNull: false,
        type: Sequelize.STRING(600),
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dateEnd: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      speakerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      speakerPhoto: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      organizer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      linkMeet: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });

    // Make userId to be foreign key
    await queryInterface.addConstraint("events", {
      fields: ["userId"],
      type: "foreign key",
      name: "custom_fkey_userId",
      references: {
        //Required field
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    // Make categoryId to be foreign key
    await queryInterface.addConstraint("events", {
      fields: ["categoryId"],
      type: "foreign key",
      name: "custom_fkey_categoryId",
      references: {
        //Required field
        table: "categories",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("events");
  },
};
