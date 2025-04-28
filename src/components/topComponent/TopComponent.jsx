import React from "react";
import styles from "./TopComponent.module.css";
import { Link } from "react-router-dom";
import Hambutton from "../Hambutton";

const TopComponent = ({isMobile}) => {
  console.log('isMobile:', isMobile)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoContainer} to={"/"}>
          <img src="/images/logo.png" alt="" className={styles.logoImage} />
          <h4 className={styles.companyName}>SPANNER ELEVATOR</h4>
        </Link>
        <div className={styles.hambutton} >
        {isMobile && <Hambutton />}
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
