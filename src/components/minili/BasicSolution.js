import React, {
    useEffect, useState
  } from 'react'
  import {
     Grid, Button
  } from '@mui/material'
  
/** imports */
import TableService from '../../services/TableService';
import Graphic from './Graphic';

function BasicSolution({solution, demandArr, avalaibleArr, row, column}) {
    /****initial state******* */
  const [X, setX] = useState([]);
  const [rowCount, setRowCount] = useState([]);
  const [columnCount, setColumnCount] = useState([]);
  const [demand, setDemand] = useState([]);
  const [avalaible, setAvalaible] = useState([]);

  
   /****** useEffect comme component didmount */
   useEffect(() => {
    /***initialize array */
    let rowIndex = TableService.rowIndex(row);
    let columnCount = TableService.columnIndex(column);
    setX(solution);
    console.log("lsflslfp")
    console.log(solution)
    console.log(demandArr)
    console.log(row)

  }, [])
  return (
    <>
    <Grid className='card '
      borderRadius={5} spacing={2} padding={2}
      alignItems="center" minHeight={300}>
      <Grid xs={8} direction="row">
      <table class="table table-bordered">
        <thead>
          <tr>
         { /*****************afficher nombre des colonnes********************************* */}
            // {
            //   columnCount.map(
            //     item => {
            //       return <th className='text-info h6'>{item}</th>
            //     }
            //   )
            }
          </tr>
        </thead>
        <tbody>
        {/********************************afficher cout unitaire**************************/}
          {
            X.map(
              (item, i) => {
                return <tr key={i}>
                  {item.map((subItem, j) => {

                    return <td style={{width:"50px"}}  key={j} >{subItem}</td>
                  })

                  }</tr>
              }
            )
          }
        </tbody>
      </table>
    </Grid>
    </Grid>
    <Grid>
    <Graphic/>
    </Grid>
    </>
  )
}

export default BasicSolution