'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Devices extends Model {
    static associate(models) {
      Devices.belongsTo(models.Types, { foreignKey: 'typeId' })
      Devices.hasMany(models.Ratings)
      Devices.hasMany(models.BasketDevices)
      Devices.hasMany(models.DeviceInfos, { foreignKey: 'deviceId', as: 'info' });
    }
  }
  Devices.init({
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    typeId: {type: DataTypes.INTEGER, allowNull: false},
    brandId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Devices',
  });
  return Devices;
};