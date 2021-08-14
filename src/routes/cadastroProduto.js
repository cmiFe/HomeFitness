const express = require("express");
const productController = require("../app/Controller/ProductController")





const router = express.Router();
router.get('/', (req, res) => {
    res.render('cadastroProduto.ejs')
  })

router.post("/",productController.store);





module.exports = router