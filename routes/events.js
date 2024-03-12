const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

let events = [];

// Create
router.post('/', (req, res) => {
    const { date, location, description } = req.body;
    const newEvent = new Event(Date.now(), date, location, description);
    events.push(newEvent);
    res.redirect('/events');
});

// Read (list)
router.get('/', (req, res) => {
    res.render('eventList', { events });
});

// Read (details)
router.get('/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    res.render('eventDetails', { event });
});

// Update
router.put('/:id', (req, res) => {
    // Update event logic
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete event logic
});

module.exports = router;