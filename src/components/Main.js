import React, { Fragment, useState } from 'react'
import Modal from './Modal';
import {Button, Stack,Grid} from '@mui/material'
import {
  BrowserRouter,
  Routes,
  Route, useNavigate
} from "react-router-dom";

/**import components */
import TableComponent from './create/Table';
import Acceuill from './Acceuill';
import TableDefault from './default/Table';
import Sidebar from '../layout/Sidebar';
import MainLayout from '../layout/MainLayout';
import MainRoute from '../MainRoute';
import Minili from './minili/Minili';
import Truc from './Truc';

function Main(children) {
/** state initial */
const [showModal, setShowModal] = useState(false);
const [row, setRow] = useState(0);
const [column, setColumn] = useState(0);
const [unitary, setUnitary] = useState([]);
const [demand, setDemand] = useState([]);
const [avalaible, setAvalaible] = useState([]);


const navigate = useNavigate();


const createTable = (row, column) => {
  setRow(row);
  setColumn(column);
  navigate("/app/table")
}

const hideModal = () => {
    setShowModal(false)
}

const fillTable = (unitary, avalaible, demand) => {
  setUnitary(unitary);
  setDemand(demand);
  setAvalaible(avalaible);
  navigate("/app/minili")
}

  return (
    <>
    <MainLayout>
    <Routes>
        <Route path="/app" element={<TableDefault/>} />
        <Route path="/app/table" element={<TableComponent row={row} column={column} fillTable={fillTable}/>} />
        <Route path="/app/default" element={<Truc row={row} column={column}/>} />
        <Route path="/app/minili" element={<Minili unitaryArr={unitary} demandArr={demand} avalaibleArr={avalaible} row={row} column={column} />} />
        <Route path="/" element={<Acceuill showModal={() => setShowModal(true)}/>} />

        </Routes>
        </MainLayout>
        <Modal show={showModal} close={hideModal} submited={createTable}/>
    </>

    
  )
}

export default Main;