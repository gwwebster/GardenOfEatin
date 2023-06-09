import React from 'react';
import Dish from './Dish';

function Menu({ dishes }) {

    const dishesToDisplay = dishes.map(dish => {
        return <Dish dish={dish} />
    })

    return (
        <div id="menu">
            <ul>
                {dishesToDisplay}
            </ul>
        </div>
    );
}

export default Menu;