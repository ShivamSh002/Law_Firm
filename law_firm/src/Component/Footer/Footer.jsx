import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div><div className={styles.wrapper} > <div><Logo/></div>
    <div className={styles.header}><h4>Home</h4>
    <h4>Attorneys</h4>
    <h4>Practice Areas</h4>
    <h5>About Us</h5>
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