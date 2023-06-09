import React, { useEffect } from 'react';
import Dish from './Dish';

function Menu({ dishes }) {

    useEffect(() => {
        document.title = "Garden of Eatin | Menu"
    }, []);

    const dishesToDisplay = dishes.map(dish => {
        return <Dish key={dish.id} dish={dish} />
    });

    return (
        <div id="menu">
            <ul>
                {dishesToDisplay}
            </ul>
        </div>
    );
}

export default Menu;