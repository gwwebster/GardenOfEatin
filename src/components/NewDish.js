import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewDish() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // POST fetch
        // callback to set state in Menu
    }

    function handleChange(e) {
        const formObjKey = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [formObjKey]: value
        });
    }

    return (
        <div id="form">
            <h3>Add a new dish!</h3>
            <p>Got an idea for a new dish? We'd love to hear it!
                Submit your idea for a new dish and see it added to the <Link to="/menu">Menu</Link> page!</p>
            <form onSubmit={handleSubmit} >
                <label>Dish Name: <input 
                    type="text" 
                    placeholder="Dish Name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                /></label>
                <br />
                <br />
                <label>Description: <input 
                    type="text" 
                    placeholder="Description"
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange}
                /></label>
                <br />
                <br />
                <label>Price: <input 
                    type="text" 
                    placeholder="Price"
                    name="price"  
                    value={formData.price} 
                    onChange={handleChange}
                /></label>                
                <br />
                <br />
                <input type ="submit" value="Submit!" />
            </form>
        </div>
    );
}

export default NewDish;