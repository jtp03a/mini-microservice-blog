var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')

const commentsByPostId = {}

/* GET home page. */
router.get('/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
});

router.post('/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');

  const { content } = req.body

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({id: commentId, content})

  commentsByPostId[req.params.id] = comments

  await axios.post('https://4005-blush-nightingale-65egnev2.ws-us03.gitpod.io/events', {
    type: 'CommentCreate',
    data: {
      id: commentId, 
      content,
      postId: req.params.id
    }
  })

  res.status(201).send(comments)
});

module.exports = router;