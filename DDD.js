document.querySelector("#ddd").addEventListener("change", buscaAPI);
municipios = new Array();
function buscaAPI(evento){fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(res => res.json())
	.then(dados => {
		municipios = dados.cities;
		cidades();
	});
}


function cidades(){
	lista = document.querySelector('ul');
	lista.textContent = '';
	municipios.forEach(cidade =>{
		item = document.createElement('li');
		item.textContent = cidade;
		lista.append(item);
	});
}
