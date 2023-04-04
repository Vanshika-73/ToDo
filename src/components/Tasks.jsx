import React from "react";
import {Container} from "@mui/material";
import {useState,useRef} from "react";
import Task from './Task';
import './tasks.css';
import {InfinitySpin } from 'react-loader-spinner';
function Tasks() {
  const hei=useRef();
  const [loading,setLoading]=useState("true");
  let [task, setTasks] = useState([]);
  setTimeout(() => {
    setLoading("false");
  },800);
  function createTask(e) {
    if(task.length<=5){
      hei.current.setAttribute('class',"tasks_main");
    }
    else{
      hei.current.removeAttribute('class',"tasks_main");
      hei.current.setAttribute('class',"task_main");
    }
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
    if(task.length<=5){
      hei.current.setAttribute('class',"tasks_main");
    }
    else{
      hei.current.removeAttribute('class',"tasks_main");
      hei.current.setAttribute('class',"task_main");
    }
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
    <div className="tasks_main" ref={hei}>
      <h1 id="tasks_heading">My To-Do List</h1>
      <div className="container1" >
        <input type="text"
        className="input_field my2"
          placeholder="✍enter your task"
          variant="outlined"
          onKeyUp={createTask}
        />
      </div>
      <Container  maxWidth="sm" sx={{mb:4}}>
        {task.map((data) => (
         <Task text={data.task}
         isComplete={data.isComplete}
         key={data.id}
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
