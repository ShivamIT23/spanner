import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img src="/images/logo.png" className={styles.logoImage} alt="" />
          <h4 className={styles.cName}>SPANNER ELEVATOR</h4>
        </div>

        <div className={styles.topRight}>
          <h4 className={styles.trHeader}>Contact</h4>
          <div className={styles.contentContainer}>
            <div className={styles.contentWrapper}>
              <img src="/images/location.svg" className={styles.cIcon} alt="" />
              <h4 className={styles.content}>
                41A, Nirmal Chandra Street, Kolkata- 700012
              </h4>
            </div>

            <div className={styles.contentWrapper}>
              <img src="/images/email.svg" className={styles.cIcon} alt="" />
              <h4 className={styles.content}>
                contact@spannerelevator.com/ nilanjan.ray@spannerelevator.com
              </h4>
            </div>

            <div className={styles.contentWrapper}>
              <img src="/images/phone.svg" className={styles.cIcon} alt="" />
              <h4 className={styles.content}>9830277170 / 62908225933</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        <div className={styles.hrline}></div>
        <h4 className={styles.botContent}>Designed By InfluCon Digitals </h4>
      </div>
    </div>
  );
};

export default Footer;
