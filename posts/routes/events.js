var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    console.log('Received Event', req.body.type)
    res.send({})
});

module.exports = router;
