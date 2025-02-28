export let oData = {};

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if (!response.ok) throw new Error(`HTTP-feil: ${response.status}`);

        oData.topMovieList = await response.json();
    } catch (error) {
        console.error('Feil ved henting av toppfilmer:', error.message);
    }
}

export async function searchMovies(searchString) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d1248a00&s=${encodeURIComponent(searchString)}`);
        if (!response.ok) throw new Error(`HTTP-feil: ${response.status}`);

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        return data.Search;
    } catch (error) {
        console.error('Feil ved bredt søk av film:', error.message);
        throw error;
    }
}

export async function fetchMovieData(imdbID) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d1248a00&i=${encodeURIComponent(imdbID)}&plot=full`);
        if (!response.ok) throw new Error(`HTTP-feil: ${response.status}`);

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        return data;
    } catch (error) {
        console.error('Feil ved henting av filmdata:', error.message);
        throw error;
    }
}
