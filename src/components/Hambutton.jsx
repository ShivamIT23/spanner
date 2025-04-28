import React, { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import styles from "./HamButton.module.css"; // Import CSS Module


const data = [
  { text: "Home", page: "/", uniqueId: "home" },
  { text: "About Us", page: "/about", uniqueId: "about" },
  { text: "Gallery", page: "/gallery", uniqueId: "gallery" },
  { text: "Services", page: "/services", uniqueId: "services" },
  { text: "Accessories", page: "/accessories", uniqueId: "accessories" },
  { text: "Contact Us", page: "/contact", uniqueId: "contact" },
];

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
          <div className={styles.wrapper}>
            {data.map((val, i) => {
              return (
                <div className={styles.floorCard} key={i}>
                  <NavLink onClick={()=> setActive(false)} to={val.page}>
                    <div className={styles.floorCardwrapper}>
                      <div className={styles.imageContainer}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="70"
                          height="73"
                          viewBox="0 0 70 73"
                          fill="none"
                        >
                          <g filter="url(#filter0_d_265_1467)">
                            <circle
                              cx="34.6897"
                              cy="33.721"
                              r="30.6897"
                              fill={
                                location.pathname == val.page
                                  ? "#C45F5F"
                                  : "#545454"
                              }
                            />
                            <circle
                              cx="34.6897"
                              cy="30.6897"
                              r="29.6897"
                              fill="white"
                              stroke={
                                location.pathname == val.page
                                  ? "#C45F5F"
                                  : "#545454"
                              }
                              strokeWidth="2"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_265_1467"
                              x="0"
                              y="0"
                              width="69.3799"
                              height="72.4106"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_265_1467"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_265_1467"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div className={styles.contentContainer}>
                        <p
                          className={`${styles.content}  ${
                            styles[`${val.uniqueId}`]
                          }`}
                          style={{
                            color:
                              location.pathname == val.page
                                ? "#C45F5F"
                                : "#545454",
                          }}
                        >
                          {val.text}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
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
                opacity: 1,
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
