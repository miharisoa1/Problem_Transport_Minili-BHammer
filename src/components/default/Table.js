import React, {useState, useEffect} from 'react'
import { TableContainer, 
    Table, TableHead,
     TableBody, TableRow, 
    TableCell, Paper, Grid , Button, TableFooter} from '@mui/material'

/** imports */
import DefaultTable from '../../services/DefaultTable';

function TableDefault() {
    /** default table */
    const [unitary, setUnitary] = useState(DefaultTable.unitary);
    const [avalaible, setAvalaible] = useState([]);
    const [demand, setDemand] = useState([]);
    const [rowCount, setRowCount] = useState([]);
    const [alphabet, setAlphabet] = useState([]);



    const item = () => {
        for (let i = 0; i < unitary.length; i++) {
            const element = unitary[i];
           return <p>element</p> 
        
       }
    }

    useEffect(() => {
      let array = []; 
      let alpha = [];
      for (let index = 0; index < demand.length; index++) {
        array.push(index) 
      }

      for (let index = 0; index < avalaible.length; index++) {
        alpha.push(DefaultTable.alphabet[index]); 
      }

      setAlphabet(alpha)
      setRowCount(array)
    }, [])

  return (
    <Grid container my={20} direction='row' justifyContent="center">
    <Grid xs={2}>
    {
      alphabet.map(
        item => {
          return <TableRow><TableCell sx={{color:'#66ccff',fontSize:"12px"}}>{item}</TableCell> </TableRow>             
        }       
      )
     }
   </Grid>
    <Grid item  textAlign={"center"} xs={8}  component={Paper}>
    <TableContainer>
    <Table arial-label='simple table'>
      <TableHead>
      <TableRow>
   
      {
       rowCount.map(
         item => {
           return <TableCell sx={{color:'#66ccff',fontSize:"12px"}}>{item}</TableCell>              
         }       
       )
      }
      </TableRow>
      </TableHead>
      <TableBody>
    
      {
        unitary.map(
          item => {
            return <TableRow>{item.map(i =>{
              return <TableCell>{i}</TableCell>
              })
            
            }</TableRow>              
          }       
        )
       }
      
      </TableBody>
     
      <TableRow>
   
      {
       demand.map(
         item => {
           return <TableCell sx={{color:'#993333',fontSize:"12px"}}><h5>{item}</h5></TableCell>              
         }       
       )
      }
      </TableRow>
    
    </Table>
    
  </TableContainer>

  
    </Grid>
    <Grid item  xs={2} textAlign={"center"}>
    <TableContainer>
    <Table arial-label='simple table'>
      <TableHead>
      <TableRow>
      <TableCell></TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
    {
      avalaible.map(
        item => {
          return <TableRow><TableCell sx={{color:'#993333',fontSize:"12px"}}><h5>{item}</h5></TableCell></TableRow>           
        }       
      )
     }
     </TableBody>
    </Table>
    </TableContainer>
    </Grid>

    <Grid item  xs={12} textAlign={"center"}>
    <Button variant="contained" elevation={24} size="large" sx={{margin:'20px', height:'40px',borderRadius: '20px', width:'100px'}} color='info' >Minili</Button>
    <Button variant="contained" elevation={24} size="large" sx={{margin:'20px', height:'40px',borderRadius: '20px', width:'100px'}} color='info' >BHammer</Button>
    </Grid>
    </Grid>
  )
}

export default TableDefault;