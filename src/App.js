import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import ETF from './components/ETF/ETF';
import Crypto from './components/Crypto/Crypto';
import Forex from './components/Forex/Forex';

function App() {
  
  const textFromParent = 'Parent is here';
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Delete */}
        {/* <Button textFromParent={textFromParent} /> */}
        <Route path='/Home' exact element={<Home />} />
        <Route path='/ETF' exact element={<ETF />} />
        <Route path='/Crypto' exact element={<Crypto />} />
        <Route path='/Forex' exact element={<Forex />} />
      </Routes>
    </div>
  );
}

export default App;
