// API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194
let moviesData=[]
async function showTime(filter){
 const showHours= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194&S=movie`);
 const showMinutes= await showHours.json();
 moviesData=showMinutes.Search;
 
 let movies =document.querySelector(".movie__list");
 movies.innerHTML= showMinutes.Search.map((movie)=>movieTime(movie)).join("");
  if(filter==="movie Year"){
    console.log(filter)
 const filteredMovies=moviesData.sort((a,b)=>b.Year - a.Year);
 let movies = document.querySelector(".movie__list");
movies.innerHTML=filteredMovies.map(movie=>movieTime(movie)).join("")
  }
  if (filter === "movieName") {
  const sortedMovies = moviesData.sort((a, b) =>
    a.Title.localeCompare(b.Title)
  );

  let movies = document.querySelector(".movie__list");
  movies.innerHTML = sortedMovies.map(movie => movieTime(movie)).join("");
}
}

showTime()
 function movieTime(movie){
    return `
    <div class="movie__lists">
    <div class="movie__list">
    <figure class="movieImage">
        <img src="${movie.Poster}" alt="${movie.Title}" class="movielogo">
    </figure>
    <h4>${movie.Title}</h4>
    <h4>${movie.Type}</h4>
    <h4>${movie.Year}</h4>
    <h4>${movie.imdbID}</h4>
 </div>
 </div>`
 }
 function movieSearch(event){
    console.log(event)
    showTime(event.target.value)//The value event.target.value is same as filter==="movieName" in if condition 
  
 }
 
 