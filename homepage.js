const API_KEY = "947483b65dc5127f5e0a037175fb6593";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

async function loadHeroMovie() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const data = await response.json();
    const movie = data.results[0]; // first popular movie

    // Inject title
    document.getElementById("movie-title").textContent = movie.title;

    // Inject description
    document.getElementById("movie-overview").textContent = movie.overview;

    // Inject meta info
    document.getElementById("movie-meta").innerHTML =
      `⭐ ${movie.vote_average.toFixed(1)} | ${movie.release_date.slice(0, 4)}`;

    // Set hero background image
    document.getElementById("").style.backgroundImage =
      `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)),
       url(${IMG_URL}${movie.backdrop_path})`;

    document.getElementById("middle").style.backgroundSize = "cover";
    document.getElementById("middle").style.backgroundPosition = "center";

  } catch (error) {
    
    console.error("Error loading movie:", error);
  }
}

loadHeroMovie();
