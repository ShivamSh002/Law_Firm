import React from 'react'
import styles from "./IntroSection.module.css"

import CardComp from '../CardComp/Card'

const IntroSection = () => {
  return (
    <div id="about"><div className={styles.wrapper} ><div className={styles.intro}><div>Let's Indroduce <br /> Ourself</div></div>
    <div className={styles.brief}>
        <h2 >Criminal Lawyer</h2>
        <div>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation</div></div>
        </div>
        <div className={styles.header}>Why Choose Us?</div>
        <div className={styles.cardWrapper}>
            <CardComp rateData="98"/> 
            <CardComp rateData="100"/> 
            <CardComp rateData="100"/></div></div>
    
  )
}

export default IntroSection
