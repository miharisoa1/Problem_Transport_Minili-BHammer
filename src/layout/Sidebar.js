import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Button, Stack, Grid, Typography} from '@mui/material'

function Sidebar() {
 
  const [sideBarOpen, setSideBarOpen] = useState(false)
  let [activeLink, setActiveLink] = useState("home")
  let [show, setShow] = useState("")
  const [passWord, setPassword] = useState(false)


  const openSideBar = () => {
    setSideBarOpen(true)
  }

  const handleClickItem = (e) => {
    setActiveLink(activeLink = e.target.id)
  }

  const handleShowCollapse = (e) => {
    setShow(activeLink = e.target.id)
  }
  return (
    <div class="sidebar">
      
      <div class="logo">
        <a >
          <Typography variant="span">  Transportation Resolving</Typography>
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
         <li class="nav-item active  "> 
           <Link to="/app/default">    <p>menu-item</p>    </Link>      
          </li><br></br>
          <li class="nav-item ">
              <p>menu-item</p>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default Sidebar