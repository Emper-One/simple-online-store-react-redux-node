'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    static associate(models) {
      Ratings.belongsTo(models.Users)
      Ratings.belongsTo(models.Devices)
    }
  }
  Ratings.init({
    rate: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    deviceId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Ratings',
  });
  return Ratings;
};