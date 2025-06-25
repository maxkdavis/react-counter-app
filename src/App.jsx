import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counterSteps, setCounterSteps] = useState(1);

  function incrementCount() {
    setCounter((prevCount) => prevCount + counterSteps);
  }

  function decrementCount() {
    setCounter((prevCount) => prevCount - counterSteps);
  }

  function resetCount() {
    setCounter(0);
  }

  function handleChange(e) {
    // console.log(e.target.value);
    if (e.target.value === '') {
      setCounterSteps(1);
      return;
    }
    setCounterSteps(+e.target.value); //'+' is a shorthand to convert the input value into a number
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
        <form>
          <input
            className='counterStepsInput'
            type='number'
            placeholder='Set counter steps'
            onChange={handleChange}
          ></input>
        </form>
      </div>
    </>
  );
}

export default App;
