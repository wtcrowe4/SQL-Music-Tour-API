'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //band_id, event_id, stage_id, start_time, end_time, date
      set_time.belongsTo(models.band, {foreignKey: 'band_id'});
      set_time.belongsTo(models.event, {foreignKey: 'event_id'});
      set_time.belongsTo(models.stage, {foreignKey: 'stage_id'});
      set_time.belongsTo(models.event, {foreignKey: 'start_time'});
      set_time.belongsTo(models.event, {foreignKey: 'end_time'});
      set_time.belongsTo(models.event, {foreignKey: 'date'});
    }
  }
  set_time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'set_time',
    tableName: 'set_times',
    timestamps: false,
  });
  return set_time;
};