import React from 'react'
import GiftIcon from "../../assests/GiftIcon.png"
import styles from "./TeamCard.module.css"


const TeamCard = ({img,name,cases}) => {
  return (
    <div className={styles.wrapper}><div className={styles.imgWrapper}><img src={img} alt={name} width={68} /></div>
    <div className={styles.text}><p className={styles.heading}>{name}</p><p className={styles.subHeading }>{cases} cases</p></div></div>
  )
}

export default TeamCard