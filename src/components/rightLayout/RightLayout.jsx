import React, { useEffect } from "react";
import styles from "./RightLayout.module.css";

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
          <div className={styles.arrowUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 51"
              fill="none"
            >
              <path
                d="M6.98345 39.8759H44.2463C44.6235 39.8747 44.9933 39.7706 45.3158 39.5749C45.6384 39.3792 45.9014 39.0992 46.0767 38.7651C46.2519 38.431 46.3327 38.0554 46.3104 37.6788C46.2881 37.3022 46.1635 36.9388 45.95 36.6278L27.3186 9.71577C26.5464 8.59995 24.6874 8.59995 23.9132 9.71577L5.28178 36.6278C5.06613 36.9382 4.93966 37.3018 4.91612 37.679C4.89259 38.0562 4.97288 38.4327 5.14829 38.7675C5.32369 39.1023 5.5875 39.3827 5.91104 39.5781C6.23458 39.7735 6.60548 39.8765 6.98345 39.8759Z"
                fill={scrollDirection === "up" ? arrowColor : "#C45F5F"}
              />
            </svg>
          </div>

          {/* Arrow Down */}
          <div className={styles.arrowDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 51"
              fill="none"
            >
              <path
                d="M44.246 10.6862L6.98324 10.6862C6.60598 10.6873 6.23617 10.7914 5.91364 10.9871C5.59111 11.1828 5.32807 11.4628 5.15282 11.7969C4.97757 12.131 4.89676 12.5066 4.91908 12.8832C4.94141 13.2598 5.06602 13.6232 5.2795 13.9342L23.9109 40.8462C24.6831 41.9621 26.5421 41.9621 27.3163 40.8462L45.9477 13.9342C46.1634 13.6238 46.2898 13.2602 46.3134 12.883C46.3369 12.5058 46.2566 12.1293 46.0812 11.7945C45.9058 11.4597 45.642 11.1794 45.3185 10.984C44.9949 10.7886 44.624 10.6856 44.246 10.6862Z"
                fill={scrollDirection === "down" ? arrowColor : "#C45F5F"}
              />
            </svg>
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
