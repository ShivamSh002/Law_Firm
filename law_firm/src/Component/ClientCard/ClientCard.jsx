import * as React from 'react';
import styles from "./ClientCard.module.css"


import { CardActionArea } from '@mui/material';



const CardComp = ({name,img}) => {
  return (
    <div> <div  className={styles.wrapper}>
    <CardActionArea > <div className={styles.cardWrapper}> <img src={img} alt={name} width={100} className={styles.logo} />
   <p className={styles.name}>{name}</p>
   <p className={styles.subHeading}>Ceo of Hunt</p>
   <p className={styles.text}>
   Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia
   </p>
   </div></CardActionArea>
 
 </div></div>
   
  )
}

export default CardComp