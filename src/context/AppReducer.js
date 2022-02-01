export default (state, action) => {
    switch(action.type) {
        case "ADD_FAVS":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites],
            }
        case "REMOVE_FAVS":
            return {
                ...state,
                favourites: state.favourites.filter((movie) => movie.id !== action.payload),
            }
        default:
            return state;
    }
};