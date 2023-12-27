import './App.css';
import { useReducer } from 'react';

const Reducer = (state, action) => {
    if(action.type == "INC") {
      return {age: state.age + 1}
    }
    else if(action.type == "DEC") {
      return {age: state.age - 1}
    }
    else if(action.type == "RESET") {
      return {age: state.age}
    }
}
function App() {  
  const initialState = { age: 42 };

  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
      <div className="container">
        <div className='sub-container'>
          <h1>Age: {state.age}</h1>
          <button className='button' onClick={() => dispatch({type: "INC"})}>INCREMENT</button>
          <button className='button' onClick={() => dispatch({type: "DEC"})}>DECREMENT</button>
          <button className='button' onClick={() => dispatch({type: "RESET"})}>RESET</button>
        </div>
      </div>
  );
}
export default App;
