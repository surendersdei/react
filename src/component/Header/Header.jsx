import React from 'react';
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <p>

           <NavLink to="/about">About</NavLink>
           <NavLink to="/work">Work</NavLink>

        </p>
    )
}

export default Header;
