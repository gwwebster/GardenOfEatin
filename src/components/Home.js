import React, { useEffect } from 'react';
import logo from "../logo.jpg"

function Home() {

    useEffect(() => {
        document.title = "Garden of Eatin | Home"
    }, []);

    return (
        <div id="logo_container">
            <img src={logo} alt="Restaurant Logo" />
        </div>
    );
}

export default Home;