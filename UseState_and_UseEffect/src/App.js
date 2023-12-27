import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {FormattedMessage} from 'react-intl'

function App() {
  // UseState hook usage
  const [name, setName] = useState(null);

  // UseEffect hook usage
  useEffect(() => {
    // Either axios or fetch can use for api integrations
    axios.get('https://api.quotable.io/random').then((res) => {
      console.log(res)
    })
    
    fetch('https://api.quotable.io/random').then((res) => {
      console.log(res)

    })
  }, [])

  return (
    <div className="container">
      <div className='sub-container'>
        <input className='input-section' placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        >
        </input>
        <div className='name-section'>My name is - {name}</div>
      </div>
    </div>
  );
}

export default App;
