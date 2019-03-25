const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')

const users = [
    {id : "16006451",
    login : "MiiisterB",
    age : 21,
    name : "Simon Moisan"}
]

router.use(function(req, res, next) {
    console.log("ALED");
    next();
})

router.get('/', function (req, res) {
  res.send('Hello World!')
})

router.get('/users', function (req, res) {
    
  res.status(200).send(users)
})

router.post('/users', function(req, res, next) {
    var user = {"id" : "",
                "login" : "",
                "age" : 0,
                "name" : ""
               }
    user.id = uuidv1()
    user.login = req.body.login
    user.age = req.body.age
    user.name = req.body.name
    
    users.push(user)
    return res.send('User enregistré')
})


router.get('/users/:id', function(red,res, next) {
    const id_num = req.params.id
    var this_user = users.filter((elem) => elem.id === id_num)
    
    if (this_user === undefined || this_user.lenght == 0){
        return res.status(404).send("Cet user n'éxiste pas")
    }else{
        return res.status(200).send(this_user)
    }
})

router.patch('/users/:id', function(red,res, next) {
    const id_num = req.params.id
    var this_user = users.filter((elem) => elem.id === id_num)
    
    if (this_user === undefined || this_user.lenght == 0){
        return res.status(404).send("Cet user n'éxiste pas")
    }else{
        this.user[0].login = req.body.login
        this.user[0].age = req.body.age
        this.user[0].name = req.body.name
        return res.status(200).send("User modifié")
    }
})

router.delete('/users/:id', function(red,res, next) {
    
})

module.exports = router