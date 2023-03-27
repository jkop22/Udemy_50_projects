const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a7bc8147ce490d6e4a4f6f3b2f5eedf&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3a7bc8147ce490d6e4a4f6f3b2f5eedf&query="';
const main = document.querySelector("#main");

//GET intital movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

//RENDER to the DOM
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie; //destrukturalizace objketu kvuli ziskani konkretnich potrebnych dat
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie"); // vznikne <div class='movie'></div>

    movieEl.innerHTML = `
    
        <img src="${IMG_PATH + poster_path}" alt="movie ${title} poster" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
            ${overview}
          </p>
        </div>
    
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

//GET search results
const form = document.querySelector("#form");
const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    // testujeme zda searchTerm existuje a zaroven neni roven prazdnemu retezci
    getMovies(SEARCH_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
