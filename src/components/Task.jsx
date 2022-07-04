import {TiTrash} from "react-icons/ti";
import { useState } from "react";

const Task = ({ task, date, removeTask }) => {
    const [lineStyle, setlineStyle] = useState(false);

    const handleChange = () => {
        setlineStyle(!lineStyle);
    };
    
    return (
        // <div className="task"  onClick={()=> setlineStyle(!lineStyle)} style = {{textDecoration:lineStyle && "line-through"}}>
        <div className="task"  onClick={handleChange} style = {{cursor:"pointer",textDecoration:lineStyle && "line-through"}}>
            <div className="deneme">
                <p>{task}</p>
                <p>{date}</p>  
            </div>
            <TiTrash size={40} onClick={() => removeTask(task)} style={{cursor:"pointer"}}/>
        </div>
    )
}

export default Task