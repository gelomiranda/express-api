'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    filePath: DataTypes.STRING,
    fileName: DataTypes.STRING
  }, {});
  Document.associate = function(models) {
    // associations can be defined here
  };
  return Document;
};