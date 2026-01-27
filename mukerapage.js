
const movies1 = [
    { title: "The Lost Kingdom", thumb: "ghosted/123.jpg" },
    { title: "Space Odyssey", thumb: "ghosted/123.jpg" },
    { title: "Midnight Chase", thumb: "ghosted/123.jpg" },
    { title: "Hidden Secrets", thumb: "ghosted/123.jpg" },
    { title: "Galaxy Wars", thumb: "ghosted/123.jpg" },
    { title: "Silent Night", thumb: "ghosted/123.jpg" }
];
// const catagory=[
//     {GenreName:"Trending", genreList:movies1[0]},
//     {GenreName:"Trending", genreList:movies1[0]},
//     {GenreName:"Trending", genreList:movies1[0]},
//     {GenreName:"Trending", genreList:movies1[0]},
//     {GenreName:"Trending", genreList:movies1[0]},
// ];
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
