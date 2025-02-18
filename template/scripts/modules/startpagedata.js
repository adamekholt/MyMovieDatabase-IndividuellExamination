import { renderTrailers } from './caroussel.js';

const movie = [
    {
        "Title": "Forgetting Sarah Marshall",
        "imdbID": "tt0800039",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/K4xD8ZMdJms"
    },
    {
        "Title": "Interstellar",
        "imdbID": "tt0816692",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        "Title": "Knives Out",
        "imdbID": "tt8946378",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/sL-9Khv7wa4"
    },
    {
        "Title": "LOTR: The Fellowship of the Ring",
        "imdbID": "tt0120737",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/V75dMMIW2B4"
    },
    {
        "Title": "LOTR: The Two Towers",
        "imdbID": "tt0167261",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/LbfMDwc4azU"
    },
    {
        "Title": "LORT: The Return of the King",
        "imdbID": "tt0167260",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/y2rYRu8UW8M"
    },
    {
        "Title": "Paterson",
        "imdbID": "tt5247022",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzODA4Nzk0OF5BMl5BanBnXkFtZTgwNzE1MDIwMDI@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/uW0Mr5uyG5w"
    },
    {
        "Title": "Finch",
        "imdbID": "tt3420504",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjhhMGVkN2MtNDA3OC00M2E5LTg3ODYtZGJiNmIwNmQwMWYyXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/loJC5ULaAc0"
    },
    {
        "Title": "Inception",
        "imdbID": "tt1375666",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        "Title": "Into the Wild",
        "imdbID": "tt0758758",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTgwZTJhNWMtNzVjMy00YzQzLWI4MTAtYmJhOGQ5ZmQ3MDM0XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/g7ArZ7VD-QQ"
    },
    {
        "Title": "Pulp Fiction",
        "imdbID": "tt0110912",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        "Title": "Avatar",
        "imdbID": "tt0499549",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/5PSNL1qE6VY"
    },
    {
        "Title": "Toy Story",
        "imdbID": "tt0114709",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/v-PjgYDrg70"
    },
    {
        "Title": "Game of Thrones",
        "imdbID": "tt0944947",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/gcTkNV5Vg1E"
    },
    {
        "Title": "Snatch",
        "imdbID": "tt0208092",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzk5NjJkMTQtN2IyNC00YWM5LTlhZmMtNGI3MWNhMTU1YTc4XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/ni4tEtuTccc"
    },
    {
        "Title": "Spirited Away",
        "imdbID": "tt0245429",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/ByXuk9QqQkk"
    },
    {
        "Title": "The Wolf of Wall Street",
        "imdbID": "tt0993846",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/iszwuX1AK6A"
    },
    {
        "Title": "The Godfather",
        "imdbID": "tt0068646",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        "Title": "Pan's Labyrinth",
        "imdbID": "tt0457430",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTc1NTAxMWItMWFlNy00MmU2LTkwMTMtNzMwOTg5OTQ5YTFiXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/EqYiSlkvRuw"
    },
    {
        "Title": "The Truman Show",
        "imdbID": "tt0120382",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/loTIzXAS7v4"
    },
    {
        "Title": "Whiplash",
        "imdbID": "tt2582802",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/7d_jQycdQGo"
    },
    {
        "Title": "Harry Potter and the Prisoner of Azkaban",
        "imdbID": "tt0304141",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/lAxgztbYDbs"
    },
    {
        "Title": "Groundhog Day",
        "imdbID": "tt0107048",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/tSVeDx9fk60"
    },
    {
        "Title": "The Dark Knight",
        "imdbID": "tt0468569",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        "Title": "Titanic",
        "imdbID": "tt0120338",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/LuPB43YSgCs"
    },
    {
        "Title": "Gladiator",
        "imdbID": "tt0172495",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/P5ieIbInFpg"
    },
    {
        "Title": "Se7en",
        "imdbID": "tt0114369",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/znmZoVkCjpI"
    },
    {
        "Title": "Escape from New York",
        "imdbID": "tt0082340",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzMTY0Nzg0MV5BMl5BanBnXkFtZTgwMDU3MzQxMDE@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/10OoccK7dIw"
    },
    {
        "Title": "300",
        "imdbID": "tt0416449",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/UrIbxk7idYA"
    },
    {
        "Title": "Heat",
        "imdbID": "tt0113277",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/0xbBLJ1WGwQ"
    },
    {
        "Title": "Inglorious Basterds",
        "imdbID": "tt0361748",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/KnrRy6kSFF0"
    },
    {
        "Title": "The Squid and the Whala",
        "imdbID": "tt0367089",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmRkNmRiMDQtOWJmZS00OWQ0LThlZDQtNDRkYmEzMjQyZGZjXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/R1alHcMtnr0"
    },
    {
        "Title": "Grave of the Fireflies",
        "imdbID": "tt0095327",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/4vPeTSRd580"
    },
    {
        "Title": "Bubble",
        "imdbID": "tt16360006",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWNkMzk0M2QtMTUyZi00OTE2LTkxZmMtYTYxNmYyN2IyMzg5XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/8pbWblLkHHk"
    },
    {
        "Title": "The Prestige",
        "imdbID": "tt0482571",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/ELq7V8vkekI"
    },
    {
        "Title": "Event Horizon",
        "imdbID": "tt0119081",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2M4ZTI2MjMtYjVlNy00Y2E3LTgzM2EtNDA0NTUzZmQxZjY3XkEyXkFqcGc@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/pCtk3KN_ylM"
    },
    {
        "Title": "Samsara",
        "imdbID": "tt0770802",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjY3NzM4MTI5NF5BMl5BanBnXkFtZTcwMjk3NTA5Nw@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/HCkEILshUyU"
    },
    {
        "Title": "Ratatouille",
        "imdbID": "tt0382932",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        "Trailer_link": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];

function displayRandomTrailers() {
    let randomTrailer = [];
    while (randomTrailer.length < 5) {
        let randomIndex = Math.floor(Math.random() * movie.length);
        if (!randomTrailer.includes(movie[randomIndex])) {
            randomTrailer.push(movie[randomIndex]);
        }
    }
    randomTrailer.forEach((movie, index) => {
        renderTrailers(movie, index + 1);  
    });
}

window.onload = displayRandomTrailers;
