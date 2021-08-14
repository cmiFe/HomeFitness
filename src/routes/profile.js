const express = require("express");
const LoginController = require("../app/Controller/LoginController");
const path  = require("path")


const router = express.Router();

router.get('/', (req, res) => {
    const usuario = req.session.usuario;
    res.render('profile.ejs',{user:usuario})
  })

  router.post("/",(req,res) => {
    res.redirect('editarCadastro')
});

module.exports = router