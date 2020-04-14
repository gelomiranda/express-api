'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    description: DataTypes.STRING,
    bloodPressure: DataTypes.STRING
  }, {});
  History.associate = function(models) {
  };
  return History;
};