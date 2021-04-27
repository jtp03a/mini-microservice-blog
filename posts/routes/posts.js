var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')
const axiosConfig = require('../../axiosconfig.js');

const posts = {}

router.get('/', (req, res) => {
  res.send(posts)
});

router.post('/', async (req, res) => {

  const id = randomBytes(4).toString('hex');

  const { title } = req.body
  posts[id] = {
      id, title
  }

  await axiosConfig.eventAxios.post('/events', {
    type: 'PostCreated',
    data: {
      id, title
    }
  })

  res.status(201).send(posts[id])

});

module.exports = router;