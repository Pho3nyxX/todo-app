import { useState, useEffect } from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className='app'>
      <h1>Todo List</h1>

      <TodoForm setTodos={setTodos} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  )
}

export default App
