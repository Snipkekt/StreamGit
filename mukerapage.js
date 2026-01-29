const allMovie = [
  { title: "The Chosen", thumb: "ghosted/123.jpg", categories: ["series", "trending"] },
  { title: "Inception", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Soul", thumb: "ghosted/123.jpg", categories: ["animation", "trending"] },
  { title: "Interstellar", thumb: "ghosted/123.jpg", categories: ["movie", "trending"] },
  { title: "Coco", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "The Dark Knight", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Gladiator", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Raya and the Last Dragon", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Avengers: Endgame", thumb: "ghosted/123.jpg", categories: ["movie", "trending"] },
  { title: "Titanic", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Encanto", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "The Matrix", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Jurassic Park", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Frozen II", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "The Lion King", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Moana", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Avatar", thumb: "ghosted/123.jpg", categories: ["movie", "trending"] },
  { title: "Pirates of the Caribbean", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Harry Potter and the Sorcerer's Stone", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "The Lord of the Rings: The Fellowship of the Ring", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Big Hero 6", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Forrest Gump", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "The Godfather", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "Pulp Fiction", thumb: "ghosted/123.jpg", categories: ["movie"] },
  { title: "The Avengers", thumb: "ghosted/123.jpg", categories: ["movie", "trending"] },
  { title: "Black Panther", thumb: "ghosted/123.jpg", categories: ["movie", "trending"] },
  { title: "Stranger Things", thumb: "ghosted/123.jpg", categories: ["series"] },
  { title: "The Witcher", thumb: "ghosted/123.jpg", categories: ["series"] },
  { title: "Breaking Bad", thumb: "ghosted/123.jpg", categories: ["series"] },
  { title: "Rick and Morty", thumb: "ghosted/123.jpg", categories: ["series", "animation"] },
  { title: "Spider-Man: Into the Spider-Verse", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Inside Out", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "Kung Fu Panda", thumb: "ghosted/123.jpg", categories: ["animation"] },
  { title: "The Mandalorian", thumb: "ghosted/123.jpg", categories: ["series", "trending"] },
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
        title.textContent = movie.title;
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

// render each category
renderMovies(trending, document.getElementById("trendingCont"));
renderMovies(movies, document.getElementById("moviesCont"));
renderMovies(series, document.getElementById("seriesCont"));
renderMovies(animation, document.getElementById("animationCont"));
