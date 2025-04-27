import React from "react";
import styles from "./CopsAndLops.module.css";

const CopsAndLops = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>COPS & LOPS</h2>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
            <h2 className={styles.cardHeader}>Touch LOPs</h2>

            <div className={styles.pointsContainer}>
              <p className={styles.item}>Touch Sceen</p>
              <p className={styles.item}>Sensitive Reaction</p>
              <p className={styles.item}>Easy Installation</p>
              <p className={styles.item}>Good Performance</p>
            </div>
          </div>
          <img
            src="/images/homepage/copsImage1.png"
            className={styles.cardImage}
            alt=""
          />
        </div>

        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
            <h2 className={styles.cardHeader}>Push Button LOPs</h2>

            <div className={styles.pointsContainer}>
              <p className={styles.item}>New Design of Push Button</p>
              <p className={styles.item}>Available in Blue, Red Lights</p>
              <p className={styles.item}>12/24V Operating Voltage</p>
              <p className={styles.item}>Easy Installation and Operation</p>
            </div>
          </div>

          <img
            src="/images/homepage/copsImage2.png"
            className={styles.cardImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CopsAndLops;
