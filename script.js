// Variáveis
const form = document.querySelector("#card-form");
const listaCatalogo = document.querySelector(".lista_catalogo");
const fileInput = document.getElementById('file-input');
const labelImagem = document.querySelector('.campo_imagem');

// Funções
function adicionarCard(event) {
    event.preventDefault(); 

    const nomeFilme = document.querySelector("#movie-title").value.trim();
    const precoFilme = document.querySelector("#movie-price").value.trim();
    const imagemFilme = fileInput.files[0];

    if (!nomeFilme || !precoFilme || !imagemFilme) {
        alert("Por favor, preencha todos os campos e selecione uma imagem!");
        return;
    }

    const imagemURL = URL.createObjectURL(imagemFilme);

    const novoCard = document.createElement("div");
    novoCard.classList.add("lista_catalogo_cards");

    novoCard.innerHTML = `
        <img class="lista_cards_img" src="${imagemURL}" alt="Poster do filme ${nomeFilme}">
        <p class="lista_cards_texto">${nomeFilme}</p>
        <div class="lista_cards_campo">
            <p class="lista_cards_campo_preco">R$ ${precoFilme},00</p>
            <img class="lista_cards_campo_excluir" src="img/icons8-lixo-25 (1).png" alt="Excluir">
        </div>
    `;

    listaCatalogo.appendChild(novoCard);
    alert(`O filme "${nomeFilme}" foi adicinado ao catalogo com sucesso!`);
    form.reset();
}

function excluirCard(event) {
    if (event.target.classList.contains("lista_cards_campo_excluir")) {
        const card = event.target.closest(".lista_catalogo_cards");
        if (card) {
            card.remove();
            alert("Filme excluído com sucesso!");
        }
    }
}

function atualizarNomeArquivo(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : "Escolher imagem";
    labelImagem.textContent = fileName;
}

// Eventos
form.addEventListener("submit", adicionarCard);
listaCatalogo.addEventListener("click", excluirCard);
fileInput.addEventListener('change', atualizarNomeArquivo);
