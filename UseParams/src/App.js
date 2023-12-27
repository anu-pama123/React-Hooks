import { useState } from 'react';
import './App.css';
import { useParams } from "react-router-dom";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const getCount1 = () => {
    console.log('------function')
    setCount1(count1+1)
  }

  const getCount2 = () => {
    console.log('------function')
    setCount2(count2+5)
  }

  const {id} = useParams()
  //if we have id the url this will print that id
  console.log(id)

  return (
      <div className="container">
        <div className='sub-container'>
          <button className='button' onClick={() => getCount2()}>count2 - {count2}</button>
          <button className='button' onClick={() => getCount1()}>count1 - {count1}</button>
        </div>
      </div>
  );
}

export default App;
