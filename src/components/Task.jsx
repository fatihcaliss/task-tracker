import {TiTrash} from "react-icons/ti";


const Task = ({ task, date, removeTask, isDone, id, handleChange }) => {

    return (

        <div className="task"  onClick={()=> handleChange(id)} style = {{cursor:"pointer",textDecoration:isDone && "line-through"}}>
            <div className="deneme">
                <p>{task}</p>
                <p>{date}</p>  
            </div>
            <TiTrash size={40} onClick={() => removeTask(task)} style={{cursor:"pointer"}}/>
        </div>
    )
}

export default Task