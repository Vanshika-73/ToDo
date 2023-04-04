import React from 'react';
import Tasks from './components/Tasks'
import Welcome from './components/Welcome';
import {Routes,Route} from 'react-router-dom';
import Read from './components/Read';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
    </Routes> 
  )
}

export default App;