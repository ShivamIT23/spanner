import React from "react";
import styles from "./Hero.module.css";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src="/images/aboutHero.jpeg" className={styles.bgImage} alt="" />
        </div>
        <div className={styles.mainContainer}>
          <h4 className={styles.header}>ABOUT US</h4>

          <p className={styles.content}>
            With over two decades of rich experience in the elevator industry,
            we pride ourselves on using supreme quality materials and components
            in our manufacturing process, under the strict supervision of our
            experienced team. Our lifts are known for their stylish looks and
            high load-bearing capacities. We have a team of highly talented
            professionals with vast experience who manufacture these lifts with
            utmost perfection. Our advanced infrastructure enables us to produce
            bulk quantities in a short time period. We offer our products at
            affordable prices and ensure timely delivery. To meet the specific
            needs of our clients, we also provide customized solutions.
          </p>

          <Link to={"/contact"} className={styles.cntctLink}>
            <div className={styles.linkText}>Contact Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
