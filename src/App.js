import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  const [searchValue, setSearchvalue] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header searchValue={searchValue} setSearchvalue={setSearchvalue} />
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
