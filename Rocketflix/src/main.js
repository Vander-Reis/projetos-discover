import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './moviesApi.js'

let movie = document.querySelector('.movies')

function getMyMovies() {
    const idMovie = Math.floor(Math.random() * 10000) + 1;

    const movieUrl = `${BASE_URL}${idMovie}?api_key=${API_KEY}&${language}`;
    fetch(movieUrl)
    .then(response => response.json())
    .then(data => {
        movie.innerHTML = `
       <div class="insertMovies">
        <img src="${data.poster_path ? IMG_URL + data.poster_path : "https://images.unsplash.com/photo-1599837565318-67429bde7162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}">
        <div>
          <h2>${data.title ? data.title : "<p>Ops, hoje não é dia de assistir filme.</br>Bora codar! 🚀</p>"}</h2>
          <p>
            ${data.overview ? data.overview : ""}
          </p>
        </div>
       </div>
       `
    })
}


function changeMovie() {
    getMyMovies();
  }
  
const buttonMovie = document.querySelector('button')

buttonMovie.addEventListener('click', changeMovie);