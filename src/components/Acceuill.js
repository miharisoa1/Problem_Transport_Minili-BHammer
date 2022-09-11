import React from 'react'
import {Button, Grid, Stack, Typography} from '@mui/material'
import Img from '../assets/mind_map.svg'
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";


function Acceuill({showModal, showDefault, homeHidden}) {
  return (
   <Grid container className='home'  direction='row'>
   <Grid xs={12}>
  
   </Grid>
   <Grid item xs={6} paddingLeft={20} paddingTop={5}>
   <Grid item  >
    <Typography variant="h3">Resoudre </Typography>
    <Typography variant="h3">les problèmes de transport</Typography>
    <Typography variant="p" >Minimiser le coût de la distribution d'un produit de M sources à N destinations</Typography><br></br>
    <Typography variant="p" >avec la methode de <span> MINILI </span> et <span>BHAMMER</span></Typography><br></br>
    <Button variant="contained" elevation={24} size="large" sx={{margin:'20px', height:'40px',borderRadius: '20px'}} color='info' onClick={showModal}>créer un tableau</Button>
    <Link to="/app/default"><Button variant="outlined" elevation={24}   color='info' sx={{borderRadius: '20px', height:'40px'}} >par Défaut</Button>  </Link>
    </Grid>
   </Grid>
  
   <Grid item  xs={4} >
   <img src={Img} loading="lazy" width={350} height={300}></img>
   </Grid> 
  
   </Grid>
  )
}

export default Acceuill