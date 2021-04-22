var express = require('express');
var router = express.Router();

const posts = {}

const handleEvent = (type, data) => {
    
    if (type === 'PostCreated') {
        const { id, title } = data
        posts[id] = { id, title, comments: [] }
    } 

    if (type === 'CommentCreated') {
        const { id, content, postId, status} = data;
        const post = posts[postId]
        post.comments.push({ id, content, status })
    }

    if (type === 'CommentUpdated') {
        const { id, content, postId, status} = data
        post = posts[postId] 
        const comment = post.comments.find(comment => {
            return comment.id === id
        })
        comment.status = status
        comment.content = content
    }
}

router.get('/posts', (req, res) => {
    res.send(posts)
});

router.post('/events', (req, res) => {
    const { type, data } = req.body;

    handleEvent(type, data)
    
    res.send({})
});

module.exports = router;