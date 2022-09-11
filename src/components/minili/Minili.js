import React, {
  useEffect, useState
} from 'react'
import {
   Grid, Button
} from '@mui/material'

/** imports */
import TableService from '../../services/TableService';
import BasicSolution from './BasicSolution';
import MiniliFunction from '../../services/Minili';

function Minili({unitaryArr, demandArr, avalaibleArr, row, column}) {
  /****initial state******* */
  const [unitary, setUnitary] = useState([]);
  const [rowCount, setRowCount] = useState([]);
  const [columnCount, setColumnCount] = useState([]);
  const [demand, setDemand] = useState([]);
  const [avalaible, setAvalaible] = useState([]);
  const [solution, setSolution] = useState([]);

  
  /****** useEffect comme component didmount */
  useEffect(() => {
    /***initialize array */
    let rowIndex = TableService.rowIndex(row);
    let columnCount = TableService.columnIndex(column);
    setUnitary(unitaryArr)
    setRowCount(rowIndex)
    setColumnCount(columnCount)
    setAvalaible(avalaibleArr)
    setDemand(demandArr)
    let array = MiniliFunction.minili(unitaryArr, avalaibleArr, demandArr)
    setSolution(array)
   
  }, [])


  return (
    <>
    <Grid className='card table-panel'
      borderRadius={5} spacing={2} padding={2}
      alignItems="center" minHeight={300}>
      <Grid xs={2}>
        <table className='table table-bordered' width="10px">
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
      </Grid>
      <Grid xs={8} direction="row">
        <table class="table table-bordered">
          <thead>
            <tr>
           { /*****************afficher nombre des colonnes********************************* */}
              {
                columnCount.map(
                  item => {
                    return <th className='text-light h6'>{item}</th>
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

                      return <td className='text-light' width={1} key={j}>{subItem}</td>
                    })

                    }</tr>
                }
              )
            }<tr>
            {/*****************************afficher quanntité disponible********************* */}
              {
                avalaible.map(
                  (item, i) => {
                    return <td className='text-light' key={i} >{item}</td>
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
              demand.map(
                (item, i) => {
                  return <tr width='2px'><td className='text-light' key={i}>{item}</td></tr>
                }
              )
            }
          </tbody>
        </table>
      </Grid>
    </Grid>
    <Grid>
    <BasicSolution solution={solution} demandArr={demand} row={row} column={column}/>
    </Grid>
    </>
  )
}

export default Minili