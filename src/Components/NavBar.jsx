import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <ul>
        <li ><NavLink to={'/'} activeclassname='navlink'> Home</NavLink></li>
        <li><NavLink to={'/Bollywood'} activeclassname='navlink'> Bollywood</NavLink> </li>
        <li><NavLink to={'/Hollywood'} activeclassname='navlink'>Hollywood</NavLink></li>
        <li><NavLink to={'/Tech'} activeclassname='navlink'>Technology</NavLink></li>
        <li><NavLink to={'/Fitness'} activeclassname='navlink'>Fitness</NavLink></li>
        <li><NavLink to={'/Food'} activeclassname='navlink'>Food</NavLink></li>
        </ul>
        <hr />
    </div>
  )
}

export default NavBar