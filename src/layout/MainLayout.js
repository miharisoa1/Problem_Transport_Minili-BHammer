import React, { Fragment, useState } from 'react'
import Modal from '../components/Modal';
import {Button, Stack,Grid, AppBar, Toolbar, Typography} from '@mui/material'

import Sidebar from './Sidebar';

function MainLayout({ children, modalShow }) {

  return (
    <>
    <AppBar  disableElevation elevation={0} sx={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
    <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
   Transportation Resolving
  </Typography>
      <Typography variant="h6" component="div">
        Scroll to see button
      </Typography>
    </Toolbar>
  </AppBar>
    
    <Stack container className="fragment">  
    <Stack className="fragment-content">  
      {children}
    </Stack>
    </Stack>
 

    </>
  )
}

export default MainLayout;