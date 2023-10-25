// tres constantes para referenciar as "ITEM" divs Projetos
const albumFotos = document.getElementById('albumFotos');  
// "const" = Escopo Global - boa pratica é "declar" variavel
const casamento = document.getElementById('casamento');
const buffet = document.getElementById('buffet');

const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamento = document.querySelector('.movieCasamento');
const movieBuffet = document.querySelector('.movieBuffet');


// evento de click
albumFotos.addEventListener("click",() => {
    albumFotos.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});
casamento.addEventListener("click",() => {
    casamento.classList.toggle('active');
    movieCasamento.classList.toggle('active');
});
buffet.addEventListener("click",() => {
    buffet.classList.toggle('active');
    movieBuffet.classList.toggle('active');
});