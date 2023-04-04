import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router';
import './read.css';
import {InfinitySpin } from 'react-loader-spinner';
function Read() {
  const navi= useNavigate();
  const [loading,setLoading]=useState("true");
  console.log(loading);
  setTimeout(() => {
    setLoading("false");
  },800);
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
      <div className='read'>
        <div className='read_box'>
        <h1 id='read_heading'>INSTRUCTIONS</h1>
        <div>
          <ul className='read_list'>
            <li>Add your daily to do tasks in a list.</li>
            <li>Click on tick when you complete your task & it will turn into green.</li>
            <li>You can also undo the task if not completed!</li>
            <li>This is temporary daily tasking list, hence your lists are not saved somewhere!</li>
            <li>When refreshed the web page, your list will also get refreshed!</li>
          </ul>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button className='read_button' onClick={()=>navi('/tasks')}>Create list</button>
        </div>
        </div>
      </div>
    )
  }
}

export default Read;