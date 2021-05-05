var express = require('express');
var router = express.Router();
const axios = require('axios');

const events = []

router.post('/', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post('http://posts-srv:6000/events', event);
    axios.post('http://comments-srv:6001/events', event);
    axios.post('http://query-srv:6002/events', event);
    axios.post('http://moderation-srv:6003/events', event);

    res.send({status: 'OK'})
});

router.get('/', (req, res) => {
    res.send(events)
})

module.exports = router;
