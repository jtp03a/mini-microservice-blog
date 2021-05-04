var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')
const axiosConfig = require('../../axiosconfig.js');

const commentsByPostId = {}

router.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
});

router.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');

  const { content } = req.body

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({id: commentId, content, status: 'pending'})

  commentsByPostId[req.params.id] = comments

  await axios.post('https://4005.cs.jakepeterson.dev/events', {
    type: 'CommentCreated',
    data: {
      id: commentId, 
      content,
      postId: req.params.id,
      status: 'pending'
    }
  })

  res.status(201).send(comments)
});

router.post('/events', async (req, res) => {
  console.log('Received Event', req.body.type)
  const { type, data } = req.body

  if (type === 'CommentModerated') {
      const { postId, id, status, content } = data

      const comments = commentsByPostId[postId]

      const comment = comments.find(comment => {
        return comment.id === id
      })

      comment.status = status

      await axiosConfig.eventAxios.post('/events', {
        type: 'CommentUpdated',
        data: {
          id, 
          content,
          postId,
          status
        }
      })
  }
});

module.exports = router;