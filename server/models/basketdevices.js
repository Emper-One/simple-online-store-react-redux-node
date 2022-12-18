'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketDevices extends Model {
    static associate(models) {
      BasketDevices.belongsTo(models.Baskets)
    }
  }
  BasketDevices.init({
    deviceId: {type: DataTypes.INTEGER, allowNull: false},
    basketId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'BasketDevices',
  });
  return BasketDevices;
};