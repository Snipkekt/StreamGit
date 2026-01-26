const movies = [
    { title: "The Lost Kingdom", thumb: "ghosted/image.jpg" },
    { title: "Space Odyssey", thumb: "ghosted/image.jpg" },
    { title: "Midnight Chase", thumb: "ghosted/image.jpg" },
    { title: "Hidden Secrets", thumb: "ghosted/image.jpg" },
    { title: "Galaxy Wars", thumb: "ghosted/image.jpg" },
    { title: "Silent Night", thumb: "ghosted/image.jpg" }
];

const container = document.getElementById('thumbCont');

movies.forEach(movie => {
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
