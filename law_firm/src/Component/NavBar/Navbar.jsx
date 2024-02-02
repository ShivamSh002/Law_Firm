import React from 'react'
import Logo from '../Logo/Logo'
import { ContactButton } from '../ContactButton/ContactButton'
import styles from "./NavBar.module.css"
import {HashLink as Link} from "react-router-hash-link"

const linkStyle = { color: 'white', textDecoration: 'none' };
const Navbar = () => {
  return (
   
    <div className={styles.wrapper} > <div><Logo/></div>
    <div className={styles.header}>
    <Link to="#home" smooth style={linkStyle}><h4>Home</h4></Link>
        <Link to="#team" smooth style={linkStyle}><h4>Attorneys</h4></Link>
        <Link to="#practice" smooth style={linkStyle}><h4>Practice Areas</h4></Link>
        <Link to="#about" smooth style={linkStyle}><h4>About Us</h4></Link>
    
    </div>
    <Link to="#contact" smooth><div><ContactButton/></div></Link>

    </div>
 
  )
}

export default Navbar