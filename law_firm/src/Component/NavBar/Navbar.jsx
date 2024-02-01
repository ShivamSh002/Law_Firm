import React from 'react'
import Logo from '../Logo/Logo'
import { ContactButton } from '../ContactButton/ContactButton'
import styles from "./NavBar.module.css"

const Navbar = () => {
  return (
   

    <div className={styles.wrapper} > <div><Logo/></div>
    <div className={styles.header}><h4>Home</h4>
    <h4>Attorneys</h4>
    <h4>Practice Areas</h4>
    <h5>About Us</h5>
    </div>
    <div><ContactButton/></div>
    </div>
  )
}

export default Navbar