// DEPENDANCIES
const { Op } = require('sequelize');
const events = require('express').Router();
const db = require('../models');
const Event = db.event;
const MeetGreet = db.meet_greet;
const SetTime = db.set_time;
const Band = db.band;
const Stage = db.stage;
const StageEvent = db.stage_event;

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

events.get('/:name', async (req, res) => {
    try {
        const event = await Event.findOne({
            where: { event_name: req.params.name },
            include: [
                {
                    model: MeetGreet,
                    as: 'meet_greets',
                    attributes: ['date', 'meet_greet_location', 'start_time', 'end_time'],
                    order: [ [ 'start_time', 'ASC' ] ],
                    include: {
                        model: Band,
                        as: 'bands',
                        attributes: ['band_name', 'band_genre'],
                        where: { band_name: { [Op.like]: `%${req.query.band ? req.query.band : ''}%` } }
                    }
                 },
                {
                    model: SetTime,
                    as: 'set_times',
                    attributes: ['date', 'start_time', 'end_time'],
                    order: [ [ 'start_time', 'ASC' ] ],
                    include: [
                        {
                            model: Band,
                            as: 'bands',
                            attributes: ['band_name', 'band_genre'],
                            where: { band_name: { [Op.like]: `%${req.query.band ? req.query.band : ''}%` } }
                        },
                        {
                            model: Stage,
                            as: 'stages',
                            attributes: ['stage_name', 'stage_location'],
                            where: { stage_name: { [Op.like]: `%${req.query.stage ? req.query.stage : ''}%` } }
                        }
                    ]
                },
                {
                    model: Stage,
                    as: 'stages',
                    attributes: ['stage_name', 'stage_location'],
                    through: {
                        attributes: []
                    },
                    // include: {
                    //     model: StageEvent,
                    //     as: 'stages_events',
                    //     attributes: ['stage_event_id'],
                    // }
                }
            ]
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



