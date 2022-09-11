import React from 'react'

function Menu() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Mycars">Mycars</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Form">Form</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/Maman">Disabled</a>
      </li>
    </ul>
  </nav>
  
    </div>
  )
}

export default Menu