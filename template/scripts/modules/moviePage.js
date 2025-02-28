import { searchData } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieID = urlParams.get("id");

    if (movieID) {
        searchData(movieID)
            .then(displayMovieDetails)
            .catch(error => console.error("Feil ved henting av filmdata:", error));
    }
});

function displayMovieDetails(movie) {
    if (!movie || movie.Response === "False") {
        document.searchData("movieDetails").innerHTML = "<p>Fant ikke filmen.</p>";
        return;
    }

    document.searchData("movieTitle").textContent = movie.Title;
    document.searchData("moviePoster").src = movie.Poster;
    document.searchData("moviePoster").alt = movie.Title;
    document.searchData("moviePlot").textContent = movie.Plot;
    document.searchData("movieYear").textContent = `Utgivelsesår: ${movie.Year}`;
    document.searchData("movieGenre").textContent = `Sjanger: ${movie.Genre}`;
    document.searchData("movieRating").textContent = `IMDb-rating: ${movie.imdbRating}`;
}
