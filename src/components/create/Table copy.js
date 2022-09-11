import { Typography } from '@material-ui/core';
import {
 Alert, AlertTitle, DialogTitle, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Button, Stack
} from '@mui/material'
import React, {
  useEffect, useState
} from 'react'

/** imports */
import TableService from '../../services/TableService';


function TableComponent({ row, column, fillTable }) {

  const [unitary, setUnitary] = useState([]);
  const [rowCount, setRowCount] = useState([]);
  const [columnCount, setColumnCount] = useState([]);
  const [demand, setDemand] = useState([]);
  const [avalaible, setAvalaible] = useState([]);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false)

  const numberAllow = (e) => {
   
      if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
 
  }

  /****************recuperer cout unitaire********************** */
  const handleUnitary = (i, j, e) => {
    if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
    let array = unitary
    let value = parseInt(e.currentTarget.textContent)
    if(!value ){
      setError(true)
    }else {
      setError(false)
      array[i][j] = value
    setUnitary(array)
    }
   
    
  }

  /*****************recuperer valeur demandée*********************** */
  const handleDemand = (i, e) => {
    let array = demand
    let value = parseInt(e.currentTarget.textContent)
    if(!value ){
      setError(true)
    }else {
      setError(false)
array[i] = value
    setDemand(array)
    }
  }

  /**********************recuperer quanntité disponible ***********************************/
  const handleAvailable = (i, e) => {
    let value = parseInt(e.currentTarget.textContent)
    if(!value){
      setError(true)
    }else{
      setError(false)
    let array = avalaible
    array[i] =value
    setAvalaible(array)}
  }

  const handleClose = () => {
    setOpen(false)
  }

  const minili = () => {
    if(!error){
      let sum1 = TableService.itemSumm(demand)
      let sum2 = TableService.itemSumm(avalaible)
      if(sum1 != sum2){
        console.log(sum2)
        console.log(sum1)

        setOpen(true)
      }else{
         fillTable(unitary, demand, avalaible)
      }
      
    }
   
   
  }

  /****** useEffect comme component didmount */
  useEffect(() => {
    /***initialize array */
    let array = TableService.fillzero2D(column, row);
    let rowIndex = TableService.rowIndex(row);
    let columnCount = TableService.columnIndex(column);
    let avalaiblearray = TableService.fillzero(row);
    let demandarray = TableService.fillzero(column);
    setUnitary(array)
    setRowCount(rowIndex)
    setColumnCount(columnCount)
    setAvalaible(avalaiblearray)
    setDemand(demandarray)
  }, [])


  return (
<Grid container className='card'
      boxShadow="0 14px 14px 0 rgba(0,0,0,0.2),0 30px 60px 0 rgba(0,0,0,0.22)!important;"
      borderRadius={2} spacing={2} padding={2} marginTop={10}
      alignItems="center" minHeight={500}>
      <Stack xs={4}>
        <table className='table table-bordered'>
          <tbody >
          {/*******************afficher nombre des lignes************ */}
            {
              rowCount.map(
                item => {
                  return <tr className='text-info h6'><td>{item}</td>  </tr>
                }
              )
            }
          </tbody>
        </table>
      </Stack>
      <Grid xs={8} direction="row">
        <table class="table table-bordered">
          <thead>
            <tr>
           { /*****************afficher nombre des colonnes********************************* */}
              {
                columnCount.map(
                  item => {
                    return <th className='text-info h6'>{item}</th>
                  }
                )
              }
            </tr>
          </thead>
          <tbody>
          {/********************************afficher cout unitaire**************************/}
            {
              unitary.map(
                (item, i) => {
                  return <tr key={i}>
                    {item.map((subItem, j) => {

                      return <td style={{width:"50px"}} contenteditable="true" key={j} onKeyPress={(e) => {if(isNaN(String.fromCharCode(e.which))) e.preventDefault()}} onInput={(e) => handleUnitary(i, j, e)}>{subItem}</td>
                    })

                    }</tr>
                }
              )
            }<tr>
            {/*****************************afficher quanntité demander********************* */}
              {
                demand.map(
                  (item, i) => {
                    return <td className='text-danger table-secondary' contenteditable="true" onKeyPress={(e) => {if(isNaN(String.fromCharCode(e.which))) e.preventDefault()}} key={i} onInput={(e) => handleDemand(i,e)}>{item}</td>
                  }
                )
              }</tr>
          </tbody>
        </table>
      </Grid>
      <Grid xs={1}>
        <table className='table'>
          <tbody >
        {  /***********************afficher quanntité demander */}
           
            {
              avalaible.map(
                (item, i) => {
                  return <tr width='2px'><td className='text-warning table-secondary' onKeyPress={(e) => {if(isNaN(String.fromCharCode(e.which))) e.preventDefault()}} contenteditable="true" key={i} onInput={(e) => handleAvailable(i,e)}>{item}</td></tr>
                }
              )
            }
          </tbody>
        </table> 
      </Grid>
      <Grid item xs={4} textAlign={"center"}>
       { error && <Alert severity="error">
      <AlertTitle>Veuillez remplir <strong>le champ vide</strong></AlertTitle>   
    </Alert> }
    
    </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Button variant="contained" elevation={24} size="large" sx={{ margin: '20px', height: '40px', borderRadius: '20px', width: '100px' }} color='info' onClick={minili} >Minili</Button>
        <Button variant="contained" elevation={24} size="large" sx={{ margin: '20px', height: '40px', borderRadius: '20px', width: '100px' }} color='info' >BHammer</Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Typography variant="h6">La somme de quantité demandée doit être égale à la somme de quantité disponible </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" elevation={24} size="large"  color='info' onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default TableComponent