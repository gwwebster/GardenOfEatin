import React, { useState, useEffect } from 'react';
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
*/

function App() {

  const [dishes, setDishes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/dishes')
      .then(r => r.json())
      .then(data => {
        setDishes(data)
        setIsLoaded(true)
      })
  }, []);

  function handleNewDish(newDish) {
    setDishes([...dishes, newDish]);
  }

  return (
    <div className="App">
      <title>Garden of Eatin</title>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu dishes={dishes} isLoaded={isLoaded} />} />
        <Route path="/newdish" element={<NewDish onAddDish={handleNewDish} />} />
        <Route path="*" element={<h1 className="error-page">404 not found :(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
