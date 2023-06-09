import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from "./Menu";
import NewDish from "./NewDish";

/*
Component hierarchy

└── App (dish state lives here)
    ├── NavBar (React Router)
    ├── Home
    ├── About
    ├── NewDish (need to update state after POST)
    └── Menu
        └── Dish 

(state in NewDish)
  formData
    dishName
    ingredients
    price

STEPS:
[X] Build out db.json
[X] Connect components w/ React Router
[ ] Build skeletons for each component
[ ] Build state 
[ ] Fetch (GET) data 
[ ] Build controlled form
[ ] Style

new titles for each new page - review custom components lesson

*/

function App() {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/dishes')
      .then(r => r.json())
      .then(data => setDishes(data))

  }, []);

  return (
    <div className="App">
      <title>Garden of Eatin</title>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="/newdish" element={<NewDish onAddDish={handleNewDish} />} />
        <Route path="*" element={<h1>404 not found :(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
