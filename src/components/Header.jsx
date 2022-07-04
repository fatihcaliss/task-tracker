import { useState } from "react";
import AddTask from "./AddTask";

const Header = ({getTasks}) => {

    const [showAddTask, setShowAddTask] = useState(true);

    return (
        <section className="header">
            <h1>TASK TRACKER</h1>
            <button onClick={() => setShowAddTask(!showAddTask)}>Show Add Task Bar</button>
            {showAddTask && <AddTask getTasks={getTasks}/>}
        </section>
    )
}

export default Header