import React, { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion"; 
import { Link } from "react-router-dom";
import styles from "./HamButton.module.css"; // Import CSS Module

const Hambutton = () => {
  const [active, setActive] = useState(false);

  // Lock body scroll when menu is active
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {active && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <div className={styles.logoContainer}>
              <img
                loading="lazy"
                src="/images/logo.png"
                className={styles.logo}
                alt="Logo"
              />
            </div>

            <Link onClick={() => setActive(false)} to="/" className={styles.link}>
              Home
            </Link>
            <Link onClick={() => setActive(false)} to="/about" className={styles.link}>
              About Us
            </Link>
            <Link onClick={() => setActive(false)} to="/gallery" className={styles.link}>
              Gallery
            </Link>
            <Link onClick={() => setActive(false)} to="/services" className={styles.link}>
            Services
            </Link>
            <Link onClick={() => setActive(false)} to="/accessories" className={styles.link}>
            Accessories
            </Link>
            <Link onClick={() => setActive(false)} to="/contact" className={styles.link}>
              Contact us
            </Link>
          </div>
        </div>
      )}

      <MotionConfig
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.button
          onClick={() => setActive((prev) => !prev)}
          className={styles.hambutton}
          animate={active ? "open" : "closed"}
        >
          {/* Top line */}
          <motion.span
            className={`${styles.hambuttonLine} ${styles.hambuttonLineTop}`}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["40%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "40%"],
              },
            }}
          ></motion.span>

          {/* Middle line */}
          <motion.span
            className={`${styles.hambuttonLine} ${styles.hambuttonLineMiddle}`}
            variants={{
              open: { rotate: ["0deg", "0deg", "-45deg"] },
              closed: { rotate: ["-45deg", "0deg", "0deg"] },
            }}
          ></motion.span>

          {/* Bottom line */}
          <motion.span
            className={`${styles.hambuttonLine} ${styles.hambuttonLineBottom}`}
            variants={{
              open: {
                opacity: 0,
                rotate: ["0deg", "0deg", "-45deg"],
                bottom: ["40g%", "50%", "50%"],
              },
              closed: {
                opacity:1,
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "40%"],
              },
            }}
          ></motion.span>
        </motion.button>
      </MotionConfig>
    </>
  );
};

export default Hambutton;
