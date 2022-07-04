import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [newTask,setNewTask] = useState([])

  const removeTask = (task) => {
    const filtered = newTask.filter((e) => e.task !== task);
    setNewTask(filtered);
  }
  const getTasks = (task) => {
    if((newTask.filter((e)=> e.task === task.task)).length !== 0){
      alert("already exist")
    }else {
          setNewTask([
      ...newTask, {...task}
    ])
    }
  }
  return (
    <>
    <Header getTasks={getTasks}/>
    <Tasks newTask={newTask} removeTask={removeTask}/>
    </>
  );
}

export default App;
