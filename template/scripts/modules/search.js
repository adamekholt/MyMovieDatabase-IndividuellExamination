import { searchData } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("cardContainer");
    const searchQuery = new URLSearchParams(window.location.search).get("query");

    document.getElementById("searchForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    });

    if (searchQuery && resultsContainer) {
        searchData(searchQuery)
            .then((data) => {
                resultsContainer.innerHTML = "";
                if (data.Response === "True") {
                    for (let movie of data.Search) {
                        let movieCard = document.createElement("article");
                        movieCard.classList.add("movie-card");

                        let movieLink = document.createElement("a");
                        movieLink.href = `movie.html?id=${movie.imdbID}`;

                        let movieImg = document.createElement("img");
                        movieImg.src = movie.Poster !== "N/A" ? movie.Poster : './res/no-image.png';
                        movieImg.alt = movie.Title;

                        let movieTitle = document.createElement("h3");
                        movieTitle.textContent = `${movie.Title} (${movie.Year})`;

                        movieLink.appendChild(movieImg);
                        movieLink.appendChild(movieTitle);
                        movieCard.appendChild(movieLink);
                        resultsContainer.appendChild(movieCard);
                    }
                } else {
                    resultsContainer.innerHTML = "<p>Vi kunne ikke finne noen filmer som passer søket ditt.</p>";
                }
            })
            .catch(() => {
                resultsContainer.innerHTML = "<p>Beklager, vi kunne ikke hente filmene. Vennligst prøv igjen senere.</p>";
            });
    }
});
