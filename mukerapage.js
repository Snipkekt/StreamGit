const cata=[
    
]
const movies1 = [
    { title: "The Chosen", thumb: "ghosted/123.jpg" },
    { title: "Inception", thumb: "ghosted/123.jpg" },
    { title: "Soul", thumb: "ghosted/123.jpg" },
    { title: "Interstellar", thumb: "ghosted/123.jpg" },
    { title: "Coco", thumb: "ghosted/123.jpg" },
    { title: "The Dark Knight", thumb: "ghosted/123.jpg" },
    { title: "Gladiator", thumb: "ghosted/123.jpg" },
    { title: "Raya and the Last Dragon", thumb: "ghosted/123.jpg" },
    { title: "Avengers: Endgame", thumb: "ghosted/123.jpg" },
    { title: "Titanic", thumb: "ghosted/123.jpg" },
    { title: "Encanto", thumb: "ghosted/123.jpg" },
    { title: "The Matrix", thumb: "ghosted/123.jpg" },
    { title: "Jurassic Park", thumb: "ghosted/123.jpg" },
    { title: "Frozen II", thumb: "ghosted/123.jpg" },
    { title: "The Lion King", thumb: "ghosted/123.jpg" },
    { title: "Moana", thumb: "ghosted/123.jpg" },
    { title: "Avatar", thumb: "ghosted/123.jpg" },
    { title: "Pirates of the Caribbean", thumb: "ghosted/123.jpg" },
    { title: "Harry Potter and the Sorcerer's Stone", thumb: "ghosted/123.jpg" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", thumb: "ghosted/123.jpg" },
    { title: "Big Hero 6", thumb: "ghosted/123.jpg" },
    { title: "Forrest Gump", thumb: "ghosted/123.jpg" },
    { title: "The Godfather", thumb: "ghosted/123.jpg" },
    { title: "Pulp Fiction", thumb: "ghosted/123.jpg" },
    { title: "The Avengers", thumb: "ghosted/123.jpg" },
    { title: "Black Panther", thumb: "ghosted/123.jpg" }
];
const categoryNames = ["Trending", "Box Office", "Movies", "Series"];
const categories = categoryNames.map(name => ({
    name: name,
    movies: movies1
}));

const container = document.getElementById('thumbCont');

movies1.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie-item';
    const Type = document.createElement('h2')
    Type.textContent = "abebe";
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
