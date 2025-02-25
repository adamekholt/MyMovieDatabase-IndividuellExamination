import { renderTrailers } from './caroussel.js';
import { fetchTopMovies, oData } from './api.js';

async function movies() {
    await fetchTopMovies(); 
    displayRandomTrailers();
    displayTopMovies(); 
}

//viser trailere
function displayRandomTrailers() {
    if (!oData.topMovieList || oData.topMovieList.length === 0) {
        console.error("");
        return;
    }

    let shuffledMovies = [...oData.topMovieList].sort(() => 0.5 - Math.random());
    let randomTrailer = shuffledMovies.slice(0, 5);

    randomTrailer.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    });
}
//viser topplisten
function displayTopMovies() {
    if (!oData.topMovieList || oData.topMovieList.length === 0) {
    return;
    }

    const container = document.getElementById('cardContainer');
    if (!container) {
        return;
    }

    oData.topMovieList.slice(0, 20).forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');  // Legger til en klasse for CSS-styling

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.Poster;
        moviePoster.alt = `${movie.Title} poster`;
        
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.Title;
        
        const movieYear = document.createElement('p');
        movieYear.textContent = movie.Year;

        const movieRating = document.createElement('p');
        movieRating.textContent = `IMDB Rating: ${movie.Rating}`;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);

        container.appendChild(movieCard);
    });
}

window.onload = movies;
