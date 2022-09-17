'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ event, set_time, stage_event }) {
      // define association here
      stage.belongsToMany(event, { 
        foreignKey: 'stage_id', 
        through: stage_event,
        as: 'events'
      });
      stage.hasMany(set_time, {
        foreignKey: 'stage_id',
        as: 'set_times'
      });
      stage.hasMany(stage_event, {
        foreignKey: 'stage_id',
        as: 'stages_events'
      });
    }
  }
  stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stage_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'stage',
    tableName: 'stages',
    timestamps: false,
  });
  return stage;
};