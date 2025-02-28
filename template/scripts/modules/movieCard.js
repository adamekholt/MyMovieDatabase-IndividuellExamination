import { addToFavorites } from './favorites.js'; 

function updateFavorites(movieTitle, card) {
    const moviePoster = card.querySelector('img')?.src || '';
    const movieYear = card.querySelector('p')?.textContent || '';

    if (!movieTitle) {
        console.log("Movie title is missing!");
        return;
    }

    const movieData = {
        Title: movieTitle,
        Poster: moviePoster,
        Year: movieYear
    };

    addToFavorites(movieData);
}

document.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const container = document.getElementById('cardContainer');
    
    if (!container) return;

    container.addEventListener('click', (event) => {
        const card = event.target.closest('.movie-card');
        if (!card) return;

        const movieTitle = card.querySelector('h3')?.textContent.trim();
        if (!movieTitle) return;

        card.classList.toggle('favorited');  // Toggles the 'favorited' class
        updateFavorites(movieTitle, card);  // Oppdater favorittene

        const movieID = card.dataset.imdbId; 
        if (movieID) {
            window.location.href = `movie.html?id=${movieID}`; 
        }
    });

    setTimeout(() => {
        document.querySelectorAll('.movie-card').forEach(card => {
            const movieTitle = card.querySelector('h3')?.textContent.trim();
            if (favorites.some(movie => movie.Title === movieTitle)) {
                card.classList.add('favorited');
            }
        });
    }, 1000);
});
