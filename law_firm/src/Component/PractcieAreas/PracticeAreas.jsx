import React from 'react'
import styles from "./PracticeAreas.module.css"
import Bussiness from "../../assests/Bussines.png"
import PaternShip from "../../assests/PatnerShip.png"
import RealEstate from "../../assests/RealEstate.png"
import Bussiness2 from "../../assests/Bussiness2.png"
import LandLord from "../../assests/LandLord.png"
import Elder from "../../assests/Elder.png"
 
const PracticeAreas = () => {
  return (
    <div>
      <div className={styles.header}>Area of Practices</div>
      <div className={styles.wrapper}>
        <div className={styles.imgWrppaer}><img src={Bussiness} alt="Bussiness Law" /> <p className={styles.imgText}>Bussiness Law</p></div>
        <div className={styles.imgWrppaer}><img src={PaternShip} alt="Patnership Law" /> <p className={styles.imgText2}>Patnership Law</p></div>
        <div className={styles.imgWrppaer}><img src={RealEstate} alt="RealEstate Law" /> <p className={styles.imgText2}>RealEstate Law</p></div>
        <div className={styles.imgWrppaer}><img src={Bussiness2} alt="Bussiness Law" /> <p className={styles.imgText}>Bussiness Law</p></div>
        <div className={styles.imgWrppaer}><img src={LandLord} alt="LandLord Disputes" /> <p className={styles.imgText}>LandLord Disputes</p></div>
        <div className={styles.imgWrppaer}><img src={Elder} alt="Elder Abuse" /> <p className={styles.imgText2}>Elder Abuse</p></div>
       
        
        </div></div>
  )
}

export default PracticeAreas