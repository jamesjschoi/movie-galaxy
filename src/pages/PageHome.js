import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/globals';
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';
import Carousel from '../components/Carousel';

function PageHome( {sort} ) {

    const [moviesData, setMoviesData] = useState([]);

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
        let moviesDataFromAPI = await res.json();
        moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 20);
        console.log(moviesDataFromAPI);
        setMoviesData(moviesDataFromAPI);
    }
    useEffect(() => {
        fetchMovies();
    }, [sort]); 
    
    
    return (
        <section className="home-page">
            <div className="hero-carousel">
                <Carousel movies={moviesData} />
            </div>
            <NavSort />
            {moviesData !== null && <Movies movies={moviesData} />}
        </section>
  );
}

export default PageHome;
