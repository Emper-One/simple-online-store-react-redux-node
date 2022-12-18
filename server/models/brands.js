'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    static associate(models) {
      Brands.hasMany(models.Devices, { foreignKey: 'brandId' })
      Brands.belongsToMany(models.Types, {through: models.TypeBrands })
    }
  }
  Brands.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
  }, {
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};