import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

/*****import layout */
import MainLayout from './layout/MainLayout';
import Acceuill from './components/Acceuill';


function MainRoute({ component, ...rest }) {

  
  return (
    <MainLayout>
    <Routes>
   
    <Route {...rest} element={component} />
  </Routes>
    </MainLayout>
    
    
  )
}

export default MainRoute