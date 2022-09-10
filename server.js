// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const database = process.env.PG_URI
const password = process.env.PG_PASSWORD
const sequelize = new Sequelize({
    storage: database,
    dialect: 'postgres',
    username: 'postgres',
    password: `${password}`,
})
try {
    sequelize.authenticate()
    console.log(`Connection with database established at ${database}`)
} catch (err) {
    console.log(`Unable to connect to the database: ${err}`)
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})