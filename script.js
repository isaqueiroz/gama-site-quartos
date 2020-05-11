const dadosURL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const divCardsRes = document.querySelector("#cards-res");
const divResumoRes = document.querySelector("#resumo-res");

async function buscaDados(){
	return await fetch(dadosURL)
				 .then( async (response) => await response.json());
}

function tratarDados(dados){
	divCardsRes.innerHTML = "";
	dados.map(montarCard);
}

function montarCard(card){
	const div = document.createElement("div");
	div.innerHTML = `
	<div class="card" style="width: 18rem;">
	  <img src="${card.photo}" class="card-img-top" alt="${card.name}">
	  <div class="card-body">
		<p class="card-text">Tipo: ${card.property_type}</p>
		<h5 class="card-title">${card.name}</h5>
		<p class="card-text">Preço: R$${card.price}</p>
	  </div>
	</div>
	`;
	divCardsRes.appendChild(div);
}

async function main(){
	dados = await buscaDados();
	
	let qtdItens = dados.length;
	divResumoRes.innerHTML = `Encontradas ${qtdItens} acomodações`;
	
	tratarDados(dados);
	
}

main();