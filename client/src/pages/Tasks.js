import React from "react";
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Tasks() {
    return (
        <div className="row justify-items justify-content-around">   
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default Tasks;