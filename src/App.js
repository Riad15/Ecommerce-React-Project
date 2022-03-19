import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manebar from './compunent/menubar/Menubar';
import Products from './compunent/Products/Products';
import { useEffect, useState } from 'react';
import Menubar from './compunent/menubar/Menubar';



function App() {
  const [count, setCount] = useState(0);
  const addToCard = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Products addToCard={addToCard} ></Products>
    </div>
  );
}

export default App;
