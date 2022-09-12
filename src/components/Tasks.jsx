import React from "react";
import Container from "@mui/material/Container";
import {useState} from "react";
import Task from './Task';
import './tasks.css';
import {InfinitySpin } from 'react-loader-spinner';

function Tasks() {
  const [loading,setLoading]=useState("true");
  let [task, setTasks] = useState([]);
  setTimeout(() => {
    setLoading("false");
  },800);
  function createTask(e) {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setTasks([
        { id: task.length + 1, task: e.target.value, isComplete: false },
        ...task
      ]);
      e.target.value=" "; 
    }
  }
  function taskDone(id){
    let cloneArr=task;
    let index=cloneArr.findIndex((item)=>item.id===id);
    if (cloneArr[index]) cloneArr[index].isComplete = true;
    console.log(cloneArr);
    setTasks([...cloneArr]);
  }
  function taskUndo(id){
    let cloneArr=task;
    let index=cloneArr.findIndex((item)=>item.id===id);
    if (cloneArr[index]) cloneArr[index].isComplete = false;
    console.log(cloneArr);
    setTasks([...cloneArr]);
  }
  function taskDelete(id){
    let cloneArr=task;
    let index=cloneArr.findIndex((item)=>item.id===id);
    if (cloneArr[index]) cloneArr.splice(index, 1);;
    console.log(cloneArr);
    setTasks([...cloneArr]);
  }
  if(loading==='true'){
    return(
      <div style={{display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"}}><InfinitySpin 
      width='200'
      color="#A10035"
    /></div>
    )
  }
  else{
  return (
    <div className="tasks_main">
      <h1 id="tasks_heading">My To-Do List</h1>
      <Container className="container1" maxWidth="sm">
        <input type="text"
        className="input_field my2"
          placeholder="✍enter your task"
          // fullWidth
          variant="outlined"
          onKeyUp={createTask}
          
        />
      </Container>
      <Container  maxWidth="sm" >
        {task.map((data) => (
         <Task text={data.task}
         isComplete={data.isComplete}
         id={data.id}
         done={taskDone}
         undo={taskUndo}
         delete={taskDelete}
         /> 
        ))}
      </Container>
    </div>
  );
}}

export default Tasks;
