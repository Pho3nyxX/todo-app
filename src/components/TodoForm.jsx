import { useState } from "react";

function TodoForm({ setTodos }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) return;

        setTodos((prev) => [
            ...prev,
            {
                id: Date.now(),
                text: task,
                completed: false,
            }
        ])

        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Add task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit" className="addBtn">+</button>
        </form>
    )
}
export default TodoForm;