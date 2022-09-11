import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



/***import component */
import Main from './components/Main';
import Acceuill from './components/Acceuill';

function App() { 
  const [home, setHome] = useState(true);

 const hiddenHome = () => {
    setHome(false)
  }

    return <div className='App'>

    <BrowserRouter>
    
      <Main/>
   
    
    </BrowserRouter>
    </div>
  
    
  

}

export default App;
