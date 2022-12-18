'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeBrands extends Model {
    static associate(models) {
    }
  }
  TypeBrands.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  }, {
    sequelize,
    modelName: 'TypeBrands',
  });
  return TypeBrands;
};