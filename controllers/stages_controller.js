// DEPENDANCIES
const { Op } = require('sequelize');
const stages = require('express').Router();
const db = require('../models');
const Stage = db.stage;

// GET ROUTES
stages.get('/', async (req, res) => {
    try {
        const allStages = await Stage.findAll({
            where: {
                stage_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`},
            }
        });
        res.status(200).json(allStages);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

stages.get('/:id', async (req, res) => {
    try {
        const stage = await Stage.findOne({
            where: { stage_id: req.params.id }
        });
        res.status(200).json(stage);
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// POST ROUTE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message: 'Stage created',
            data: newStage
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// PUT ROUTE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: 'Stage updated',
            data: updatedStage
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});

// DELETE ROUTE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: 'Stage deleted',
            data: deletedStage
        })
    } catch (err) {
        res.status(500).json({ error: err });
        console.log(err)
    }
});


module.exports = stages;

