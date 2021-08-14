const express = require("express");
const LoginController = require("../app/Controller/LoginController");
const UserController = require("../app/Controller/UserController");
const AuthMidleware = require("../app/Midlewares/AuthMidleware")
const path  = require("path")


const router = express.Router();
router.get('/', (req, res) => {
    res.render('contato.ejs')
    //res.send("TESTE 12")
  })

module.exports = router