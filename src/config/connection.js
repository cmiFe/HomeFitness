const mongoose = require("mongoose")

class Connection{
    constructor(){
        this.dataBaseConnectionMongoDB();
    }
    dataBaseConnectionMongoDB(){
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/nodejs2",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Conexão OK")
        })
        .catch((error) => {
            console.log(`Erro ao conectar ${error}`)

        })
    }
}

module.exports = new Connection();