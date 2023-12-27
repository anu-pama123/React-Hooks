import { useState } from 'react';
import './App.css';

import { useCallback } from 'react';
import { useMemo } from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const getCount1 = () => {
    setCount1(count1+1)
  }

  const getCount2 = () => {
    setCount2(count2+5)
  }

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }
  const calculation = useMemo(() => {
    expensiveCalculation(count1);
  },[count1])


  return (
      <div className="container">
        <div className='sub-container'>
          <button className='button' onClick={() => getCount2()}>count2 - {count2}</button>
          <button className='button' onClick={() => getCount1()}>count1 - {count1}</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
  );
}

export default App;
