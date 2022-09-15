// DEPENDANCIES
const { Op } = require('sequelize');
const events = require('express').Router();
const db = require('../models');
const Event = db.event;

// GET ROUTES
events.get('/', async (req, res) => {
    try {
        const allEvents = await Event.findAll({
            order: [ [ 'event_date', 'ASC' ] ],
            where: {
                event_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`},
            }
        });
        res.status(200).json(allEvents);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

events.get('/:id', async (req, res) => {
    try {
        const event = await Event.findOne({
            where: { event_id: req.params.id }
        });
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// POST ROUTE
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json({
            message: 'Event created',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// PUT ROUTE
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id }
        });
        res.status(200).json({
            message: 'Event updated',
            data: updatedEvent
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// DELETE ROUTE
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: { event_id: req.params.id }
        });
        res.status(200).json({
            message: 'Event deleted',
            data: deletedEvent
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});


module.exports = events;