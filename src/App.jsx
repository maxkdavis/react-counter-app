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
          <button onClick={incrementCount}>
            <ion-icon name='add-circle-outline'></ion-icon>
          </button>
          <button onClick={decrementCount}>
            <ion-icon name='remove-circle-outline'></ion-icon>
          </button>
          <button onClick={resetCount}>
            <ion-icon name='refresh-circle-outline'></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
