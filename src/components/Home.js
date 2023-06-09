import React from 'react';
import logo from "../logo.jpg"


// basic page with logo image

function Home() {
    return (
        <div id="home">
            <h1>Garden of Eatin Restaurant</h1>
            <img src={logo} alt="Restaurant Logo" />
        </div>
    );
}

export default Home;