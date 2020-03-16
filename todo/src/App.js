import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
       Todo Project
      </header>
      <div className = "tasks">
        {state.map(item => 
        <p>{item.item}</p>
        )}
        </div>
        <input></input>
        <button>Add Task</button>
        <br/>
        <button>Clear Completed</button>
    </div>
  );
}

export default App;
