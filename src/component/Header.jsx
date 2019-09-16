import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <p>

           <Link to="/about">About</Link>
           <Link to="/work">Work</Link>

        </p>
    )
}

export default Header;
