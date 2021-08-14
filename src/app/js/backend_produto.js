class PegaId{
    retornaId(){
        id = localStorage.getItem("idProduto")
        console.log(id)
    }
}


module.exports = new PegaId();
