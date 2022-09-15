'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({meet_greet, set_time }) {
      // define association here
      // band id, start time, end time
      //band.belongsToMany(models.event, {foreignKey: 'band_id'});
      band.hasMany(meet_greet, {
        foreignKey: 'band_id',
        as: 'meet_greets',
      });
      band.hasMany(set_time, {
        foreignKey: 'band_id',
        as: 'set_times',
      });

    }
  }
  band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    band_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    band_members: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'band',
    tableName: 'bands',
    timestamps: false,
  });
  return band;
};