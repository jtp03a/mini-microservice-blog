var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')

const posts = {}

/* GET home page. */
router.get('/', (req, res) => {
  res.send(posts)
});

router.post('/', async (req, res) => {

  const id = randomBytes(4).toString('hex');

  const { title } = req.body
  posts[id] = {
      id, title
  }

  await axios.post('https://4005-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', {
    type: 'PostCreated',
    data: {
      id, title
    }
  })

  res.status(201).send(posts[id])

});

module.exports = router;