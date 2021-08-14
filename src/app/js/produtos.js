
window.onload = initPage;

function initPage() {
    var name = Produto1.name;
    var preco = Produto1.preco;
    var desconto = Produto1.desconto;

    var name2 = Produto2.name2;
    var preco2 = Produto2.preco2;
    var desconto2 = Produto2.desconto2;
		
    document.getElementById(
        'nome1').innerHTML = name;
    document.getElementById(
        'preco1').innerHTML = preco;
    document.getElementById(
        'desconto1').innerHTML = desconto;

    document.getElementById(
        'nome2').innerHTML = name2;
    document.getElementById(
        'preco2').innerHTML = preco2;
    document.getElementById(
        'desconto2').innerHTML = desconto2;
    
}
var Produto1 =
	{
	    name : "Bolsa Boa",
	    preco : 'R$: 100',
	    desconto : "10%",
	    
	};

var Produto2 =
    {
        name2 : "Bolsa Bonita",
        preco2 : 'R$: 110',
        desconto2 : "20%",
        
    };



