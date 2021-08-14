const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const carrinhoRouter = require("./routes/carrinho")
const contatoRouter = require("./routes/contato")
const homeRouter = require("./routes/home")
const editarCadastroRouter = require("./routes/editarCadastro")
const produtosRouter = require("./routes/produtos")
const produtoRouter = require("./routes/produto")
const cadastroProdutoRouter = require("./routes/cadastroProduto")
const loginRouter = require("./routes/login")
const profileRouter = require(("./routes/profile"))
const cadastroRouter = require("./routes/cadastro")
const session = require("express-session")
const path = require("path")
const morgan = require('morgan');
const { config } = require('process');
require("./config/connection") ;

class App {
  constructor() {
    this.app = express();
    
    this.app.set("view engine","ejs")
    
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.static(__dirname+'/public'));
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(session({secret:"secret-key", resave: false, saveUninitialized:false,cookie: {maxAge: 14400000}}))
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"))

    this.app.use((req, res, next) => {
      res.header("Access-Controll-Allow-Origin", "*");
      res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
      res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With")

      this.app.use(cors());
      next();
    })
  }

  routes() {
    
    
    this.app.use("/carrinho",carrinhoRouter);
    this.app.use("/login",loginRouter);
    this.app.use("/home",homeRouter);
    this.app.use("/editarCadastro",editarCadastroRouter);
    this.app.use("/profile",profileRouter);
    this.app.use("/",homeRouter);
    this.app.use("/contato",contatoRouter);
    this.app.use("/cadastroProduto",cadastroProdutoRouter);
    this.app.use("/produtos",produtosRouter);
    this.app.use("/produto",produtoRouter);
    this.app.use("/cadastro",cadastroRouter);
  }
}

module.exports = new App().app;