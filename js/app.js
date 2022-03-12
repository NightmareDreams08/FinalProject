const next = document.getElementById("Next")

let Page = 1;
let total_pages = 0 ;
if(Page > 1 | Page < total_pages){
  
}else{
  Page=1
}
function nextpage(){
next.addEventListener("click", function () {
 Page += 1;
 getData(Page, renderMovies);
});
}

const aEl = document.getElementById("a");

async function getData(Page, callback) {
  const url =
  `https://api.themoviedb.org/3/movie/now_playing?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi&page=${Page}`;
  const request = await fetch(url);
  const response = await request.json();
  callback(response.results);
  console.log(response)
  total_pages = response.total_pages;
}

function renderMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    const movieItem = generatorMovieItem(movies[i]);
   aEl.innerHTML += movieItem;
  }
  nextpage()
}

function generatorMovieItem(movie) {
  return `
      <div class="b" >
        <img class="imga" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <a class="display font-bold" href="./details.html?movieId=${movie.id}">Tên phim: ${movie.title}</a>
        <span class="display font-bold" >Ngày công chiếu: ${movie.release_date}</span>
        <span class="display font-bold" >Độ phổ biến: ${movie.popularity}</span>
        <span class="display font-bold text-2xl" >Điểm đánh giá: ${movie.vote_average}</span>
      </div>`;
}

function nameAccount(){
  let account = localStorage.getItem("account", JSON.stringify("account"));
 console.log(account)
  let text = document.getElementById("text")
  text.textContent = account
}
nameAccount()
getData(Page, renderMovies);