import React from "react";
import styles from "./SectionTwo.module.css";
const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContentContainer}>
        <div className={styles.mcard}>
          <div className={styles.mcardWrapper}>
            <div className={styles.missionnameContainer}>
              <img
                src="/images/aboutPage/cardImage1.png"
                className={styles.cardImage}
                alt=""
              />
              <h4 className={styles.cardName}>MISSION</h4>
            </div>

            <h4 className={styles.content}>
              To manufacture a world-class range of vertical services, offering
              a variety of lifts that meet the needs of our clients with supreme
              quality, safety, and durability.
            </h4>
          </div>
        </div>

        <div className={styles.vcard}>
          <div className={styles.vcardWrapper}>
            <h4 className={styles.content}>
              To provide stylish, high load-bearing, safe, and durable lifts in
              a wide variety of designs, capacities, and speeds, ensuring
              maximum customer satisfaction with affordable prices and timely
              delivery.
            </h4>
            <div className={styles.missionnameContainer}>
              <img
                src="/images/aboutPage/cardImage2.png"
                alt=""
                className={styles.cardImage}
              />
              <h4 className={styles.cardName}>VISION</h4>
            </div>
          </div>
        </div>
        <img src="/images/accBgTop.png" className={styles.bgImage} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;
