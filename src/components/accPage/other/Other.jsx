import React from "react";
import styles from "./Other.module.css";

const otherAccData = [
  { cardHeader: "V3F", imgLink: "/images/otherAcc/img1.png" },
  { cardHeader: "Inspection Box", imgLink: "/images/otherAcc/img2.png" },
  { cardHeader: "Limit Switch", imgLink: "/images/otherAcc/img3.png" },
  { cardHeader: "Buffer Spring", imgLink: "/images/otherAcc/img4.png" },
  { cardHeader: "Thimble", imgLink: "/images/otherAcc/img5.png" },
  { cardHeader: "Guide Shoe Holder", imgLink: "/images/otherAcc/img6.png" },
  {
    cardHeader: "Safety Top & Bottom Channel",
    imgLink: "/images/otherAcc/img7.png",
  },
  { cardHeader: "Buffer Spring", imgLink: "/images/otherAcc/img8.png" },
  { cardHeader: "Buffer Spring", imgLink: "/images/otherAcc/img9.png" },
  { cardHeader: "Blower", imgLink: "/images/otherAcc/img10.png" },
  { cardHeader: "Governor Set", imgLink: "/images/otherAcc/img11.png" },
  { cardHeader: "Power Pack", imgLink: "/images/otherAcc/img12.png" },
];
const Other = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Other Accessories</h2>

      <div className={styles.cardsContainer}>
        {otherAccData.map((val, i) => {
          return (
            <div className={styles.card} key={i}>
              <img
                src={val.imgLink}
                alt=""
                className={`${styles.cardImage} ${styles[`cardImage${i + 1}`]}`}
              />
              <h3 className={styles.cardHeader}>{val.cardHeader}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Other;
