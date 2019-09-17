import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/asparia.png';

function Header() {
    return (
        <p>

           <div className="logo">
                <img src={logo} alt="" />
           </div>

           <NavLink to="/about">About</NavLink>
           <NavLink to="/work">Work</NavLink>

        </p>
    )
}

export default Header;
