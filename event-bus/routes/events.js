var express = require('express');
var router = express.Router();
const axios = require('axios');

const events = []

router.post('/', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post('https://4000.cs.jakepeterson.dev/events', event);
    axios.post('https://4001.cs.jakepeterson.dev/events', event);
    axios.post('https://4002.cs.jakepeterson.dev/events', event);
    axios.post('https://4003.cs.jakepeterson.dev/events', event);

    res.send({status: 'OK'})
});

router.get('/', (req, res) => {
    res.send(events)
})

module.exports = router;