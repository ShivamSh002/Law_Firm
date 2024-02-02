import React from 'react'
import HeroImg from "../../assests/HeroImg.png"
import styles from "./Home.module.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Home = () => {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.heroSection} >
      <div className={styles.header}>
      <h1><span>You don't have to</span> <br />Fight them Alone.</h1>
      </div><div className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis repellendus magnam dolores expedita esse libero voluptatem ad ratione ullam, officia rem, quisquam cumque, dolorum ab eaque sed saepe quam.</div>
      
        <div className={styles.textField}><div className={styles.emailWrapper}>
          <MailOutlineIcon className={styles.emailIcon} />
          <input type="text" placeholder="Enter your eamil address" />
          <button>Let's Talk</button>
        </div></div>
    </div>
    <div><img src={HeroImg} alt="HeroImg" /></div></div>
  )
}

export default Home