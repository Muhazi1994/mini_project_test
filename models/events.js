"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.events.belongsTo(models.users, {
        foreignKey: "userId",
      });
      models.events.belongsTo(models.categories, {
        foreignKey: "categoryId",
      });
      models.events.hasMany(models.comments, {
        foreignKey: "eventId",
      });
      models.events.hasMany(models.bookmarks, {
        foreignKey: "eventId",
      });
      models.events.hasMany(models.ratings, {
        foreignKey: "eventId",
      });

      // define association here
    }
  }
  events.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      photoEvent: DataTypes.STRING,
      detail: DataTypes.STRING(600),
      dateStart: DataTypes.DATE,
      dateEnd: DataTypes.DATE,
      speakerName: DataTypes.STRING,
      speakerPhoto: DataTypes.STRING,
      organizer: DataTypes.STRING,
      linkMeet: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "events",
    }
  );
  return events;
};
