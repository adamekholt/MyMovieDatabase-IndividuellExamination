import { searchMovies } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("cardContainer");
    const searchQuery = new URLSearchParams(window.location.search).get("query");

    document.getElementById("searchForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    });

    if (!searchQuery || !resultsContainer) return;

    searchMovies(searchQuery)
        .then(movies => {
            resultsContainer.innerHTML = movies.length ? movies.map(movie => `
                <article class="movie-card">
                    <a href="movie.html?id=${movie.imdbID}">
                        <img src="${movie.Poster !== "N/A" ? movie.Poster : './res/no-image.png'}" alt="${movie.Title}">
                        <h3>${movie.Title} (${movie.Year})</h3>
                    </a>
                </article>`).join('') 
                : "<p>Ingen filmer funnet.</p>";
        })
        .catch(() => {
            resultsContainer.innerHTML = "<p>Beklager, vi kunne ikke hente filmene. Prøv igjen senere.</p>";
        });
});
