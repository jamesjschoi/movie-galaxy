import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import React from 'react';

function Header() {

    return (
        <header>
            <h1><Link to="/">Movie Galaxy</Link></h1>
            <NavMain />
        </header>
        
    );
}

export default Header;