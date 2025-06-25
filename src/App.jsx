import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCount() {
    setCounter((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    setCounter((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCounter(0);
  }

  return (
    <>
      <div className='counter-container'>
        <h1>React Counter App</h1>
        <span className='counter'>{counter}</span>
        <div className='btn-container'>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
          <button onClick={resetCount}>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
