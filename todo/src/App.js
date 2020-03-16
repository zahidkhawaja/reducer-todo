import React, { useReducer, useState } from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTaskText, setNewTaskText] = useState("");
  console.log("INITIAL STATE", initialState);
  console.log("NEW STATE", state);

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
       Todo Project
      </header>
      <div className = "tasks">
        {state.toDoItems.map(item => 
        <div id = {item.id} className = {item.completed ? "completed" : ""} onClick = {() => dispatch({ type: "MARK_COMPLETED", payload: item})}> 
        <p>{item.item} {item.id}</p>
        </div>
        )}
        </div>
        <input value = {newTaskText} onChange = {handleChanges} ></input>
        <button onClick = {() => dispatch({ type: "ADD_TASK", payload: newTaskText })}>Add Task</button>
        <br/>
        <button onClick = {() => dispatch({ type: "REMOVE_COMPLETED", payload: state})}>Clear Completed</button>
    </div>
  );
}

export default App;
