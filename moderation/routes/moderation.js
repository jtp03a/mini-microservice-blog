var express = require('express');
var router = express.Router();
const axios = require('axios')

router.post('/events', async (req, res) => {
  const { type, data } = req.body
  if (type === 'CommentCreated') {
      const status = data.content.includes('orange') ? 'rejected' : 'approved'

      await axios.post('http://event-bus-srv:6005/events', {
        type: 'CommentModerated',
        data: {
            id: data.id,
            postId: data.postId,
            status,
            content: data.content
        }
    })
  }
});

module.exports = router;
