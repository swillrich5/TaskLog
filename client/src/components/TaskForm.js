import React, {useState} from "react";

function Taskform(props) {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [priorityNumValue, setPriorityNumValiue] = useState("");

      // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("In handleFormSubmit()");
    }


    return (
        <div className="col-5">
            <form>
                <div className="form-group">
                    <label for="taskName">Task</label>
                    <input type="text" 
                           className="form-control" 
                           name={taskName} 
                           onChange={handleInputChange}
                           id="task-name" 
                           aria-describedby="taskName" 
                           placeholder="Enter Task Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <textarea
                           className="form-control" 
                           name={taskDescription} 
                           onChange={handleInputChange}
                           id="taskDescription" 
                           placeholder="Description" 
                           rows="4"></textarea>
                </div>
                <div class="form-group">
                    <label for="priorityNumValue">Example multiple select</label>
                    <select class="form-control" 
                            id="priorityNumValue" 
                            name={priorityNumValue}
                            onChange={handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>}
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div>
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Taskform;