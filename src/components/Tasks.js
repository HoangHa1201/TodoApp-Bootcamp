import Task from './task'
function Tasks({tasks,deleteTask,setReminder}) {
    // cho dữ liệu vào tasks
    return (
        <div>
            {tasks.map((task) =>{
                return <Task 
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            setReminder={setReminder}
                             />
            })}
        </div>
    );
}

export default Tasks;