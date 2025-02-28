export function addToFavorites(movieData) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieIndex = favorites.findIndex(movie => movie.Title === movieData.Title);

    if (movieIndex === -1) {
        favorites.push(movieData);
    } else {
        favorites.splice(movieIndex, 1); 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname !== '/favorites.html') {
        const favoritesContainer = document.querySelector('#cardContainer');
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (favoritesContainer && favorites.length > 0) {
            updateFavoritesList(favorites, favoritesContainer);
        }
    }
});

function updateFavoritesList(favorites, container) {
    container.innerHTML = '';

    favorites.forEach(favorite => {
        const movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');

        const moviePoster = document.createElement('img');
        moviePoster.src = favorite.Poster;
        moviePoster.alt = `${favorite.Title} poster`;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = favorite.Title;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        container.appendChild(movieCard);
    });
}
