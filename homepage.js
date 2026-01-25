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

    // Update hero banner
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-overview").textContent = movie.overview;
    document.getElementById("movie-meta").innerHTML = `
      <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
      <span class="year">📅 ${movie.release_date.slice(0, 4)}</span>
      <span class="duration">⏱ ${Math.floor(Math.random() * 60) + 90}m</span>
    `;

    // Set hero banner background
    const heroBanner = document.getElementById("hero-banner");
    heroBanner.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%),
                                        url(${IMG_URL}${movie.backdrop_path})`;
    heroBanner.style.backgroundSize = "cover";
    heroBanner.style.backgroundPosition = "center";

  } catch (error) {
    console.error("Error loading hero movie:", error);
    // Set fallback content
    document.getElementById("movie-title").textContent = "StreamFlix Originals";
    document.getElementById("movie-overview").textContent = "Discover amazing movies and TV shows exclusively on StreamFlix.";
  }
}

async function loadTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
    );

    const data = await response.json();
    const trendingContainer = document.getElementById("trending-cards");
    
    // Clear any loading content
    trendingContainer.innerHTML = '';
    
    // Get first 6 trending movies
    const trendingMovies = data.results.slice(0, 6);
    
    trendingMovies.forEach(movie => {
      const card = createMovieCard(movie);
      trendingContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading trending movies:", error);
    document.getElementById("trending-cards").innerHTML = 
      '<p class="error">Failed to load trending movies. Please try again later.</p>';
  }
}

async function loadTVSeries() {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const data = await response.json();
    const seriesContainer = document.getElementById("tv-series-cards");
    
    // Clear any loading content
    seriesContainer.innerHTML = '';
    
    // Get first 6 popular TV series
    const tvSeries = data.results.slice(0, 6);
    
    tvSeries.forEach(series => {
      const card = createTVSeriesCard(series);
      seriesContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading TV series:", error);
    document.getElementById("tv-series-cards").innerHTML = 
      '<p class="error">Failed to load TV series. Please try again later.</p>';
  }
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  
  card.innerHTML = `
    <div class="card-image" style="background-image: url('${IMG_URL}${movie.poster_path}')">
      <div class="card-overlay">
        <button class="play-btn">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta">
        <span>⭐ ${movie.vote_average.toFixed(1)}</span>
        <span>${movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}</span>
      </div>
    </div>
  `;
  
  // Add click event to play button
  card.querySelector('.play-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    alert(`Playing: ${movie.title}`);
  });
  
  return card;
}

function createTVSeriesCard(series) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  
  card.innerHTML = `
    <div class="card-image" style="background-image: url('${IMG_URL}${series.poster_path}')">
      <div class="card-overlay">
        <button class="play-btn">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">${series.name}</h3>
      <div class="card-meta">
        <span>⭐ ${series.vote_average.toFixed(1)}</span>
        <span>${series.first_air_date ? series.first_air_date.slice(0, 4) : 'N/A'}</span>
      </div>
    </div>
  `;
  
  // Add click event to play button
  card.querySelector('.play-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    alert(`Playing: ${series.name}`);
  });
  
  return card;
}

// Add some error styling to CSS
const errorStyle = document.createElement('style');
errorStyle.textContent = `
  .error {
    color: #ff6b6b;
    text-align: center;
    padding: 20px;
    grid-column: 1 / -1;
  }
`;
document.head.appendChild(errorStyle);

// Load all content when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadHeroMovie();
  loadTrendingMovies();
  loadTVSeries();
});

// Add hover effect to movie cards
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest('.movie-card')) {
      const card = e.target.closest('.movie-card');
      card.style.zIndex = '10';
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest('.movie-card')) {
      const card = e.target.closest('.movie-card');
      card.style.zIndex = '1';
    }
  });
});