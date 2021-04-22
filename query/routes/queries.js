var express = require('express');
var router = express.Router();

const posts = {}

router.get('/posts', (req, res) => {
    res.send(posts)
});

router.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreate') {
        const { id, title } = data
        posts[id] = { id, title, comments: [] }
    } 

    if (type === 'CommentCreate') {
        const { id, content, postId} = data;
        const post = posts[postId]
        post.comments.push({ id, content })
    }
    res.send({})
});

module.exports = router;