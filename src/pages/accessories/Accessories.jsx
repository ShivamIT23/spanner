import React from "react";
import styles from "./Accessories.module.css";
import CopsAndLops from "../../components/homePage/copsAndLops/CopsAndLops";
import Other from "../../components/accPage/other/Other";

const Accessories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContentContainer}>
        <h2 className={styles.header}>Accessories</h2>
        <div className={styles.paraContainer}>
          <p className={styles.para}>
            Owing to years of experience, we are providing a quality range of
            Elevator Ceilings. These Elevator Ceilings enhance the looks of
            elevator and are easy to install. These are made using quality
            material which is sourced from leading vendors of the industry.
            Moreover, these products are available in various sizes.
          </p>
          <p className={styles.para2}>
            LOP and COP have been used here with the optimum use of our modern
            production facility, we also provide a wide range of push button
            boxes (this is also known as landing push button boxes). Our push
            button boxes range is available with self illuminated push button
            for lift with direction arrow and digital position indicators in
            aluminum or steel facing plate at every floor. these are
            manufactured from high grade material. These are in compliance with
            preset industrial standards and norms and are designed by our
            experienced engineers.
          </p>
        </div>
        <img src="/images/accBgTop.png" className={styles.bgImage} alt="" />
      </div>
      <div className={styles.sectionTwo}>
        <CopsAndLops />
        <img src="/images/accBgTop.png" className={styles.bgImage} alt="" />
      </div>
      <div className={styles.otherContainer}>
        <Other />
        <div className={styles.imgContainer}>
          <img
            src="/images/accBgTop.png"
            className={styles.otherbgImage}
            alt=""
          />
          <img
            src="/images/accBgTop.png"
            className={styles.otherbgImage}
            alt=""
          />
          <img
            src="/images/accBgTop.png"
            className={styles.otherbgImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
