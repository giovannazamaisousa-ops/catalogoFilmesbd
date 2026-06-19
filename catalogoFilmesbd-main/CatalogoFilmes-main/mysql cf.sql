create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table jogos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;
select * from series;
select * from jogos;

insert into filmes (titulo, imagem, descricao) values
("Meu Amigo Totoro", "https://static.wikia.nocookie.net/dublagem/images/f/f6/Meu_Amigo_Totoro.jpg/revision/latest?cb=20241127000905&path-prefix=pt-br", "Uma jornada de inocência e magia."),
("Laranja Mecânica", "https://upload.wikimedia.org/wikipedia/pt/7/73/A_Clockwork_Orange_%281971%29.png", "Um experimento de condicionamento psicológico."),
("James e o Pêssego Gigante", "https://static.wikia.nocookie.net/dublagem/images/7/72/James_e_o_p%C3%AAssego.jpeg/revision/latest?cb=20231002135627&path-prefix=pt-br", "um clássico infantil escrito por Roald Dahl."),
("Backrooms", "https://m.media-amazon.com/images/M/MV5BOWY0ZmIzZDQtZDM5Yi00ZjE0LWJhMzItNDM2OTAxOWNhZDkyXkEyXkFqcGc@._V1_.jpg", "Um Não-Lugar."),
("Mononoke", "https://a.storyblok.com/f/178900/750x1060/2c1a22a87d/mononoke-the-movie-the-ashes-of-rage-main-visual.jpg/m/filters:quality(95)format(webp)", "espíritos vingativos e folclóricos do Japão."),
("Memórias de um Caracol", "https://br.web.img3.acsta.net/c_310_420/img/34/0a/340a845eb2438cf09cdd9e2f51fe738a.jpg", "Uma tragicomédia agridoce.");

insert into series (titulo, imagem, descricao) values
("Mononoke", "https://a.storyblok.com/f/178900/1460x2064/3ad5d1829b/mononoke_the_movie_the_curse_of_the_serpent_teaser_art.jpg/m/filters:quality(95)format(webp)", "Espíritos vingativos e folclóricos do Japão."),
("Dorohedoro", "https://m.media-amazon.com/images/M/MV5BYzE2M2I0ZmYtYjMxYS00NzYzLWEzNmEtZjQ4ODhmMDNmN2MyXkEyXkFqcGc@._V1_.jpg", "Fantasia sombria."),
("A queda da casa Usher", "https://m.media-amazon.com/images/I/71tUvLm7SmL.jpg", "Uma fissura invisível que percorre pela casa."),
("Love, Death + Robots", "https://cinepop.com.br/wp-content/uploads/2022/04/love-death-and-robots-5.jpg", "Ficção científica, terror, comédia e fantasia."),
("Shadows house", "https://m.media-amazon.com/images/I/91Ip40INNHL.jpg", "Uma mansão isolada no alto de um penhasco."),
("Sonic Underground", "https://m.media-amazon.com/images/I/51Gczv9jINL._AC_UF894,1000_QL80_.jpg", "Três irmãos de sangue real que formam uma banda de rock.");

insert into jogos (titulo, imagem, descricao) values
("ULTRAKILL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKcxwXKOEsoKnr_XLjnQo0KROxF5k3Twc5A&s", "Frenético, ultraviolento e com temática retro-futurista."),
("Sonic the Hedgehog", "https://i.ytimg.com/vi/J06663Njops/maxresdefault.jpg", "O ouriço azul, conhecido pela sua velocidade supersônica e atitude rebelde."),
("Sky: Filhos da Luz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO96gKPhzlr3t09RyVLDuvtkWGTSTPxDDHeQ&s", "é um jogo de aventura em mundo aberto e MMORPG social."),
("Blasphemous", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6P-VRjLnf3ROlIOsbIflvRw1YyKIAO3khCA&s", "Exploração de mapas não lineares, com a atmosfera sombria de um Souls-like."),
("Fran Bow", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj8mKXfxNFlHJS-h3nWBcy8CPHr9w8T_4GQ&s", "Terror psicológico independente."),
("OMORI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WAFdAbwFCpi2xk1JGROMgXD37jIyz8rlcg&s", "RPG indie de terror psicológico desenvolvido pela OMOCAT.");
