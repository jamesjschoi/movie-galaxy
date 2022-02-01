import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';

function PageFavs() {
  const { favourites } = useContext(GlobalContext);

  return (
      <section className="favs-page">
        {favourites.length > 0 ? ( 
        <>
          <div className="movies-container">
          {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
          </div>
        </>
        ) : (
          <h2 className="no-movie">No Movies in your list!</h2>
        )}

      </section>
  );
}

export default PageFavs;
