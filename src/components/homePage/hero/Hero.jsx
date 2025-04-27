import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            src="/images/homepage/homeHeroBg.png"
            className={styles.bgImage}
            alt=""
          />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.header}>
              SPANNER ELEVATOR COMPANY PRIVATE LIMITED
            </h2>

            <div className={styles.midContentContainer}>
              <h3 className={styles.midContent}>Elegance</h3>
              <div className={styles.midContentCircle}></div>
              <h3 className={styles.midContent}>Comfort</h3>
              <div className={styles.midContentCircle}></div>
              <h3 className={styles.midContent}>Individuality</h3>
            </div>

            <div className={styles.btnContainer}>
              <Link to={"/contact"} className={styles.contactLink}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
