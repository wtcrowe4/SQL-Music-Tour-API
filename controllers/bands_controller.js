// DEPENDANCIES
const bands = require('express').Router();
const db = require('../models');
const Band = db.band;


// GET ROUTES
bands.get('/', async (req, res) => {
    try {
        const allBands = await Band.findAll();
        res.status(200).json(allBands);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

bands.get('/:id', async (req, res) => {
    try {
        const band = await Band.findOne({
            where: { band_id: req.params.id }
        });
        res.status(200).json(band);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// POST ROUTE
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body);
        res.status(200).json({
            message: 'Band created',
            data: newBand
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// PUT ROUTE
bands.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: { band_id: req.params.id }
        });
        res.status(200).json({
            message: 'Band updated',
            data: updatedBand
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// DELETE ROUTE
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: { band_id: req.params.id }
        });
        res.status(200).json({
            message: 'Band deleted',
            data: deletedBand
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});










module.exports = bands;