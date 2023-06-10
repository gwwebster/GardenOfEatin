import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav>
                <NavLink end to="/">Home</NavLink>
                <br />
                <NavLink end to="/about">About</NavLink>
                <br />
                <NavLink end to="/menu">Menu</NavLink>
                <br />
                <NavLink end to="/newdish">New Dish</NavLink>
            </nav>
            <h1 id="name">Garden of Eatin</h1>
        </div>
        
    );
}

export default NavBar;