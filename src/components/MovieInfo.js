import React, { useContext } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import AddFavourite from './AddFavourite';
import { GlobalContext } from '../context/GlobalState';


function MovieInfo({movie}) {
    const {addFavourites, favourites} = useContext(GlobalContext);
    
    let storedMovie = favourites.find(o => o.id === movie.id);
  
    const favouritesDisabled = storedMovie ? true : false;



  return (
    <div className="info-wrapper">
        {movie.backdrop_path !== null && 
        <img className="info-wrapper-image" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
        alt={`${movie.title} Poster`} />}
        <div className="info-content">
            <div className="thumb">
                {movie.poster_path 
                 ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                 alt={`${movie.title} Poster`} />
                 : <img src={noPoster} alt="No Poster" />
                }
            </div>
            <div className="info-text">
                <div className="about-info-container">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <p className="tagline">{movie.tagline}</p>
                </div>
                <h3>RATING</h3>
                <div className="score">{movie.vote_average}/10</div>
                <h3>OVERVIEW</h3>
                <p>{movie.overview}</p>
                
                <button className="info-btn-two" disabled={favouritesDisabled} onClick={() => addFavourites(movie)}><AddFavourite /></button>
                                        
            </div>
        </div>
    </div>
  );
}

export default MovieInfo;
