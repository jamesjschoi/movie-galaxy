import React, { useState } from 'react';
import { API_KEY } from '../globals/globals';
import Results from '../components/Results';
import Search from '../components/Search';

function PageSearch() {
    const [fetchMovie, setFetchMovie] = useState([]);

    const onSearchSubmit = async (searchTerm) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.error) {
                    setFetchMovie(data.results);
                } else {
                    setFetchMovie([]);
                }
        });
    }

    const clearResults = () => setFetchMovie([]);
    

    return (
        <section className="search-page">
            <h2>Search</h2>
            <div className="search-container">
                <Search 
                    onSearchSubmit={onSearchSubmit} 
                    clearResults={clearResults}
                />
            </div>
            <div>
                {fetchMovie.length > 0 ? <Results movies={fetchMovie} /> : <p>No Result</p>}
            </div>
        </section>

        
    );

}

export default PageSearch;
