import ResultCard from "./ResultCard";

function Results( {movies} ) {
  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        {movies.map(movie => <ResultCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Results;