import React from 'react';
import { API_KEY } from '../globals/globals';
import { useState, useEffect } from 'react';
import ResultCard from './ResultCard';

function Search() {
    //http://api.themoviedb.org/3/search/movie?&api_key=8e0e31d7d4c06214e47a2edcfaf247e6&query=
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);


    const handleOnChange = (e) => {
        e.preventDefault();

        setSearchTerm(e.target.value);
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                setResults(data.results);
        })
        
    };

    return (
        <div className='searchbox-contianer'>
                <input type="text" 
                    placeholder='Search for a movie...' 
                    className='searchbox' 
                    value={searchTerm} 
                    onChange={handleOnChange}/>
                {results.length > 0 && (
                    <ul className="results">
                        {results.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie.title} />
                            </li>
                        ))}
                    </ul>
                )}
        </div>

    );
}

export default Search;
