"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.hasMany(models.events, {
        foreignKey: "userId",
      });
      models.users.hasMany(models.comments, {
        foreignKey: "userId",
      });
      models.users.hasMany(models.bookmarks, {
        foreignKey: "userId",
      });
      models.users.hasMany(models.ratings, {
        foreignKey: "userId",
      });
      // define association here
    }
  }
  users.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "users",
    }
  );
  return users;
};
