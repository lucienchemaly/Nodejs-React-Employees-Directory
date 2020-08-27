'use strict';
module.exports = (sequelize, DataTypes) => {
  const testUser = sequelize.define('testUser', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  testUser.associate = function(models) {
    // associations can be defined here
  };
  return testUser;
};