const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())

mongoose.connect('mongodb://localhost:27017/restfull_api').then(() => {
    console.log("connected to localhost")
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const userRoutes = require('./api/routes/user')
app.use('/user', userRoutes)

app.use((req, res, next) =>{
    const error = new Error('not found');
    error.status = 404;
    next(error)
})


app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})



module.exports = app;   