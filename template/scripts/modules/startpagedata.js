import { renderTrailers } from './caroussel.js';
import { fetchTopMovies, oData } from './api.js';

async function movies() {
    // Sjekk at vi er på startsiden før vi prøver å vise trailers og filmkort
    if (document.body.classList.contains('startpage')) {
        await fetchTopMovies(); 
        displayRandomTrailers();
        displayTopMovies();
    }
}

function displayRandomTrailers() {
    // Sjekk at vi er på startsiden og containeren for trailere eksisterer
    const trailerContainer = document.querySelector('.trailers__container');
    if (!trailerContainer) {
        console.error("Containeren for trailere finnes ikke.");
        return;
    }

    if (!oData.topMovieList || oData.topMovieList.length === 0) {
        console.error("No top movies available.");
        return;
    }

    let shuffledMovies = [...oData.topMovieList].sort(() => 0.5 - Math.random());
    let randomTrailer = shuffledMovies.slice(0, 5);

    randomTrailer.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    });
}

function displayTopMovies() {
    // Sjekk at vi er på startsiden før vi prøver å vise movie cards
    const container = document.getElementById('cardContainer');
    if (!container) {
        console.error('Containeren for movie cards finnes ikke.');
        return;
    }

    if (!oData.topMovieList || oData.topMovieList.length === 0) {
        console.error("No top movies available.");
        return;
    }

    oData.topMovieList.slice(0, 20).forEach(movie => {
        const movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');

        const movieLink = document.createElement('a');
        movieLink.href = `movie.html?id=${movie.imdbID}`;

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.Poster;
        moviePoster.alt = `${movie.Title} poster`;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.Title;

        movieLink.appendChild(moviePoster);
        movieLink.appendChild(movieTitle);
        movieCard.appendChild(movieLink);
        container.appendChild(movieCard);
    });
}

// Kall funksjonen ved onload
window.onload = movies;
