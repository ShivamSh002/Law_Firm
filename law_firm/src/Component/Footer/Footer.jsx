import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {HashLink as Link} from "react-router-hash-link"

const Footer = () => {
  return (
    <div id="contact"><div className={styles.wrapper} > <div><Logo/></div>
    <div className={styles.header}> <Link to="#home" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Home</h4></Link>
    <Link to="#team" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Attorneys</h4></Link>
    <Link to="#pratice" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >Practice Areas</h4></Link>
    <Link to="#about" smooth> <h4 style={{ color: 'white', textDecoration: 'none' }} >About Us</h4></Link>
    </div>
    <div className={styles.icons}>
        <InstagramIcon sx={{ fontSize: 30, color: '#E3B748' }}/>
        <FacebookIcon sx={{ fontSize: 30, color: '#E3B748' }}/>
        <XIcon sx={{ fontSize: 30, color: '#E3B748' }}/>
        <PinterestIcon sx={{ fontSize: 30, color: '#E3B748' }}/>    
    </div>
    </div>
    <div className={styles.info}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
    </div></div>
    
  )
}

export default Footer