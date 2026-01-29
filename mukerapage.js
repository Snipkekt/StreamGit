const allMovie = [
    { title: "The Chosen", thumb: "image/MovieThumbs/The Chosen.jpg", categories: ["series", "trending"] },
    { title: "Inception", thumb: "image/MovieThumbs/Inception.jpg", categories: ["movie"] },
    { title: "Soul", thumb: "image/MovieThumbs/Soul.jpg", categories: ["animation", "trending"] },
    { title: "Interstellar", thumb: "image/MovieThumbs/Interstellar.jpg", categories: ["movie", "trending"] },
    { title: "Coco", thumb: "image/MovieThumbs/Coco.jpg", categories: ["animation"] },
    { title: "The Dark Knight", thumb: "image/MovieThumbs/The Dark Knight.jpg", categories: ["movie"] },
    { title: "Gladiator", thumb: "image/MovieThumbs/Gladiator.jpg", categories: ["movie"] },
    { title: "Raya and the Last Dragon", thumb: "image/MovieThumbs/Raya and the Last Dragon.jpg", categories: ["animation"] },
    { title: "Avengers Endgame", thumb: "image/MovieThumbs/Avengers Endgame.jpg", categories: ["movie", "trending"] },
    { title: "Titanic", thumb: "image/MovieThumbs/Titanic.jpg", categories: ["movie"] },
    { title: "Encanto", thumb: "image/MovieThumbs/Encanto.jpg", categories: ["animation"] },
    { title: "The Matrix", thumb: "image/MovieThumbs/The Matrix.jpg", categories: ["movie"] },
    { title: "Jurassic Park", thumb: "image/MovieThumbs/Jurassic Park.jpg", categories: ["movie"] },
    { title: "Frozen II", thumb: "image/MovieThumbs/Frozen II.jpg", categories: ["animation"] },
    { title: "The Lion King", thumb: "image/MovieThumbs/The Lion King.jpg", categories: ["animation"] },
    { title: "Moana", thumb: "image/MovieThumbs/Moana.jpg", categories: ["animation"] },
    { title: "Avatar", thumb: "image/MovieThumbs/Avatar.jpg", categories: ["movie", "trending"] },
    { title: "Pirates of the Caribbean", thumb: "image/MovieThumbs/Pirates of the Caribbean.jpg", categories: ["movie"] },
    { title: "Harry Potter <br>and <br>the Sorcerers Stone", thumb: "image/MovieThumbs/Harry Potter and the Sorcerers Stone.jpg", categories: ["movie"] },
    { title: "The Lord of the Rings <br>The Fellowship of the Ring", thumb: "image/MovieThumbs/The Lord of the Rings The Fellowship of the Ring.jpg", categories: ["movie"] },
    { title: "Big Hero 6", thumb: "image/MovieThumbs/Big Hero 6.jpg", categories: ["animation"] },
    { title: "Forrest Gump", thumb: "image/MovieThumbs/Forrest Gump.jpg", categories: ["movie"] },
    { title: "The Godfather", thumb: "image/MovieThumbs/The Godfather.jpg", categories: ["movie"] },
    { title: "Pulp Fiction", thumb: "image/MovieThumbs/Pulp Fiction.jpg", categories: ["movie"] },
    { title: "The Avengers", thumb: "image/MovieThumbs/The Avengers.jpg", categories: ["movie", "trending"] },
    { title: "Black Panther", thumb: "image/MovieThumbs/Black Panther.jpg", categories: ["movie", "trending"] },
    { title: "Stranger Things", thumb: "image/MovieThumbs/Stranger Things.jpg", categories: ["series"] },
    { title: "The Witcher", thumb: "image/MovieThumbs/The Witcher.jpg", categories: ["series"] },
    { title: "Breaking Bad", thumb: "image/MovieThumbs/Breaking Bad.jpg", categories: ["series"] },
    { title: "Rick and Morty", thumb: "image/MovieThumbs/Rick and Morty.jpg", categories: ["series", "animation"] },
    { title: "Spider Man <br>Into the Spider Verse", thumb: "image/MovieThumbs/Spider Man Into the Spider Verse.jpg", categories: ["animation"] },
    { title: "Inside Out", thumb: "image/MovieThumbs/Inside Out.jpg", categories: ["animation"] },
    { title: "Kung Fu Panda", thumb: "image/MovieThumbs/Kung Fu Panda.jpg", categories: ["animation"] },
    { title: "The Mandalorian", thumb: "image/MovieThumbs/The Mandalorian.jpg", categories: ["series", "trending"] }
];




const container = document.getElementById('thumbCont');

function renderMovies(list, container) {
    list.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';

        const img = document.createElement('img');
        img.src = movie.thumb;
        img.alt = movie.title;
        img.className = 'thumbnail';

        const title = document.createElement('p');
        title.innerHTML = movie.title;
        title.className = 'movie-title';

        movieDiv.appendChild(img);
        movieDiv.appendChild(title);

        container.appendChild(movieDiv);
    });
}
const trending = allMovie.filter(m => m.categories.includes("trending"));
const movies = allMovie.filter(m => m.categories.includes("movie"));
const series = allMovie.filter(m => m.categories.includes("series"));
const animation = allMovie.filter(m => m.categories.includes("animation"));
renderMovies(trending, document.getElementById("trendingCont"));
renderMovies(movies, document.getElementById("moviesCont"));
renderMovies(series, document.getElementById("seriesCont"));
renderMovies(animation, document.getElementById("animationCont"));
