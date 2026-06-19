const jogos = [{
    titulo: "ULTRAKILL",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKcxwXKOEsoKnr_XLjnQo0KROxF5k3Twc5A&s",
    descricao: " Frenético, ultraviolento e com temática retro-futurista.",
},
{
    titulo: "Sonic the Hedgehog",
    imagem: "https://i.ytimg.com/vi/J06663Njops/maxresdefault.jpg",
    descricao: " O ouriço azul, conhecido pela sua velocidade supersônica e atitude rebelde.",
},
{
    titulo: "Sky: Filhos da Luz",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO96gKPhzlr3t09RyVLDuvtkWGTSTPxDDHeQ&s",
    descricao: "é um jogo de aventura em mundo aberto e MMORPG social. ",
},
{
    titulo: "Blasphemous",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6P-VRjLnf3ROlIOsbIflvRw1YyKIAO3khCA&s",
    descricao: "Exploração de mapas não lineares, com a atmosfera sombria de um Souls-like. ",
},
{
    titulo: "Fran Bow",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj8mKXfxNFlHJS-h3nWBcy8CPHr9w8T_4GQ&s",
     descricao: "Terror psicológico independente.",
},
{
    titulo: "OMORI",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WAFdAbwFCpi2xk1JGROMgXD37jIyz8rlcg&s",
    descricao: " RPG indie de terror psicológico desenvolvido pela OMOCAT.",
}
]

const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML
    lista.forEach(jogos => {
        listaJogos.innerHTML += `<div class="col-md-4">
          <div class="card card-jogos h-100">
          <img src="${jogos.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${jogos.titulo}</h3>
          <p>${jogos.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${jogos.descricao}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarJogos(jogos)
function verDetalhes(descricao) {
    Swal.fire({
        text: descricao,
        icon: "info"
    })
}