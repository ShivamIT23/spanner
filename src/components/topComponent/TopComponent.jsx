import React from "react";
import styles from "./TopComponent.module.css";
import { Link } from "react-router-dom";

const TopComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoContainer} to={"/"}>
          <img src="/images/logo.png" alt="" className={styles.logoImage} />
          <h4 className={styles.companyName}>SPANNER ELEVATOR</h4>
        </Link>

        <div className={styles.floorContainer}>
          <img
            src="/images/floorImage.png"
            className={styles.floorImage}
            alt=""
          />
          <h4 className={styles.floorNumber}>01</h4>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
