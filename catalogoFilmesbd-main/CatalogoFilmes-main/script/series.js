const series = [{
    titulo: "Mononoke",
    imagem: "https://a.storyblok.com/f/178900/1460x2064/3ad5d1829b/mononoke_the_movie_the_curse_of_the_serpent_teaser_art.jpg/m/filters:quality(95)format(webp)",
    descricao: "Espíritos vingativos e folclóricos do Japão.",
},
{
    titulo: "Dorohedoro",
    imagem: "https://m.media-amazon.com/images/M/MV5BYzE2M2I0ZmYtYjMxYS00NzYzLWEzNmEtZjQ4ODhmMDNmN2MyXkEyXkFqcGc@._V1_.jpg",
    descricao: "Fantasia sombria.",
},
{
    titulo: "A queda da casa Usher",
    imagem: "https://m.media-amazon.com/images/I/71tUvLm7SmL.jpg",
    descricao: "Uma fissura invisível que percorre pela casa. ",
},
{
    titulo: "Love, Death + Robots",
    imagem: "https://cinepop.com.br/wp-content/uploads/2022/04/love-death-and-robots-5.jpg",
    descricao: "Ficção científica, terror, comédia e fantasia. ",
},
{
    titulo: "Shadows house",
    imagem: "https://m.media-amazon.com/images/I/91Ip40INNHL.jpg",
    descricao: "Uma mansão isolada no alto de um penhasco.",
},
{
    titulo: "Sonic Underground",
    imagem: "https://m.media-amazon.com/images/I/51Gczv9jINL._AC_UF894,1000_QL80_.jpg",
    descricao: "Três irmãos de sangue real que formam uma banda de rock.",
}
]

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML
    lista.forEach(series => {
        listaSeries.innerHTML += `<div class="col-md-4">
          <div class="card card-series h-100">
          <img src="${series.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${series.titulo}</h3>
          <p>${series.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes(' ${series.descricao}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarSeries(series)
function verDetalhes(descricao) {
    Swal.fire({
        text: descricao,
        icon: "info"
    })
}