import React from 'react';
import Tasks from './components/Tasks'
import Welcome from './components/Welcome';
import {Routes,Route} from 'react-router-dom';
import Read from './components/Read';
function App() {
  return (
    // <Welcome/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
    </Routes> 
  )
}

export default App;