const express = require("express");
var Produto = require('../app/Models/Product');
const path  = require("path")


const router = express.Router();
router.get('/', async (req, res) => {
    const id_produto = req.session.idProduto
    console.log(id_produto)
    var produto = await Produto.find({id:id_produto})
    console.log(produto)
    if (produto){
      produto = produto[0]
      res.render('produto.ejs',{produto})}
    
  })



module.exports = router