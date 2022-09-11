import React, { useState } from 'react'
import {Button, TextField, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, 
  DialogActions, Typography, Card} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link, useNavigate} from "react-router-dom";

function Modal({show, close, submited, hidden,}) {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [error, setError] = useState(false)

 

  const onSubmited = (e) => {
    e.preventDefault();
    if(row == 0 && column == 0){
      setError(true)
    }else {
      submited(row, column)
      close()
      //navigate("/", { replace: true });
    }
  }
  return (
    <>
    <Dialog open={show}
    onClose={close}>
     <CancelIcon color="info" sx={{ position: "fixed",
    marginLeft:"280px",fontSize:"40px"}} onClick={close}/>
      <DialogTitle id="dialog-title" >
        <Typography variant='h5'  width={280} height={50}> Créer un nouveau tableau</Typography>
      </DialogTitle>
     
      <DialogContent>
        <DialogContentText id='dialog-description' spacing={2}>
        <Stack direction="column" height={70}>
        <TextField label="Nombre des colonnes" onChange={(e) => setColumn(e.target.value)} variant='standard' size="small" type="number" required/>
        </Stack>
        <Stack direction="column" height={50}>
        <TextField label="Nombre des lignes" onChange={(e) => setRow(e.target.value)}  variant='standard' type="number" size="large" required/>
        </Stack>
        {
          error &&  <Stack direction="column" height={50}>
         <h6 className='text-danger'>*Veuillez remplir les champs vide</h6>
          </Stack>
        }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      
        <Button  variant="contained" elevation={24} sx={{borderRadius: '20px'}} color='info' onClick={onSubmited} >Ajouter</Button>
 
      </DialogActions>
    </Dialog>
    
  </>
  )
}

export default Modal