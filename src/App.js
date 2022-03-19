import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './compunent/Products/Products';
import { useEffect, useState } from 'react';
import Menubar from './compunent/menubar/Menubar';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [count, setCount] = useState(0);
  const addToCard = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Products addToCard={addToCard} ></Products>
    </div>
  );
}

export default App;
