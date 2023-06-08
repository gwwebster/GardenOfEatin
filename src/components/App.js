import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from "./Menu";
import logo from "../logo.jpg"

/*
Component hierarchy

└── App
    ├── NavBar (React Router)
    ├── Home
    ├── About
    └── Menu
        ├── Dish
        └── NewDish (need to update state after POST)

Fetch
  POST in NewDish
  GET (useEffect) in 

State
(in Menu)
  fetch menu data
  use to render each dish in Dish

(in NewDish)
  formData
    dishName
    ingredients
    price

STEPS:
[X] Build out db.json
[ ] Build skeletons for each component
[ ] Build state 
[ ] Fetch (GET) data 
[ ] Build controlled form
[ ] Connect components w/ React Router
[ ] Style
new titles for each new page - review custom components lesson

*/

function App() {
  return (
    <div className="App">
      <title>Garden of Eatin</title>
      <header className="logo">Garden of Eatin</header>
      <img src={logo} />
      <NavBar />
      <Home />
      <About />
      <Menu />
    </div>
  );
}

export default App;
