import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink end to="/">Home</NavLink>
            <NavLink end to="/about">About</NavLink>
            <NavLink end to="/menu">Menu</NavLink>
            <NavLink end to="/newdish">New Dish</NavLink>
        </nav>
    );
}

export default NavBar;