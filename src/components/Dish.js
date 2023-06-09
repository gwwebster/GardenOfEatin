import React from 'react';

function Dish({ dish }) {

    const { name, description, price } = dish

    return (
        <li className="dish">
            <p><strong>{name}</strong> • {price}</p>
            <p><em>{description}</em></p>
            <br />
        </li>
    );
}

export default Dish;