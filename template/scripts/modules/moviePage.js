import { searchMovies, fetchMovieData } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("cardContainer");
    const searchQuery = new URLSearchParams(window.location.search).get("query");
    const movieID = new URLSearchParams(window.location.search).get("id");

    document.getElementById("searchForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    });

    if (searchQuery && resultsContainer) {
        searchMovies(searchQuery)
            .then(movies => {
                resultsContainer.innerHTML = movies.length ? movies.map(movie => `
                    <article class="movie-card">
                        <a href="movie.html?id=${movie.imdbID}">
                            <img src="${movie.Poster !== "N/A" ? movie.Poster : './res/no-image.png'}" alt="${movie.Title}">
                            <h3>${movie.Title} (${movie.Year})</h3>
                        </a>
                    </article>`).join('') 
                    : "<p>No movies found.</p>";
            })
            .catch(() => {
                resultsContainer.innerHTML = "<p>Sorry, we couldn't fetch the movies. Please try again later.</p>";
            });
    }

    if (movieID) {
        fetchMovieData(movieID)
            .then(movie => {
                document.getElementById("movie-title").textContent = movie?.Response === "False" ? "Movie not found." : movie.Title;
                if (movie?.Response !== "False") {
                    document.getElementById("movie-poster").src = movie.Poster;
                    document.getElementById("movie-poster").alt = movie.Title;
                    document.getElementById("movie-description").textContent = movie.Plot;
                    document.getElementById("movie-year").textContent = `Release Year: ${movie.Year}`;
                    document.getElementById("movie-runtime").textContent = `Duration: ${movie.Runtime}`;
                }
            })
            .catch(error => console.error("Error fetching movie data:", error));
    }
});
