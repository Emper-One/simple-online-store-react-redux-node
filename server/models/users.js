'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasOne(models.Baskets, { foreignKey: 'userId' })
      Users.hasMany(models.Ratings)
    }
  }
  Users.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};