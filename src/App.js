import Header from './components/Header/Header';
import './App.css';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import { useEffect, useState } from 'react';
import PizzaBlockSkeleton from './components/PizzaBlock/PizzaBlockSkeleton';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
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
            {isLoading
              ? [...new Array(6)].map((_, index) => {
                  return <PizzaBlockSkeleton key={index} />;
                })
              : items.map((obj) => {
                  return <PizzaBlock key={obj.id} {...obj} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
