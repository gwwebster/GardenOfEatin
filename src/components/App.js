import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Menu from "./Menu";

/*
Component hierarchy

└── App
    ├── NavBar (React Router)
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
new titles for each new page

*/

function App() {
  return (
    <div className="App">
      <title>Garden of Eatin</title>
      <header className="logo">Garden of Eatin</header>
      <NavBar />
      <About />
      <Menu />
    </div>
  );
}

export default App;
