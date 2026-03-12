import { useState } from "react";
import generateId from "../utils/generateId";

function TodoForm({ setTodos }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) return;

        setTodos((prev) => [
            ...prev,
            { id: generateId(), text: task, completed: false },
        ]);

        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Add task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit" className="add btn">+</button>
        </form>
    )
}
export default TodoForm;