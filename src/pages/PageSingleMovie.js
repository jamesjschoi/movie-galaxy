import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import MovieInfo from '../components/MovieInfo';


function PageSingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
            `)
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI); 
        }

        getMovie();

    }, [id]);

    return (
        <section className="page-single-movie">
            <MovieInfo movie={movie} genres={movie.genre} />
        </section>
    );
}

export default PageSingleMovie;