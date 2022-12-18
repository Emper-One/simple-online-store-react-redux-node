'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baskets extends Model {
    static associate(models) {
      Baskets.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  Baskets.init({
    userId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Baskets',
  });
  return Baskets;
};