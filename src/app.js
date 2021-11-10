import Header from './components/Header';
import AllMovies from './components/AllMovies';
import axios from 'axios';
import './css/app.css';


//class with the requests(POST and DELETE)
class request{
    static addMovie(title,rating){
        axios.post('http://localhost:3000/movies',{
            title: title,
            rating:rating
        })
        .then(location.reload())
        .catch(err=>console.log(err));
    }

    static deleteMovie(id){
        axios.delete(`http://localhost:3000/movies/${id}`)
        .then(location.reload())
        .catch(err=>console.log(err));
    }
}

//validation for rating - must be 0 to 10
function ratingValidation(rating){
    let toggle = document.getElementById("isValid");
    if(rating>=0 && rating<=10){
        toggle.className="form-error"
        return true;
    }else{
        toggle.className="form-error-display"
        return false;
    }
}

//load components
const app = async()=>{
    document.getElementById('header').innerHTML = Header();
    document.getElementById('allMovies').innerHTML = await AllMovies();
}

//add movie to the list
document.getElementById("formButton").addEventListener("click",function(event){
    event.preventDefault();
    let titleForm =  document.getElementById("titleInput").value;
    let ratingForm=  document.getElementById("ratingInput").value;
    
    if(ratingValidation(ratingForm)){
        request.addMovie(titleForm,ratingForm);
    }
    
});


//delete movie 
document.querySelector('#allMovies').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        request.deleteMovie(e.target.id);
    }
    
})

//init app
app();
