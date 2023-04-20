'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    model: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    manufacturedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1990,
        max: 2050,
      },
    },
    ramSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    procName: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    displaySize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 100,
      },
    },
    nfc: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};