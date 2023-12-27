import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/App.css';
import Component2 from './component2';
import { createContext } from 'react';
export let userContext;

function Component1() {
    const [name, setName] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://api.quotable.io/random').then((res) => {
        console.log(res)
        setUser(res.data.author);
        })
    }, [])

    userContext = createContext();

    return (
        <userContext.Provider value={user}>
            <div className="container">
                <div className='sub-container'>
                    <input className='input-section' placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                    <Component2 />
                </div>
            </div>
        </userContext.Provider>

    );
}

export default Component1;
