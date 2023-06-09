import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewDish({ onAddDish }) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:4000/dishes', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
          .then(r => r.json())
          .then(data => onAddDish(data))
          setFormData({
            name: "",
            description: "",
            price: "",
        })
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
                <label>Dish Name: <br /></label>
                <input 
                    type="text" 
                    placeholder="Dish Name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <br /><br />
                <label>Description: <br /></label>
                <textarea
                    rows="4"
                    cols="50" 
                    type="text" 
                    placeholder="Description"
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange}
                />
                <br /><br />
                <label>Price ($): <br /></label>
                <input 
                    type="number" 
                    placeholder="Price (number)"
                    name="price"  
                    value={formData.price} 
                    onChange={handleChange}
                />                
                <br /><br />
                <input type ="submit" value="Submit!" />
            </form>
        </div>
    );
}

export default NewDish;