import { use, useState } from "react";

function TodoItem({ todo, setTodos }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const deleteTask = () => {
        setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    }

    const toggleComplete = () => {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const saveEdit = () => {
        if (!editedText.trim()) return;

        setTodos((prev) =>
            prev.map((item) =>
                item.id === todo.id ? { ...item, text: editedText } : item
            )
        )

        setIsEditing(false);
    }

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />

                    <div className="actonBtns">
                        <button onClick={saveEdit}
                            className="save btn"
                        >
                            &#10003;
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="cancel btn"
                        >
                            &#10060;
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="todoContent">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={toggleComplete}
                        />

                        <span className={todo.completed ? "completed" : ""}>
                            {todo.text}
                        </span>
                    </div>

                    <div className="actonBtns">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="edit btn"
                        >
                            &#128393;
                        </button>

                        <button
                            onClick={deleteTask}
                            className="delete btn"
                        >
                            x
                        </button>
                    </div>
                </>
            )}
        </li>
    )
}
export default TodoItem;