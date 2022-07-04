import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {

  const [newTask,setNewTask] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

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
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(newTask));
  }, [newTask])
  

  return (
    <>
    <Header getTasks={getTasks}/>
    <Tasks newTask={newTask} removeTask={removeTask} />
    </>
  );
}

export default App;
