import React from 'react'
import Logo from '../Logo/Logo'
import { ContactButton } from '../ContactButton/ContactButton'
import styles from "./NavBar.module.css"
import {HashLink as Link} from "react-router-hash-link"

const Navbar = () => {
  return (
   
    
    <div className={styles.wrapper} > <div><Logo/></div>
    <div className={styles.header}>
    <Link to="#home" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Home</h4></Link>
    <Link to="#team" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Attorneys</h4></Link>
    <Link to="#pratice" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Practice Areas</h4></Link>
    <Link to="#about" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >About Us</h4></Link>
    
    </div>
    <Link to="#contact" smooth><div><ContactButton/></div></Link>

    </div>
 
  )
}

export default Navbar