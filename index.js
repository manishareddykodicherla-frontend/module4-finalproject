// API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194

async function showTime(){
 const showHours= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194&S=fast`);
 const showMinutes= await showHours.json();
 console.log(showMinutes)
 let movies=document.querySelector(".movie__list");
 movies.innerHTML= showMinutes.Search.map((showHour)=>movieTime(showHour)).join("");
}
showTime()
 function movieTime(showHour){
    return `<div class="movie__list">
    <figure class="movieImage">
        <img src=src="https://${showHour.Poster}" alt="${showHour.Title}">
    </figure>
    <h4>${showHour.Title}</h4>
    <h4>${showHour.Type}</h4>
    <h4>${showHour.Year}</h4>
    <h4>${showHour.imdbID}</h4>
 </div>`
 }
  function renderMovies(filter){
    let atoz=document.querySelector(".movie__list");
    
if(filter==="movieYear")
    showHour.sort((a,b)=>a.Year-b.Year);
  }