const express = require("express");
const LoginController = require("../app/Controller/LoginController");
const path  = require("path")


const router = express.Router();
router.get('/', (req, res) => {
    res.render('login.ejs')
  })

router.post("/",LoginController.index,(req,res) => {
  req.session.userEmail = req.body.email;
  res.redirect('/profile');
});


router.post("/cadastro",(req,res) => {
  req.session.emailCadastro = req.body.email;
  res.redirect('/cadastro');
});


module.exports = router