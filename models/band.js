// DEPENDANCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PG_PASSWORD,
})

// MODEL
class Band extends Model {}

Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    band_members: DataTypes.INTEGER,
    band_genre: DataTypes.TEXT,
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
})





//EXPORT
module.exports = Band