function updateFavorites(movieTitle, card) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieIndex = favorites.findIndex(movie => movie.Title === movieTitle);

    const moviePoster = card.querySelector('img')?.src || '';
    const movieYear = card.querySelector('p')?.textContent || '';

    if (!movieTitle || !moviePoster || !movieYear) {
        console.error('Missing movie data!');
        return; 
    }

    const movieData = {
        Title: movieTitle,
        Poster: moviePoster,
        Year: movieYear
    };

    if (movieIndex !== -1) {
        favorites.splice(movieIndex, 1);
    } else {
        favorites.push(movieData);
    }


    localStorage.setItem('favorites', JSON.stringify(favorites));
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

        card.classList.toggle('favorited');
        updateFavorites(movieTitle, card);

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
