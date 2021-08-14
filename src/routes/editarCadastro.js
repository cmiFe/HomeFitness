const express = require("express");
const editorCadastroController = require("../app/Controller/EditorCadastroController");


const router = express.Router();
router.get('/', (req, res) => {
    const usuario = req.session.usuario
    res.render('editarCadastro.ejs',{user:usuario})
  })

router.post("/",editorCadastroController.edit);


module.exports = router