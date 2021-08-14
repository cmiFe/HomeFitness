const express = require("express");
const productController = require("../app/Controller/ProductController");
const path  = require("path")


const router = express.Router();
router.get('/', (req, res) => {
    res.render('produtos.ejs')
    //res.send("TESTE 12")
  })

router.post("/", (req,res) => {
  const produto = JSON.parse(JSON.stringify(req.body));
  req.session.idProduto = produto.id
  res.redirect('produto')
})



module.exports = router