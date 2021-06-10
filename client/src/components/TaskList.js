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
      <table className="table mt-5">
        <tbody>
          {tasks.map(task => (
                <tr key={task._id}>
                  <td>{task.taskName}</td>
                </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TaskList;