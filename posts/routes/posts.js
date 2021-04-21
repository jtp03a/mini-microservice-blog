var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')

const posts = {}

/* GET home page. */
router.get('/', (req, res) => {
  res.send(posts)
});

router.post('/', (req, res) => {
  const id = randomBytes(4).toString('hex');

  const { title } = req.body
  posts[id] = {
      id, title
  }

  res.status(201).send(posts[id])
});

module.exports = router;