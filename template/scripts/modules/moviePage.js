import { fetchMovieData } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
    const movieID = new URLSearchParams(window.location.search).get("id");

    if (movieID) {
        fetchMovieData(movieID)
            .then(movie => {
                if (movie?.Response === "False") {
                    document.getElementById("movie-title").textContent = "Fant ikke filmen.";
                } else {
                    document.getElementById("movie-title").textContent = movie.Title;
                    document.getElementById("movie-poster").src = movie.Poster;
                    document.getElementById("movie-poster").alt = movie.Title;
                    document.getElementById("movie-description").textContent = movie.Plot;
                    document.getElementById("movie-year").textContent = `Utgivelsesår: ${movie.Year}`;
                    document.getElementById("movie-runtime").textContent = `Varighet: ${movie.Runtime}`;
                }
            })
            .catch(error => console.error("Feil ved henting av filmdata:", error));
    }
});
