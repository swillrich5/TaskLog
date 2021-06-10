import React, { useState } from "react";
import API from "../utils/API";

function Taskform(props) {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [priorityNumValue, setPriorityNumValue] = useState("");
    const [priorityLetterValue, setPriorityLetterValue] = useState("");

      // Handles updating component state when the user types into the input field
    function handleTaskNameChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        setTaskName(event.target.value);
    };

    function handleTaskDescriptionChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        setTaskDescription(event.target.value);
    };

    function handlePriorityNumValueChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        setPriorityNumValue(event.target.value);
    };

    function handlePriorityLetterValueChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        setPriorityLetterValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("In handleFormSubmit()");
        if (taskName && taskDescription) {    
            API.saveTask({
                taskName: taskName,
                taskDescription: taskDescription,
                taskPriorityLetter: priorityLetterValue,
                taskPriorityNum: priorityNumValue,
                closed: 'false'
            })
                .then(res => {
                    console.log("Task Saved");            
                    var frm = document.querySelector("#task-form");
                    frm.submit();
                    frm.reset();


                })
                .catch(err => console.log(err));
        }
    }


    return (
        <div className="col-4">
            <form id="task-form">
                <h2 className="mt-3 text-center">Task Entry</h2>
                <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" 
                           className="form-control" 
                           name={taskName} 
                           onChange={handleTaskNameChange}
                           id="task-name" 
                           aria-describedby="taskName" 
                           placeholder="Enter Task Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDescription">Description</label>
                    <textarea
                           className="form-control" 
                           name={taskDescription} 
                           onChange={handleTaskDescriptionChange}
                           id="taskDescription" 
                           placeholder="Description" 
                           rows="4"></textarea>
                </div>
                <div className="form-group">

                    <div className="row">
                        <div className="col">
                         <label htmlFor="priorityNumValue">Priority</label>
                        </div>
                        <div className="col">
                            <select className="form-select" 
                                id="priorityNumValue" 
                                name="priorityLetterValue"
                                onChange={handlePriorityLetterValueChange}>
                                <option ></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" 
                                id="priorityNumValue" 
                                name="priorityNumValue"
                                onChange={handlePriorityNumValueChange}>                                
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>


                </div>

                <div>
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Taskform;