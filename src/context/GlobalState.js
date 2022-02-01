import React, { createContext, useReducer, useEffect } from 'react'; 
import AppReducer from './AppReducer';

//initial state
const initialState = {
    favourites: localStorage.getItem('favourites')
     ? JSON.parse(localStorage.getItem('favourites'))
     : [],
}

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(state.favourites))
    }, [state])

    //actions
    const addFavourites = (movie) => {
        dispatch( {type:"ADD_FAVS", payload: movie} );
    }

    const removeFavourites = (id) => {
        dispatch( {type:"REMOVE_FAVS", payload: id} );
    }

    return (
        <GlobalContext.Provider
         value={{favourites: state.favourites,
                addFavourites,
                removeFavourites,
        }}
         >
            {props.children}
        </GlobalContext.Provider>
    )
}