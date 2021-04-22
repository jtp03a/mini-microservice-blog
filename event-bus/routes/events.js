var express = require('express');
var router = express.Router();
const axios = require('axios');

const events = []

router.post('/', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post('https://4000-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', event);
    axios.post('https://4001-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', event);
    axios.post('https://4002-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', event);
    axios.post('https://4003-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', event);

    res.send({status: 'OK'})
});

router.get('/', (req, res) => {
    res.send(events)
})

module.exports = router;