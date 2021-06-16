import axios from "axios";

export default {
  // Gets all books
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a book to the database
  saveTask: function(id, taskData) {
    return axios.post("/api/tasks" + id, taskData);
  },
  updateTask: function(id, taskData) {
    console.log(taskData);
    return axios.put("/api/tasks" + id, taskData);
  }
};
