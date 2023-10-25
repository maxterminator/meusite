// tres constantes para referenciar as "ITEM" divs Projetos

const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamento = document.querySelector('.movieCasamentos');
const movieBuffet = document.querySelector('.movieBuffet');

album.addEventListener("click", () => {
    //albumFotos.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});
casamentos.addEventListener("click", () => {
    //casamentos.classList.toggle('active');
    movieCasamento.classList.toggle('active');
});
buffet.addEventListener("click", () => {
    //buffet.classList.toggle('active');
    movieBuffet.classList.toggle('active');
});