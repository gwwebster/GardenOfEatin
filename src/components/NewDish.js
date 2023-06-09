import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewDish() {

    const [formData, setFormData] = useState({});

    function handleSubmit() {

    }

    return (
        <div id="form">
            <h3>Add a new dish!</h3>
            <p>Got an idea for a new dish? We'd love to hear it!
                Submit your idea for a new dish and see it added to the <Link to="/menu">Menu</Link> page!</p>
            <form onSubmit={handleSubmit} >
                <label>Dish Name: <input type="text" placeholder="Dish Name" /></label>
                <br />
                <label>Description: <input type="text" placeholder="Description" /></label>
                <br />
                <label>Price: <input type="text" placeholder="Price" /></label>                
                <br />
                <br />
                <button>Submit!</button>
            </form>
        </div>
    );
}

export default NewDish;