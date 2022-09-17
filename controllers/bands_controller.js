// DEPENDANCIES
const { Op } = require('sequelize');
const bands = require('express').Router();
const db = require('../models');
const Band = db.band;
const MeetGreet = db.meet_greet;
const Event = db.event;
const SetTime = db.set_time;

// GET ROUTES
bands.get('/', async (req, res) => {
    try {
        const allBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                band_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`},
            }
        });
        res.status(200).json(allBands);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

bands.get('/:name', async (req, res) => {
    try {
        const band = await Band.findOne({
            where: { band_name: req.params.name },
            include: [
                {
                    model: MeetGreet, 
                    as: 'meet_greets',
                    attributes: ['date', 'meet_greet_location', 'start_time', 'end_time'],
                    order: [ [ 'start_time', 'ASC' ] ],
                    include: {
                        model: Event,
                        as: 'events',
                        attributes: ['event_name'],
                        where: { event_name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
                      }
                },
                {
                    model: SetTime,
                    as: 'set_times',
                    attributes: ['date', 'start_time', 'end_time'],
                    order: [ [ 'start_time', 'ASC' ] ],
                    include: {
                        model: Event,
                        as: 'events',
                        attributes: ['event_name', 'event_location'],
                        where: { event_name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
                      }
                }
            ]
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