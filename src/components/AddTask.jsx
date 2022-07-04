import { useState } from "react";

const AddTask = ({ getTasks }) => {
    const [task, setTask] = useState({
        task: "",
        date: "",
        isDone:false
    })
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value
        }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.task === "") {
            alert("please enter a task");
        } else {
            getTasks(task);
            setTask({
                task: "",
                date: "",
                isDone:false
            })
        }
    }
    return (
        <form className="inputs" onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input type="text" placeholder="Add Task" id="task" onChange={handleChange} value={task.task} />
            <label htmlFor="date">Add Date ⏳ Time</label>
            <input type="datetime-local" id="date" onChange={handleChange} value={task.date} />
            <button>Save Task</button>
        </form>
    )
}

export default AddTask