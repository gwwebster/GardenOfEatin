import React, { useEffect } from 'react';
import logo from "../logo.jpg"

function Home() {

    useEffect(() => {
        document.title = "Garden of Eatin | Home"
    }, []);

    return (
        <div id="home">
            <h1>Garden of Eatin Restaurant</h1>
            <img src={logo} alt="Restaurant Logo" />
        </div>
    );
}

export default Home;