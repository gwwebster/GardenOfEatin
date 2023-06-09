import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div id="about">
            <h2>Welcome!</h2>
            <p>
                Garden of Eatin is a restaurant dedicated to serving delicious, wholesome meals
                made with only the freshest ingredients. 

                While our menu is tried-and-true, we're always open to suggestions! 
                Please feel free to submit a new dish using the form on the <Link to="/newdish">New Dish</Link> page!
                <br />
                <br />
                <em>We can't get you to paradise, we can take your taste buds there.</em>
                <br />
                <br />
                Hope to see you soon!
            </p>
        </div>
    );
}

export default About;