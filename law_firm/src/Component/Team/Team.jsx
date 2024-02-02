import React from 'react'
import styles from "./Team.module.css"
import TeamCard from '../TeamCard/TeamCard'
import Danial from "../../assests/danial.png"
import Sanfole from "../../assests/Sanfole.png"
import Cesforila from "../../assests/Cesforila.png"
import Colleen from "../../assests/Colleen.png"
import Haldone from "../../assests/Haldone.png"
import NikJeo from "../../assests/Nik Jeo.png" 


const Team = () => {
  return (
    <div><div className={styles.heading}>Our Team</div>
    <div className={styles.cardsWrapper}> <TeamCard img={Danial} name = "Danial Def" cases = "301"/>
    <TeamCard img={Sanfole} name = "Sanfole" cases = "850"/>
    <TeamCard img={Cesforila} name = "Cesforila" cases = "470"/>
    <TeamCard img={Colleen} name = "Colleen" cases = "180"/>
    <TeamCard img={Haldone} name = "Haldone" cases = "212"/>
    <TeamCard img={NikJeo} name = "NikJ eo" cases = "350"/></div>
   
    </div>
  )
}

export default Team