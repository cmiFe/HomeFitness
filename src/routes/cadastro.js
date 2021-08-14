const express = require("express");
const UserController = require("../app/Controller/UserController");
const path  = require("path")
//var alert = require('alert');


const router = express.Router();
router.get('/', (req, res) => {
    const emailCadastro = req.session.emailCadastro
    res.render('cadastro.ejs',{email:emailCadastro})
  })

router.post("/",UserController.store,(req,res) =>{
  res.redirect("home")
});




module.exports = router