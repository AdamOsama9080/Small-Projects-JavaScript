// // let searchIcon = document.querySelector(".fa-solid");
// // let searchEngine = document.querySelector(".search-engine");
// // let movieTrailer = document.querySelector(".movia-info");
// // let headOfMovie = document.querySelector(".information .head");
// // let rateOfMovie = document.querySelector(".rate");
// // let aboutOfMovie = document.querySelector(".story");
// // let overView = document.querySelector(".story h3");
// // let detailsOMovie = document.querySelector(".story p");
let movieParent = document.querySelector(".movie");
let movieContainer = document.querySelector(".container");


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

getMovies(APIURL);
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData.results);
}

function showMovies(Movies){
    Movies.forEach(movie => {
        let {poster_path,title,vote_average,overview}=movie;

        let movieTrailer = document.createElement("div");
        movieTrailer.classList.add("movia-info");

        let Poster = document.createElement("img");
        Poster.classList.add("img");
        Poster.src = IMGPATH + poster_path;
        Poster.alt = `${title}`;
        movieTrailer.appendChild(Poster);

        let information = document.createElement("div");
        information.classList.add("information");

        let headOfMovie = document.createElement("h2");
        headOfMovie.classList.add("head");
        headOfMovie.innerHTML = title;
        information.appendChild(headOfMovie)

        let rateOfMovie = document.createElement("span");
        rateOfMovie.classList.add("rate");
        rateOfMovie.innerHTML = vote_average;
        information.appendChild(rateOfMovie)

        movieTrailer.appendChild(information);

        let aboutOfMovie = document.createElement("div");
        aboutOfMovie.classList.add("story");

        let aboutOverview = document.createElement("h3");
        let header  = document.createTextNode("Over-view");
        aboutOverview.appendChild(header);
        aboutOfMovie.appendChild(aboutOverview);
    
        let detailsOMovie = document.createElement("p");
        detailsOMovie.innerHTML = overview;
        aboutOfMovie.appendChild(detailsOMovie);

        movieTrailer.appendChild(aboutOfMovie)



        movieContainer.appendChild(movieTrailer);
        movieParent.appendChild(movieContainer);






        
    });
}


