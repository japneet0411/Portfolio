import { StaticQuery } from "gatsby";
import React from "react";
import * as styles from "./landing.module.css";
import Navbar from '../../components/Navbar'
const LandingPage = () => {
  return (
    <div id={styles.LandingPage}>
       <Navbar/>
      <div className={styles.head}>
        <h1 className={styles.name}>Japneet Kaur</h1>
        <h3 className={styles.caption}>Full Stack Web Developer</h3>
      </div>
      <button type="button" className={styles.btn}>Click to know more</button>
      <div className={styles.imageDiv}>
        <img className={styles.myImage}></img>
      </div>
     
    </div>
  );
};

export default LandingPage;
