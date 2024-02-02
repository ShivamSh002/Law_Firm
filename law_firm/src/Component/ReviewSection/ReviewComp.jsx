import React from 'react'
import styles from "./ReviewComp.module.css"
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ClientCard from "../ClientCard/ClientCard"
import Jane from "../../assests/jane.png"
import Devon from "../../assests/devon.png"
import Robert from "../../assests/robert.png"

const ReviewComp = () => {
  return (
    <div><div className={styles.wrapper}><div className={styles.header}>  What says our <br />
    happy Clients</div> <div><button><WestIcon sx={{ fontSize: 30}}/>
        </button><button><EastIcon sx={{ fontSize: 30}}/></button></div></div>
        <div className={styles.cardsWrppaer}>
        <ClientCard name="Jane Cooper" img={Jane}/>
             <ClientCard name="Devon Lane" img ={Devon}/>
             <ClientCard name="Robert Fox" img ={Robert}/>
             </div>
             
             </div>
  )
}

export default ReviewComp