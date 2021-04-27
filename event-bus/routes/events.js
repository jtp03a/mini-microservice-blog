var express = require('express');
var router = express.Router();
const axios = require('axios');
const axiosConfig = require('../../axiosconfig.js');

const events = []

router.post('/', (req, res) => {
    const event = req.body

    events.push(event)

    axiosConfig.postAxios.post('/events', event);
    axiosConfig.commentAxios.post('/events', event);
    axiosConfig.queryAxios.post('/events', event);
    axiosConfig.moderationAxios.post('/events', event);

    res.send({status: 'OK'})
});

router.get('/', (req, res) => {
    res.send(events)
})

module.exports = router;