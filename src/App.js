import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Button from './components/Button';
import Home from './components/Home';

function App() {
  
  const textFromParent = 'Parent is here';
  
  return (
    <div className="App">
    
     <Navbar />

     {/* Delete */}
     {/* <Button textFromParent={textFromParent} /> */}
    <Home />
   
    </div>
  );
}

export default App;
