import { renderTrailers } from './caroussel.js';
import { fetchTopMovies, oData } from './api.js';

async function movies() {
    if (document.body.classList.contains('startpage')) {
        await fetchTopMovies(); 
        displayRandomTrailers();
        displayTopMovies();
    }
}

function displayRandomTrailers() {
    const trailerContainer = document.querySelector('.trailers__container');
    if (!trailerContainer || !oData.topMovieList?.length) return;

    [...oData.topMovieList]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .forEach(renderTrailers);
}

function displayTopMovies() {
    const container = document.getElementById('cardContainer');
    if (!container || !oData.topMovieList?.length) return;

    oData.topMovieList.slice(0, 20).forEach(movie => {
        const movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <a href="movie.html?id=${movie.imdbID}">
                <img src="${movie.Poster}" alt="${movie.Title} poster">
                <h3>${movie.Title}</h3>
            </a>
        `;
        container.appendChild(movieCard);
    });
}

window.onload = movies;
