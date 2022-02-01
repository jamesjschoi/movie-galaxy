import React from 'react';
import { useState, useEffect } from 'react';

function Search({onSearchSubmit}) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(searchTerm !== "") {
            onSearchSubmit(searchTerm);
        }
    }, [searchTerm, onSearchSubmit])

    return (
        <div className='searchbox-container'>
                <input type="text" 
                    placeholder='Search for a movie...' 
                    className='searchbox' 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}/>
        </div>

    );
}

export default Search;
