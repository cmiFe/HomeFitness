const User = require("../Models/User");


class EditorCadastroController{

    async edit(req,res,next){
        const {name,email,password} = req.body;
        var newvalues = { $set: { name:name,email:email,password:password} };
        ///const userUpdate = await User.updateOne(req.session.usuario,newvalues)

        console.log(req.body)

        res.redirect("profile")
    }
    
}


module.exports = new EditorCadastroController();