const movies = [
    { title: "Movie 1", thumb: "ghosted/image.jpg" },
    { title: "Movie 2", thumb: "ghosted/image.jpg" },
    { title: "Movie 3", thumb: "ghosted/image.jpg" },
    // add more
];

const container = document.getElementById('thumbnails-container');

movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie.thumb;
    img.alt = movie.title;
    img.className = 'thumbnail';
    container.appendChild(img);
});
