const filmes = [{
    titulo: "Meu Amigo Totoro",
    imagem: "https://static.wikia.nocookie.net/dublagem/images/f/f6/Meu_Amigo_Totoro.jpg/revision/latest?cb=20241127000905&path-prefix=pt-br",
    descricao: "Uma jornada de inocência e magia.",
},
{
    titulo: "Laranja Mecânica",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/73/A_Clockwork_Orange_%281971%29.png",
    descricao: "Um experimento de condicionamento psicológico.",
},
{
    titulo: "James e o Pêssego Gigante",
    imagem: "https://static.wikia.nocookie.net/dublagem/images/7/72/James_e_o_p%C3%AAssego.jpeg/revision/latest?cb=20231002135627&path-prefix=pt-br",
    descricao: "um clássico infantil escrito por Roald Dahl.",
},
{
    titulo: "Backrooms",
    imagem: "https://m.media-amazon.com/images/M/MV5BOWY0ZmIzZDQtZDM5Yi00ZjE0LWJhMzItNDM2OTAxOWNhZDkyXkEyXkFqcGc@._V1_.jpg",
    descricao: "Um Não-Lugar.",
},
{
    titulo: "Mononoke",
    imagem: "https://a.storyblok.com/f/178900/750x1060/2c1a22a87d/mononoke-the-movie-the-ashes-of-rage-main-visual.jpg/m/filters:quality(95)format(webp)",
    descricao: "espíritos vingativos e folclóricos do Japão.",
},
{
    titulo: "Memórias de um Caracol",
    imagem:"https://br.web.img3.acsta.net/c_310_420/img/34/0a/340a845eb2438cf09cdd9e2f51fe738a.jpg",
    descricao: "Uma tragicomédia agridoce.",
}
]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML
    lista.forEach(filme => {
        listaFilmes.innerHTML += `<div class="col-md-4">
          <div class="card card-filme h-100">
          <img src="${filme.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${filme.descricao}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarFilmes(filmes)
function verDetalhes(descricao) {
    Swal.fire({
        text: descricao,
        icon: "info"
    })
}