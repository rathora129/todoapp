import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "" || task.length === 0) {
      window.alert("Please enter a task");
      return;
    }
    setTasks([...tasks, task]);

    setTask("");
  };
  //   console.log(tasks);
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    alert("Task deleted successfully");
  };
  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <div>
        <input
          placeholder="Enter todo name"
          name="task"
          value={task}
          onChange={handleTaskChange}
          className="border-2 border-gray-500 p-2 w-1/2"
        />
        <button onClick={handleAddTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((val, index) => (
          <div key={index}>
            <h1>{val}</h1>
            <button
              className="btn btn-secondary"
              onClick={() => handleDeleteTask(index)}
            >
              Delete task
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (tasks.length === 0) {
            alert("No tasks to clear");
            return;
          }
          setTasks([]);
          alert("All tasks cleared successfully");
        }}
      >
        clear All Tasks
      </button>
    </div>
  );
};

export default TodoList;
