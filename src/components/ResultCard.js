import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import AddFavourite from './AddFavourite';
import { GlobalContext } from '../context/GlobalState';
import React, { useContext } from 'react';

function ResultCard( {movie} ) {
  const {addFavourites, favourites} = useContext(GlobalContext);
    
  let storedMovie = favourites.find(o => o.id === movie.id);

  const favouritesDisabled = storedMovie ? true : false;

  const setVoteClass = (vote) => {
    if(vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };



  return (
    <div className="movie-card">
        <div className="movie-poster">
            {movie.poster_path === null ?
                <Link to={`/movie/${movie.id}`}><img src={noPoster} alt="No Poster" /></ Link> :
                <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                alt={`${movie.title} Poster`} /></ Link>
            }
            <div className="overlay">{movie.title}</div>
        </div>
        <div className="result-info">
          <div className="result-details">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg><p className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</p></span>
          </div>
          <div className="result-detail">
              <button className="result-info-btn" disabled={favouritesDisabled} onClick={() => addFavourites(movie)}><AddFavourite /></button>   
          </div>
        </div>
    </div>
  );
}

export default ResultCard;