import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/globals';
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';

function PageHome( {sort} ) {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 12);
            console.log(moviesDataFromAPI);
            setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();

    }, [sort]);
    
    return (
        <section className="home-page">
            <NavSort />
            {moviesData !== null && <Movies movies={moviesData} />}
        </section>
  );
}

export default PageHome;
