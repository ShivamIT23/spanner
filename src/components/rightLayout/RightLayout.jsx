import React, { useEffect } from "react";
import styles from "./RightLayout.module.css";
import TriangleArrow from "./TriangleArrow";

const RightLayout = ({ scrollDirection, arrowColor }) => {
  useEffect(() => {
    console.log(scrollDirection);
    console.log(arrowColor);
  }, [scrollDirection]);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowWrapper}>
          {/* Arrow Up */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className={styles.arrowUp}
          >
            <TriangleArrow
              scrollDirection={scrollDirection}
              arrowColor={arrowColor}
              arrow="up"
            />
          </div>

          {/* Arrow Down */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className={styles.arrowDown}
          >
            <TriangleArrow
              scrollDirection={scrollDirection}
              arrowColor={arrowColor}
              arrow="down"
            />
          </div>
        </div>
      </div>

      <div className={styles.whatsappContainer}>
        <img
          src="/images/whatsappImage.png"
          alt=""
          className={styles.whImage}
          onClick={() =>
            window.open("https://wa.me/9830277170?text=Hi", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default RightLayout;
