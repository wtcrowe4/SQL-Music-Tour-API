// DEPENDANCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
// SEQUELIZE CONNECTION
const database = process.env.PG_URI
const password = process.env.PG_PASSWORD
const sequelize = new Sequelize({
    storage: database,
    dialect: 'postgres',
    username: 'postgres',
    password: `${password}`,
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