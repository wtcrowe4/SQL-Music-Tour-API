'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ stage, event }) {
      // define association here
      
      // stage_event.belongsTo(stage, {
      //   foreignKey: 'stage_id',
      //   as: 'stages',
      // });
      // stage_event.belongsTo(event, {
      //   foreignKey: 'event_id',
      //   as: 'events',
      // });
    }
  }
  stage_event.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'stage_event',
    tableName: 'stages_events',
    timestamps: false,
  });
  return stage_event;
};