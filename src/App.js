import React, { useState } from "react";
import './App.css';

//Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;


// Left Off: 17:00
