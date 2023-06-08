import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from "./Menu";
import NewDish from "./NewDish";
import logo from "../logo.jpg"

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
[ ] Connect components w/ React Router
[ ] Build skeletons for each component
[ ] Build state 
[ ] Fetch (GET) data 
[ ] Build controlled form
[ ] Style
new titles for each new page - review custom components lesson

*/

{/* <h1>Garden of Eatin</h1>
<img src={logo} />  */}

function App() {
  return (
    <div className="App">
      <title>Garden of Eatin</title>
      <NavBar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/newdish">
          <NewDish />
        </Route>
        <Route path="*">
          <h1>404 not found :(</h1>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
