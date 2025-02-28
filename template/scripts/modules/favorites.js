export function addToFavorites(movieData) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieIndex = favorites.findIndex(movie => movie.Title === movieData.Title);

    if (movieIndex === -1) {
        favorites.push(movieData);
    } else {
        favorites.splice(movieIndex, 1); 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    if (document.getElementById('favorites-list')) {
        updateFavoritesList();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.getElementById('favorites-list');

    if (!favoritesContainer) {
        console.log("Not on favorites page. Skipping UI update.");
        return;  
    }

    updateFavoritesList();
});


function updateFavoritesList(favorites) {
    const favoritesContainer = document.querySelector('#favorites-list');
    
    // Tøm eksisterende innhold før oppdatering
    favoritesContainer.innerHTML = '';

    favorites.forEach(favorite => {
        // Hvis år er tomt, sett til 'Unknown'
        const movieYear = favorite.Year || 'Unknown';

        const movieItem = document.createElement('div');
        movieItem.classList.add('favorite-movie');
        
        movieItem.innerHTML = `
            <h3>${favorite.Title}</h3>
            <img src="${favorite.Poster}" alt="${favorite.Title}">
            <p>Year: ${movieYear}</p>
        `;

        favoritesContainer.appendChild(movieItem);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.querySelector('#favorites-list');

    if (!favoritesContainer) {
        console.error("Favorites container not found!");
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    console.log("Favorites data from localStorage:", favorites);

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }

    updateFavoritesList(favorites);
});

