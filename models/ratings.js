"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ratings.belongsTo(models.users, {
        foreignKey: "userId",
      });
      models.ratings.belongsTo(models.events, {
        foreignKey: "eventId",
      });
      models.ratings.belongsTo(models.categories, {
        foreignKey: "categoryId",
      });
    }
  }
  ratings.init(
    {
      rating: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ratings",
    }
  );
  return ratings;
};
