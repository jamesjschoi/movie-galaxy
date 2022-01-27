import { Link } from 'react-router-dom';
import NavMain from './NavMain';


function Header() {

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();

    //     // movieOnSubmit();

    //     if(searchTerm) {
    //         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setResults(data.results);
    //             });

    //     }
        
        
    // };

    // const handleOnChange = (e) => {
    //     setSearchTerm(e.target.value);
    return (
        <header>
            <h1><Link to="/">Movie Galaxy</Link></h1>
            <NavMain />
        </header>
    );
}

export default Header;