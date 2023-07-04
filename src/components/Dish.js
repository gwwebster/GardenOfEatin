import React from 'react';

function Dish({ dish }) {

    const { name, description, price } = dish;

    return (
        <li>
            <p><span className="dish_name">{name}</span> • ${price}</p>
            <p><em>{description}</em></p>
            <br />
        </li>
    );
}

export default Dish;