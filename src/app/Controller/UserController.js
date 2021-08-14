const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const yup = require("yup");

class UserController{
    
    async show(req,res){
        user = await User.findOne(req.body.email);
        //var user = ["kaio","larissa","Denver"]
        console.log(user)
        return res.status(200).json({
            erro:false,
            users
        })
    }
    async store(req,res,next){

        
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, 'A senha precisa ter no minimo 6 caracteres').required()
            });
        
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                message: "Dados inválidos"
            })
            }
        let userExist = await User.findOne({email:req.body.email});
            
        if (userExist){
            console.log(userExist);
            return res.status(400).json({
                error:true,
                message: "Usuario ja Cadastrado"
            })
        }

        const {name,email,password } = req.body;
        const data = {name,email,password}
        data.password = await bcrypt.hash(data.password,8)


        await  User.create(data,(err) =>{
            if(err){
                return res.status(400).json({
                    error:true,
                    message: "Error ao tentar cadastrar usuario"
                })
            }
            /*return res.status(200).json({
                error:false,
                message: "Usuario cadastrado com sucesso"
            })*/

            next();


        })

    }
    }


module.exports = new UserController();