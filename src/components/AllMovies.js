import axios from "axios";

//Get all movies from the list and populate data into cards 
const AllMovies = async()=>{
    const res = await axios.get(`http://localhost:3000/movies`);
    const movies = res.data;

    console.log(movies.length);

    let allMovies =``;

    for(let movie of movies){
        let film = `<div class="card col-g-7 col-md-12 col-sm-12 mb-5">
                        <div class="card-body row justify-content-evenly">
                            <div class="col-6">
                                <h4 class="card-title">${movie.title}</h4>
                                <p class="card-text">rating: ${movie.rating}/10 </p>
                            </div>
                            <div class="col-6  d-flex justify-content-end">
                                <button class="deleteButton delete btn btn-danger" id="${movie.id}">X</button>
                            </div>
                        </div>
                        
                    </div>`
        allMovies+=film;
    }

    

    const template= `<div id="movie-cards">
                        ${allMovies}
                    </div>`;

    return template;
}
 
export default AllMovies;