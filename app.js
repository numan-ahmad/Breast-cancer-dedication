const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())

mongoose.connect('mongodb+srv://helloworld:helloworld@cluster1.aoxgo0g.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("connected to localhost")
})
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