"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.bookmarks.belongsTo(models.events, {
        foreignKey: "eventId",
      });

      models.bookmarks.belongsTo(models.users, {
        foreignKey: "userId",
      });
      // define association here
    }
  }
  bookmarks.init(
    {
      userId: DataTypes.STRING,
      eventId: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "bookmarks",
    }
  );
  return bookmarks;
};
