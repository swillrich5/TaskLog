import React, { useState, useEffect } from "react";
import API from '../utils/API';



function TaskList() {

  const [tasks, setTasks ] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadTasks()
  }, [])

  // Loads all books and sets them to books
  function loadTasks() {
    API.getTasks()
      .then(res => 
        setTasks(res.data)
      )
      .catch(err => console.log(err));
  };


  return (
    <div className="col-4">
      <table className="table table-striped mt-5">
        <tbody>
          {/* use conditional rendering to toggle displaying closed tasks */}
          {tasks.map(task => (
                <tr key={task._id}>
                  <td className="mx-0 pr-0">{task.taskPriorityLetter}</td>
                  <td className="mx-0 px-0">{task.taskPriorityNum}</td>
                  <td>{task.taskName}</td>
                </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TaskList;