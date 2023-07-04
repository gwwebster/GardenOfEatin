import React, { useEffect } from 'react';
import Dish from './Dish';

function Menu({ dishes, isLoaded }) {

    useEffect(() => {
        document.title = "Garden of Eatin | Menu"
    }, []);

    if (!isLoaded) return <h2 className="loading-indicator">Loading...</h2>

    return (
        <div id="menu">
            <ul>
                {dishes.map(dish => (
                    <Dish key={dish.id} dish={dish} />
                ))}
            </ul>
        </div>
    );
}

export default Menu;