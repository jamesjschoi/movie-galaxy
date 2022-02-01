import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import React from 'react';
import Burger from './SideBar';


function Header() {

    return (
        <header>
            <h1><Link to="/">Movie Galaxy</Link></h1>
            <Burger />
            <NavMain />
        </header>
        
    );
}

export default Header;