import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { createContext } from 'react';

export const searchContext = createContext();

function App() {
  const [searchValue, setSearchvalue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <searchContext.Provider value={{ searchValue, setSearchvalue }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </searchContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
