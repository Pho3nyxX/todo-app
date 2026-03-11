import { useState } from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import Filter from "./components/Filter";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className='app'>
      <h1>Todo List</h1>

      <TodoForm setTodos={setTodos} />
      {/* <Filter filter={filter} setFilter={setFilter} /> */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
