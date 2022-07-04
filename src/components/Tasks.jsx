import Task from "./Task";
import { useState,useEffect } from "react";
const Tasks = ({ newTask, removeTask}) => {

    const [show, setshow] = useState("show");

    const handleChange = (id) => {
        newTask[id]["isDone"] = !newTask[id]["isDone"]
        setshow("as") 
        localStorage.setItem("tasks",JSON.stringify(newTask));
    };
    useEffect(()=>setshow("tr"),[show])
    return (
        <>
        {show && <div className="tasks">
            {newTask.length === 0 ? "No Tasks to show.": newTask.map((e,i) => { return <Task {...e} key={i} id={i} removeTask={removeTask} handleChange = {handleChange}/> })}
        </div>}
        </>
        
    )
}

export default Tasks