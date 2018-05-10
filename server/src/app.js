const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//Build an express app... a very basic application that can be used for REST endpoints
const app = express()
//Use the log generator called morgan
app.use(morgan('combined'))
//Allow our express app to easily parse json files
app.use(bodyParser.json())
//Allow any client to access this (ie, if you want any client around the world to get
//to your server); it's a security risk to have this enabled
app.use(cors())

//Define an endpoint (/status) for method; main ones are: get, post, put, patch, delete
//app.get('/status', (req, res) => {
//    res.send({
//        message: 'hello world!'
//    })
//})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}!  Your user was registered. Have fun!`
    })
})

/* eslint-disable */
app.listen(process.env.PORT || 8081)
/* eslint-enable */
