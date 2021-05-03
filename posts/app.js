var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors') 

const postsRouter = require('./routes/posts')
const eventsRouter = require('./routes/events')

var app = express();

const corsOptions ={
    origin:'https://3000.cs.jakepeterson.dev', 
    credentials:true,  
    optionSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);
app.use('/events', eventsRouter);

module.exports = app;
