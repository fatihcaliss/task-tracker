import Task from "./Task";
import { useState } from "react";

const Tasks = ({ newTask, removeTask }) => {

    return (
        <div className="tasks">
            {newTask.length === 0 ? "No Tasks to show.": newTask.map((e,i) => { return <Task {...e} key={i} id={i} removeTask={removeTask}/> })}
        </div>
    )
}

export default Tasks