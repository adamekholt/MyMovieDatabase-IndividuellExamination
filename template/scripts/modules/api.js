export let oData = {};

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        oData.topMovieList = await response.json();
    } catch (error) {
        console.error('Error fetching top movies:', error.message);
    }
}

export async function searchMovies(searchString) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d1248a00&s=${encodeURIComponent(searchString)}*`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        return data.Search;
    } catch (error) {
        console.error('Error with broad movie search:', error.message);
        throw error;
    }
}

export async function fetchMovieData(imdbID) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d1248a00&i=${encodeURIComponent(imdbID)}&plot=full`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const textResponse = await response.text();
        console.log('Raw response:', textResponse);

        if (textResponse.includes('"Response":"False"')) {
            console.error('Movie not found:', textResponse);
            throw new Error('Movie not found');
        }

        let data;
        try {
            data = JSON.parse(textResponse);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError.message);
            console.error('Raw response causing the error:', textResponse);
            throw new Error('Error parsing JSON');
        }

        if (data.Response === "False") {
            console.error('Movie not found:', data.Error);
            throw new Error(data.Error);
        }

        return data;
    } catch (error) {
        console.error('Error fetching movie data:', error.message);
        throw error;
    }
}
