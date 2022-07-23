function Task({ task, deleteTask, setReminder }) {
    return (
        <>
            <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => setReminder(task.id)}>
                <h1>
                    {task.text}
                </h1>
                <h2>{task.time}</h2>
                <p  className="delete-task" onClick={() => deleteTask(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}
                >DELETE TASK HERE!</p>
            </div>
        </>
    );
}

export default Task;