"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comments.belongsTo(models.users, {
        foreignKey: "userId",
      });
      models.comments.belongsTo(models.events, {
        foreignKey: "eventId",
      });
      // define association here
    }
  }
  comments.init(
    {
      userId: DataTypes.STRING,
      eventId: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "comments",
    }
  );
  return comments;
};
