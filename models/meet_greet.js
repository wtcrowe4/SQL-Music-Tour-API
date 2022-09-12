'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //band_id, event_id, start_time, end_time, date
      meet_greet.belongsTo(models.band, {foreignKey: 'band_id'});
      meet_greet.belongsTo(models.event, {foreignKey: 'event_id'});
      meet_greet.belongsTo(models.event, {foreignKey: 'start_time', targetKey: 'available_start_time'});
      meet_greet.belongsTo(models.event, {foreignKey: 'end_time'});
      meet_greet.belongsTo(models.event, {foreignKey: 'date', targetKey: 'event_date'});
    }
  }
  meet_greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    meet_greet_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greets',
    timestamps: false,
  });
  return meet_greet;
};