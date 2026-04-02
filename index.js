// API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194
let moviesData=[]
async function showTime(filter){
 const showHours= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194&s=movie`);
 const showMinutes= await showHours.json();
 moviesData=showMinutes.Search;
 
 let movies =document.querySelector(".movie__lists");
 movies.innerHTML= showMinutes.Search.map((movie)=>movieTime(movie)).join("");
  if(filter==="movie Year"){
    console.log(filter)
 const filteredMovies=moviesData.sort((a,b)=>b.Year - a.Year);
 let movies = document.querySelector(".movie__lists");
movies.innerHTML=filteredMovies.map(movie=>movieTime(movie)).join("")
  }
  if (filter === "movieName") {
  const sortedMovies = moviesData.sort((a, b) =>a.Title.localeCompare(b.Title));

  let movies = document.querySelector(".movie__lists");
  movies.innerHTML = sortedMovies.map(movie => movieTime(movie)).join("");
}

}

showTime()
 function movieTime(movie){
    return `
   
    <div class="movie__list">
    <figure class="movieImage">
        <img src="${movie.Poster}" alt="${movie.Title}" class="movielogo">
    </figure>
    <h4>${movie.Title}</h4>
    <h4>${movie.Type}</h4>
    <h4>${movie.Year}</h4>
    <h4>${movie.imdbID}</h4>
 
 </div>`
 }
 function movieSearch(event){
    console.log(event)
    showTime(event.target.value)//The value event.target.value is same as filter==="movieName" in if condition 
  //here we are calling showTime()function with value what we get onchanging the filter and based on value we choose then comes the if condtion on value we got after changing
 }
 async function searchMovies(event) {
  const searchItem = event.target.value;
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194&s=${searchItem}`);
  const data = await response.json();
   const moviesData = data.Search || [];
  const movies = document.querySelector(".movie__lists");
  movies.innerHTML = moviesData.map((movie) => movieTime(movie)).join("");

}