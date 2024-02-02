import * as React from 'react';
import styles from "./Card.module.css"
import GiftIcon from "../../assests/GiftIcon.png"
import { CardActionArea } from '@mui/material';



const CardComp = ({rateData}) => {
  return (
    <div  className={styles.wrapper}>
     <CardActionArea > <div className={styles.cardWrapper}> <img src={GiftIcon} alt="gitBox" width={100} className={styles.logo} />
    <p className={styles.rate}>{rateData}% Success Rate</p>
    <p className={styles.text}>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
      sint. Velit officia consequatduis enim velit mollit Exer.
    </p>
    <button className={styles.btn}>Read More</button></div></CardActionArea>
  
  </div>
  )
}

export default CardComp