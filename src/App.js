import Header from './components/Header/Header';
import './App.css';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';

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
            <PizzaBlock title="Vegan" price={500} />
            <PizzaBlock title="Mexico" price={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
