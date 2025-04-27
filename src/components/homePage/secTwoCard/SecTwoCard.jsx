import React from "react";
import styles from "./SecTwoCard.module.css";

const SecTwoCard = ({ data }) => {
  const { imgLink, header, para } = data;
  return (
    <div className={styles.container}>
      <img src={imgLink} alt="" className={styles.cardImage} />
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.para}>{para}</p>
    </div>
  );
};

export default SecTwoCard;
