const allMovie = [
    { title: "The Chosen", thumb: "/images/MovieThumbs/The Chosen.jpg", categories: ["series", "trending"] },
    { title: "Inception", thumb: "images/MovieThumbs/Inception.jpg", categories: ["movie"] },
    { title: "Soul", thumb: "images/MovieThumbs/Soul.jpg", categories: ["animation", "trending"] },
    { title: "Interstellar", thumb: "images/MovieThumbs/Interstellar.jpg", categories: ["movie", "trending"] },
    { title: "Coco", thumb: "images/MovieThumbs/Coco.jpg", categories: ["animation"] },
    { title: "The Dark Knight", thumb: "images/MovieThumbs/The Dark Knight.jpg", categories: ["movie"] },
    { title: "Gladiator", thumb: "images/MovieThumbs/Gladiator.jpg", categories: ["movie"] },
    { title: "Raya and the Last Dragon", thumb: "images/MovieThumbs/Raya and the Last Dragon.jpg", categories: ["animation"] },
    { title: "Avengers Endgame", thumb: "images/MovieThumbs/AvengersEndgame.jpg", categories: ["movie", "trending"] },
    { title: "Titanic", thumb: "images/MovieThumbs/Titanic.jpg", categories: ["movie"] },
    { title: "Encanto", thumb: "images/MovieThumbs/Encanto.jpg", categories: ["animation"] },
    { title: "The Matrix", thumb: "images/MovieThumbs/The Matrix.jpg", categories: ["movie"] },
    { title: "Jurassic Park", thumb: "images/MovieThumbs/Jurassic Park.jpg", categories: ["movie"] },
    { title: "Frozen II", thumb: "images/MovieThumbs/Frozen II.jpg", categories: ["animation"] },
    { title: "The Lion King", thumb: "images/MovieThumbs/The Lion King.jpg", categories: ["animation"] },
    { title: "Moana", thumb: "images/MovieThumbs/Moana.jpg", categories: ["animation"] },
    { title: "Avatar", thumb: "images/MovieThumbs/Avatar.jpg", categories: ["movie", "trending"] },
    { title: "Pirates of the Caribbean", thumb: "images/MovieThumbs/Pirates of the Caribbean.jpg", categories: ["movie"] },
    { title: "Harry Potter <br>and <br>the Sorcerers Stone", thumb: "images/MovieThumbs/Harry Potter and the Sorcerers Stone.jpg", categories: ["movie"] },
    { title: "The Lord of the Rings <br>The Fellowship of the Ring", thumb: "images/MovieThumbs/The Lord of the Rings The Fellowship of the Ring.jpg", categories: ["movie"] },
    { title: "Big Hero 6", thumb: "images/MovieThumbs/Big Hero 6.jpg", categories: ["animation"] },
    { title: "Forrest Gump", thumb: "images/MovieThumbs/Forrest Gump.jpg", categories: ["movie"] },
    { title: "The Godfather", thumb: "images/MovieThumbs/The Godfather.jpg", categories: ["movie"] },
    { title: "Pulp Fiction", thumb: "images/MovieThumbs/Pulp Fiction.jpg", categories: ["movie"] },
    { title: "The Avengers", thumb: "images/MovieThumbs/The Avengers.jpg", categories: ["movie", "trending"] },
    { title: "Black Panther", thumb: "images/MovieThumbs/Black Panther.jpg", categories: ["movie", "trending"] },
    { title: "Stranger Things", thumb: "images/MovieThumbs/Stranger Things.jpg", categories: ["series"] },
    { title: "The Witcher", thumb: "images/MovieThumbs/The Witcher.jpg", categories: ["series"] },
    { title: "Breaking Bad", thumb: "images/MovieThumbs/Breaking Bad.jpg", categories: ["series"] },
    { title: "Rick and Morty", thumb: "images/MovieThumbs/Rick and Morty.jpg", categories: ["series", "animation"] },
    { title: "Spider Man <br>Into the Spider Verse", thumb: "images/MovieThumbs/Spider Man Into the Spider Verse.jpg", categories: ["animation"] },
    { title: "Inside Out", thumb: "images/MovieThumbs/Inside Out.jpg", categories: ["animation"] },
    { title: "Kung Fu Panda", thumb: "images/MovieThumbs/Kung Fu Panda.jpg", categories: ["animation"] },
    { title: "The Mandalorian", thumb: "images/MovieThumbs/The Mandalorian.jpg", categories: ["series", "trending"] }
];




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

// Search toggle functionality for mobile and tablet
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchBox = document.querySelector('.search-box');
    
    if (searchBtn && searchBox) {
        // Toggle search box when search button is clicked
        searchBtn.addEventListener('click', function(e) {
            // Only toggle on mobile/tablet (screen width <= 1024px)
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                searchBox.classList.toggle('active');
                
                // Focus on search box when it appears
                if (searchBox.classList.contains('active')) {
                    searchBox.focus();
                }
            }
        });
        
        // Close search box when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
                    searchBox.classList.remove('active');
                }
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            // Show search box on desktop
            if (window.innerWidth > 1024) {
                searchBox.classList.remove('active');
                searchBox.style.display = '';
            }
        });
    }
});
