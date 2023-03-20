import {Routes, Route, Navigate} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ETF from './components/ETF/ETF';
import Crypto from './components/Crypto/Crypto';
import Forex from './components/Forex/Forex';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/ETF' exact element={<ETF />} />
        <Route path='/Crypto' exact element={<Crypto />} />
        <Route path='/Forex' exact element={<Forex />} />
      </Routes>
    </div>
  );
}

export default App;
