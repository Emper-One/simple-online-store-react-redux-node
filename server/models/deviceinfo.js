'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeviceInfos extends Model {
    static associate(models) {
      DeviceInfos.belongsTo(models.Devices, { foreignKey: 'deviceId' })
    }
  }
  DeviceInfos.init({
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    deviceId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'DeviceInfos',
  });
  return DeviceInfos;
};