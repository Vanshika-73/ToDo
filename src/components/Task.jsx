import React from 'react';
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckIcon from '@mui/icons-material/Check';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';
import './task.css';
function Task(props) {
  return (
    <div>
         <Paper className={(props.isComplete)?"done" :"notDone"} style={{backgroundColor:(props.isComplete)?"#a6daa6" :"#ffe453"}}>
            <p style={{fontSize:"18px",padding:"0px 20px"}}>{props.text}</p>
            <ButtonGroup variant="Outlined" aria-label="text button group">
              <Button onClick={()=>(props.done(props.id))}><CheckIcon/></Button>
              <Button onClick={()=>(props.undo(props.id))}><UndoIcon/></Button>
              <Button onClick={()=>(props.delete(props.id))}><DeleteIcon/></Button>
            </ButtonGroup>
          </Paper>
    </div>
  )
}

export default Task;