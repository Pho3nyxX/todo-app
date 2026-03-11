function TodoItem({ todo, setTodos }) {
    const deleteTask = () => {
        setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    }

    return (
        <li>
            {todo.text}
            <button onClick={deleteTask} className="deleteBtn">x</button>
        </li>
    )
}
export default TodoItem;