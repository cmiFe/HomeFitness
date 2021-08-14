const { Router } = require("express");
const LoginController = require("../app/Controller/LoginController");
const UserController = require("../app/Controller/UserController");
const AuthMidleware = require("../app/Midlewares/AuthMidleware")


const routes = new Router();

routes.post("/",UserController.store);
routes.get("/",AuthMidleware,UserController.show);







module.exports = routes;
