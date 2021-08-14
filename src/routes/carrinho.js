const express = require("express");
const carrinhoController = require("../app/Controller/CarrinhoController");



const router = express.Router();
router.get('/',carrinhoController.show,(req, res) => {
    res.render('carrinho.ejs')

  })

//router.post("/",LoginController.index);

module.exports = router