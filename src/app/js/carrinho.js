let carrinho = document.querySelectorAll(".add-carrinho");

 
for (let i = 0;carrinho.length;i++){
	carrinho[i].addEventListener("click", () => {

	numeroItens();
	})
}


function loadNumero(){
	let numero_itens = localStorage.getItem('numeroItens');
	if (numero_itens){
		document.querySelector('.product-quantity span').textContent = numero_itens;
	} 
}


function numeroItens(){
	let numero_itens = localStorage.getItem('numeroItens');
	numero_itens = parseInt(numero_itens);
	if (numero_itens) {
		localStorage.setItem("numeroItens", numero_itens + 1);
		document.querySelector('.product-quantity span').textContent = toString(numero_itens + 1);
	}
	else{
		localStorage.setItem("numeroItens", 1);
		document.querySelector('.product-quantity span').textContent = 1;
	}
	
	
}

loadNumero();