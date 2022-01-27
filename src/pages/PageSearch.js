import React from 'react';
import { API_KEY } from '../globals/globals';
import { useState, useEffect } from 'react';
import ResultCard from '../components/ResultCard';

function PageSearch() {
    //http://api.themoviedb.org/3/search/movie?&api_key=8e0e31d7d4c06214e47a2edcfaf247e6&query=
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [resultPreview, setResultPreview] = useState([]);

    // const movieOnSubmit = async() => {
    //     const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`);
    //     const movieDataFromAPI = await res.json();
    //     setResults(movieDataFromAPI);
    // }

    

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // movieOnSubmit();

        if(searchTerm) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => {
                    setResults(data.results);
                });

        }
        
        
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);



        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setResults(data.results);
        //     });
    }

    return (
        <section className="search-submit">
            <h2>Search Movie</h2>
            <div className='searchbox-contianer'>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" 
                        placeholder='Search for a movie...' 
                        className='searchbox' 
                        value={searchTerm} 
                        onChange={handleOnChange}/>
                    {/* {results.length > 0 && (
                    <ul className="results">
                        {results.map(movie => (
                            <li key={movie.id}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                    )} */}
                </form>
            </div>
            <div className="movies-container">
                {results.map(movie => <ResultCard key={movie.id} movie={movie} />)}
            </div>
        </section>
    );
}

export default PageSearch;
