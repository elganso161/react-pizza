import Header from './components/Header/Header';
import './App.css';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import pizzas from './assets/pizzas.json';

function App() {
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
            {pizzas.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
