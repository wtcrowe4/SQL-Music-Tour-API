'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({stage, stage_event, set_time, meet_greet}) {
      // define association here
      // event id, band id, start time, end time
      // event.hasMany(models.band), {foreignKey: 'band_id'};
      // event.hasMany(models.band), {foreignKey: 'start_time', targetKey: 'available_start_time'};
      // event.hasMany(models.band, {foreignKey: 'end_time'});
      event.belongsToMany(stage, { 
        foreignKey: 'event_id',
        through: stage_event,
        as: 'stages'
       });
       event.hasMany(set_time, {
        foreignKey: 'event_id',
        as: 'set_times'
      });
      event.hasMany(meet_greet, {
        foreignKey: 'event_id',
        as: 'meet_greets'
      });
      event.hasMany(stage_event, {
        foreignKey: 'event_id',
        as: 'stages_events'
      });
    }
  }
  event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
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
  }, {
    sequelize,
    modelName: 'event',
    tableName: 'events',
    timestamps: false,
  });
  return event;
};