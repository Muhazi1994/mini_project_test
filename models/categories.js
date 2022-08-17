"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.categories.hasMany(models.events, {
        foreignKey: "categoryId",
      });
      models.categories.hasMany(models.ratings, {
        foreignKey: "categoryId",
      });
      // define association here
    }
  }
  categories.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "categories",
    }
  );
  return categories;
};
