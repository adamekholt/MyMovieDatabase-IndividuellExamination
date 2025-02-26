export let oData = {};

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if (!response.ok) throw new Error(`HTTP-feil: ${response.status}`);

        let movies = await response.json();
        oData.topMovieList = movies;
    } catch (error) {
        console.error(error);
    }
}

export async function searchData(searchString) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d1248a00&s=${encodeURIComponent(searchString)}*`);
        if (!response.ok) throw new Error();
        
        const data = await response.json();
        if (data.Response === "False") throw new Error();

        return data;
    } catch (error) {
        console.error();
        throw error;
    }
}


