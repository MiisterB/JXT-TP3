const express = require('express')
const app = express()
var users = {
    "14014959" : {"prenom" : "Adrien",
                  "nom"    : "Gégout"},
    "16006451" : {"prenom" : "Simon",
                 "nom"     : "Moisan"}
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  res.send(users)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})