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


// Generate movie ID from title
function movieId(title) {
    return title
        .replace(/<br>/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
}


// Render movies to container
function renderMovies(list, container) {
    list.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-item";
        movieDiv.id = movieId(movie.title);
        movieDiv.dataset.category = movie.categories[0];

        const img = document.createElement("img");
        img.src = movie.thumb;
        img.className = "thumbnail";

        const title = document.createElement("p");
        title.innerHTML = movie.title;
        title.className = "movie-title";

        movieDiv.appendChild(img);
        movieDiv.appendChild(title);
        container.appendChild(movieDiv);
    });
}


// Initial render
renderMovies(allMovie.filter(m => m.categories.includes("trending")), document.getElementById("trendingCont"));
renderMovies(allMovie.filter(m => m.categories.includes("movie")), document.getElementById("moviesCont"));
renderMovies(allMovie.filter(m => m.categories.includes("series")), document.getElementById("seriesCont"));
renderMovies(allMovie.filter(m => m.categories.includes("animation")), document.getElementById("animationCont"));

const catMap = {
    trending: "trendingCont",
    movie: "moviesCont",
    series: "seriesCont",
    animation: "animationCont"
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-btn");
    const topSearchDiv = document.getElementById("topsearch");

    // Create search dropdown
    const searchDropdown = document.createElement("div");
    searchDropdown.id = "searchDropdown";
    topSearchDiv.appendChild(searchDropdown);

    // Search functionality
    searchBox.addEventListener("input", () => {
        const q = searchBox.value.toLowerCase();
        searchDropdown.innerHTML = "";

        if (!q) {
            searchDropdown.style.display = "none";
            return;
        }

        const results = allMovie.filter(m =>
            m.title.replace(/<br>/g, "").toLowerCase().startsWith(q)
        );

        results.forEach(movie => {
            const div = document.createElement("div");
            div.textContent = movie.title.replace(/<br>/g, " ");
            div.className = "search-item";
            //clickablity here
            div.onclick = () => {
                searchBox.value = div.textContent;
                searchDropdown.style.display = "none";

                const id = movieId(movie.title);
                const target = document.getElementById(id);
                if (!target) return;
                //catmap was here

                // Scroll to category container
                document.getElementById(catMap[movie.categories[0]]).scrollIntoView({ behavior: "smooth" });

                // Then scroll to specific movie
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    });
                }, 400);
            };

            searchDropdown.appendChild(div);
        });

        searchDropdown.style.display = results.length ? "block" : "none";
    });

    // Mobile/Tablet search toggle functionality
    if (searchBtn && searchBox) {
        // Toggle search box when search button is clicked
        searchBtn.addEventListener('click', function (e) {
            // Only toggle on mobile/tablet (screen width <= 1024px)
            if (window.innerWidth <= 1024) {
                searchBox.classList.toggle('active');

                // Add/remove search-active class to body to hide navbar icons
                if (searchBox.classList.contains('active')) {
                    document.body.classList.add('search-active');
                    setTimeout(() => searchBox.focus(), 100);
                } else {
                    document.body.classList.remove('search-active');
                }
            }
        });

        // Close search box when clicking outside
        document.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                // Check if click is outside both search box, dropdown, and search button
                if (!searchBox.contains(e.target) &&
                    !searchBtn.contains(e.target) &&
                    !searchDropdown.contains(e.target)) {
                    searchBox.classList.remove('active');
                    document.body.classList.remove('search-active');
                    searchDropdown.style.display = 'none';
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function () {
            // Show search box on desktop, hide on mobile
            if (window.innerWidth > 1024) {
                searchBox.classList.remove('active');
                document.body.classList.remove('search-active');
                searchBox.style.display = '';
            }
        });
    }

    // Close dropdown when clicking outside (for all screen sizes)
    document.addEventListener('click', function (e) {
        if (!searchBox.contains(e.target) &&
            !searchDropdown.contains(e.target) &&
            !searchBtn.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });
});