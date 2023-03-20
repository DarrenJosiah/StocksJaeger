import React, {useState} from 'react'

function Navbar(props) {

  const [title, setNewTitle] = useState(props.textFromParent);
  const [counter, setCounter] = useState(0);

  const text = 'Hi'

  function clickHandler () {
    setNewTitle('Novel title')
  }

  function clickCounterHandler() {
    // setCounter((prevCount) => {
    //   prevCount + 1;
    // });
  }
  
  return (
    <div>
      <p>This is a title from Parent {props.textFromParent}</p>
      <p>This is a title from Parent. {title}</p>
      <p>This is a title from Parent. {title}</p>


       <button onClick={ clickHandler } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       This is a {}
      </button>
      <hr>
      </hr>
      <button onClick={ clickCounterHandler } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Button counter</button>
      <p>Count from {counter}</p>
    </div>
  )
}

export default Navbar;