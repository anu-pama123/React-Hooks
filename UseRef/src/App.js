import { useState } from 'react';
import './App.css';

import { useRef } from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const inputElement = useRef();
  const clickInputElement = useRef();

  const getCount1 = () => {
    setCount1(count1+1)
    inputElement.current.focus();
  }

  const getCount2 = () => {
    setCount2(count2+5)
    clickInputElement.current.click();
  }

  return (
    <div className="container">
      <div className='sub-container'>
        <input ref={inputElement} placeholder='Enter a value'></input>
        <button className='button' onClick={() => getCount1()} ref={clickInputElement}>count1 - {count1}</button>
        <button className='button' onClick={() => getCount2()}>count2 - {count2}</button>
      </div>
    </div>
  );
}

export default App;
