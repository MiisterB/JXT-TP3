

const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({encoded : true}))
app.use(bodyParser.json())

const usersRouter = require('./routes/router')

app.use('/api/v1', usersRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

