'use strict';
var moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    firstName: {
      type:DataTypes.STRING,
      validate:{
        max: 20
      }
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return this.firstName + ' ' + this.lastName;
      }
    },
    middleName: {
      type:DataTypes.STRING,
      validate:{
        isAlpha:true,
        max: 20
      }
    },
    lastName: DataTypes.STRING,
    dateOfBirth: {
      type:DataTypes.DATEONLY,
      timestamps: false,
      validate:{

      },
      get() {
        return moment(this.getDataValue('dateOfBirth')).format('MMM/DD/YYYY');
      }
    },
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    contactNumber: DataTypes.INTEGER,
    civilStatus: DataTypes.STRING,
    philHealthNo: DataTypes.STRING,
    sssNo: DataTypes.STRING,
    personToContact: DataTypes.STRING,
    personToContactNo: DataTypes.INTEGER
  },
  {
    getterMethods: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  }, {});
  Patient.associate = function(models) {
    Patient.hasMany(models.History, { foreignKey: 'patientId', onDelete: 'restrict' });
    Patient.hasMany(models.Document, { foreignKey: 'patientId', onDelete: 'restrict' });
  };
  return Patient;
};