import { useCallback, useState } from 'react';
import './App.css';

import ComponentA from './components/ComponentA';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const getCount2 = useCallback(() => {
    setCount1(count1+1)
  },[count1])

  return (
      <div className="container">
        <div className='sub-container'>
          <ComponentA data={getCount2} value={count1} />
          <button className='button' onClick={() => setCount2(count2+5)}>{count2}</button>
        </div>
      </div>
  );
}

export default App;
