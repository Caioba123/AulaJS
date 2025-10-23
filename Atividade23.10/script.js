// Array de notícias (simulando um banco de dados)
const noticias = [
    { clube: "Náutico", titulo: "Náutico vence clássico dos Aflitos", conteudo: "Em um jogo emocionante, o Náutico venceu o rival..." },
    { clube: "Santa Cruz", titulo: "Santa Cruz anuncia novo reforço", conteudo: "O Tricolor anunciou hoje a contratação do atacante..." },
    { clube: "Sport", titulo: "Sport busca recuperação na Série B", conteudo: "O Leão enfrenta um momento de desafios e precisa..." },
    { clube: "Náutico", titulo: "Náutico projeta temporada", conteudo: "A diretoria planeja reforços e melhorias para a temporada..." },
    { clube: "Santa Cruz", titulo: "Santa Cruz vence fora de casa", conteudo: "Em partida fora de casa, o Santa Cruz conquistou..." },
    { clube: "Sport", titulo: "Sport anuncia renovação de contrato", conteudo: "O Sport anunciou hoje a renovação de contrato do..." },
];

// Função para exibir notícias
function mostrarNoticias(filtro = "Todos") {
    const container = document.getElementById("news");
    container.innerHTML = "";

    let filtradas = noticias;
    if (filtro !== "Todos") {
        filtradas = noticias.filter(n => n.clube === filtro);
    }

    filtradas.forEach(n => {
        const div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = `<h3>${n.titulo} - ${n.clube}</h3><p>${n.conteudo}</p>`;
        container.appendChild(div);
    });
}

// Função para filtrar notícias por botão
function filtrar(event) {
    mostrarNoticias(event.target.dataset.club);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    mostrarNoticias();

    const buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(btn => btn.addEventListener("click", filtrar));
});
