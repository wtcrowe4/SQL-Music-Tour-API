// DEPENDANCIES
const bands = require('express').Router();
const db = require('../models');
const Band = db.band;


// ROUTES
bands.get('/', async (req, res) => {
    try {
        const allBands = await Band.findAll();
        res.status(200).json(allBands);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});








module.exports = bands;