import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/globals';

function PageSingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
            `)
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI);
        }

        getMovie();

    }, []);

    return (
        <section className="page-single-movie">
            {movie !== null && <h2>{movie.title}</h2>}
        </section>
    );
}

export default PageSingleMovie;