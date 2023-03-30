import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Crypto from './components/Crypto/Crypto';
import CryptoItem from './components/Crypto/CryptoItem';
import ETF from './components/ETF/ETF';
import Forex from './components/Forex/Forex';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/crypto' exact element={<Crypto />} />
        <Route path='/crypto' element={<CryptoItem />}>
            <Route path=':cryptoName' element={<CryptoItem />} />
        </Route>
        <Route path='/etf' exact element={<ETF />} />
        <Route path='/forex' exact element={<Forex />} />
      </Routes>
    </div>
  );
}

export default App;
