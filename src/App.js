import { useState } from 'react';

import './App.css';
import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [listTasks, setListTasks] = useState(
    [
      {
        id: 1,
        text: "Do homework",
        time: "20/07/2022 19:30",
        reminder: true,
      },
      {
        id: 2,
        text: "Code React todoApp",
        time: "20/07/2022 19:30",
        reminder: false,
      },
      {
        id: 3,
        text: "Traing yolov5 2d detection model",
        time: "20/07/2022 19:30",
        reminder: true,
      },
      {
        id: 4,
        text: "Study React",
        time: "20/07/2022 19:30",
        reminder: true,
      },
    ]
  );
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setListTasks([...listTasks, newTask]);
  }
  // delete task
  const deleteTask = (id) => {
    setListTasks(listTasks.filter((task) => task.id !== id));
  };
  // set reminder
  const setReminder = (id) => {
    setListTasks(
      listTasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header title="bootcamp todoapp" year="2022" />
        <Routes>
          <Route path="/add" element={
            <>
              <AddTask onAdd={addTask} />
              {Tasks.length > 0 ? (
              <Tasks
                tasks={listTasks}
                deleteTask={deleteTask}
                setReminder={setReminder}
              />
            ) : (
              "No tasks found"
            )}
            <Link to='/'> About Page</Link>
            </>
          }
          />
          <Route path="/" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
