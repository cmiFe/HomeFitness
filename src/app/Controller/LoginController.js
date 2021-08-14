const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require("../../config/auth")


class LoginController{
    async index(req,res,next){
        const {email,password} = req.body;

        const userExist = await User.findOne({email})
        if(!userExist){
            return res.status(400).json({
                error:true,
                message: "Usuario não existe"
            })
        }
        if(!(await bcrypt.compare(password,userExist.password))){
            return res.status(400).json({
                error:true,
                message: "Usuario não existe"})


        }

        req.session.usuario = {name:userExist.name,email:userExist.email,password:password}
        
        next();
            /*res.status(200).json({
            user:{
                name:userExist.name,
                email:userExist.email,
            },
            token: jwt.sign({
                id:userExist._id
            },config.secret,{
                expiresIn:config.expireIn
            }),

        })*/
        }
        


}

module.exports = new LoginController();