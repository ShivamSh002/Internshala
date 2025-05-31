import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import JobBlock from './Components/JobBlock/JobBlock'
import Chip from '@mui/material/Chip';

const App = () => {
  return (
    <div><NavBar/>
     <div><h1>Latest Summer Internships</h1>
         <Chip label="119 Total Internships "  sx={{fontSize:"16px",fontWeight :500}} />
     </div>
     <div><JobBlock/></div>
    </div>
  )
}

export default App