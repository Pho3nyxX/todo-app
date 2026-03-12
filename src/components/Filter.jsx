function Filter({ filter, setFilter }) {
    return (
        <div className="filterBtns">
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
            >
                All
            </button>

            <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
            >
                Completed
            </button>

            <button
                className={filter === "active" ? "active" : ""}
                onClick={() => setFilter("active")}
            >
                Active
            </button>
        </div>
    );
}

export default Filter;