import Header from './components/Header/Header';
import './App.css';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <Categories />
            <Sort />
          </div>
          <div className="contentPizzaBlock">
            {items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
