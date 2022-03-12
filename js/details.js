const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("movieId");
const API_KEY = "0a6d26d952bdd58d29ef7b7cb82a59db";
const movieEl = document.getElementById("movie");

async function getDetailMovie(movie_id, callback) {
  const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=vi`;
  const request = await fetch(API_URL);
  const response = await request.json();
  callback(response);

}
async function getTrailerMovie(movie_id, callback) {
  const API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=en-US`;
  const request = await fetch(API);
  const res = await request.json();
  callback(res.results[0]);
  console.log(res)
}
function renderTrailerMovie(trailer){
   const trailerItem=`
   <div>
   <span class="display font-bold text-3xl mr">Trailer của phim</span>
   <iframe class="frame" width="600" height="350" src="https://www.youtube.com/embed/${trailer.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
   </div>
   `
   movieEl.innerHTML += trailerItem
  
}
function renderMovieDetail(movie) {
  const movieItem = `
      <div>
        <span class="mrbt display font-bold text-5xl ">${movie.title}</span>
        <span class="mrbt display font-bold text-2xl ">${movie.release_date}</span>
        <span class=" display font-bold text-xl ">Overview</span>
        <span class=" display font-bold text-xl ">${movie.overview}</span>
      </div>
    
  `;

  movieEl.innerHTML += movieItem;
}
let text = document.getElementById("text")
function nameAccount(){
  let account = localStorage.getItem("account", JSON.stringify("account"));
 console.log(account)
  let text = document.getElementById("text")
  text.textContent = account
}
nameAccount()
getTrailerMovie(movieId,renderTrailerMovie)
getDetailMovie(movieId, renderMovieDetail);