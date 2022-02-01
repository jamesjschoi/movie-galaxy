import MovieCard from "./MovieCard";

function Movies( {movies} ) {
  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Movies;
