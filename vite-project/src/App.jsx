import { useState } from 'react'

import './App.css'
import {Works} from './components'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Works /> 
      </div>
    </BrowserRouter>
  )
}

export default App
