'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Types extends Model {
    static associate(models) {
      Types.hasMany(models.Devices, { foreignKey: 'typeId' })
      Types.belongsToMany(models.Brands, {through: models.TypeBrands })
    }
  }
  Types.init({
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
  }, {
    sequelize,
    modelName: 'Types',
  });
  return Types;
};