const User = require("../Models/User");
const yup = require("yup");
const express = require("express");
const Product = require("../Models/Product");



class CarrinhoController{
    

    async show(req,res){
        console.log(req.session.userEmail)
        const user = await User.findOne({email: req.session.userEmail});
        console.log(user.itensCarrinho)
        return res.status(200).json({
            erro:false
        })
    }
    async store(req,res){


        const schema = yup.object().shape({
            name: yup.string().required(),
            price: yup.string().required(),
            quantity: yup.string().required(),
            text: yup.string().required(),
            id: yup.string().required(),
            //img:yup.string().required()
            });
        
        console.log(req.body)
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                message: "Dados inválidos"
            })
            }
        let productExist = await Product.findOne({email:req.body.name});
            
        if (productExist){
            console.log(productExist);
            return res.status(400).json({
                error:true,
                message: "Produto ja Cadastrado"
            })
        }

        const {name,price,quantity,text,id } = req.body;
        const data = {name,price,quantity,text,id}
        //data.password = await bcrypt.hash(data.password,8)


        await  Product.create(data,(err) =>{
            if(err){
                return res.status(400).json({
                    error:true,
                    message: "Error ao tentar cadastrar usuario"
                })
            }
            return res.status(200).json({
                error:false,
                message: "Produto cadastrado com sucesso"
            })

        })

    }
    }


module.exports = new CarrinhoController();