import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from "./Menu";
import NewDish from "./NewDish";

/*
Component hierarchy

└── App
    ├── NavBar
    ├── Home
    ├── About
    ├── NewDish
    └── Menu
        └── Dish 

STEPS:
[X] Build out db.json
[X] Connect components w/ React Router
[X] Build skeletons for each component
[X] Build state 
[X] Fetch (GET) data 
[X] Build controlled form
[ ] Style

*/

function App() {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/dishes')
      .then(r => r.json())
      .then(data => setDishes(data))

  }, []);

  function handleNewDish(newDish) {
    const newDishes = [...dishes, newDish]
    setDishes(newDishes);
  }

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
