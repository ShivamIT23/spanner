import React from "react";
import styles from "./LeftElCard.module.css";

const LeftElCard = ({ data, index }) => {
  const { elName, elTopParas, elFeatures, elPointers, elBotParas, elImage } =
    data;
  return (
    <div className={styles.container}>
      <div
        className={styles.contentWrapper}
        style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
      >
        <div className={styles.left}>
          <h4 className={styles.title}>{elName}</h4>
          <div className={styles.leftContentContainer}>
            {elTopParas.map((val, i) => {
              return (
                <p className={styles.para} key={i}>
                  {val}
                </p>
              );
            })}

            {elFeatures.map((val, i) => {
              return (
                <p className={styles.feature} key={i}>
                  {val}
                </p>
              );
            })}

            {elBotParas.map((val, i) => {
              return (
                <p className={styles.para2} key={i}>
                  {val}
                </p>
              );
            })}

            {elPointers.length > 0 && (
              <ul className={styles.pointerContainer}>
                {elPointers.map((val, i) => {
                  return (
                    <li key={i} className={styles.pointer}>
                      {val}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <img src={elImage} alt="" loading="lazy" className={styles.elImage} />
        </div>
      </div>

      {index === 2 && (
        <div className={styles.tableContainer}>
          <img
            src="/images/servicePage/goodsTable.png"
            className={styles.tableImage}
            alt=""
          />
        </div>
      )}
      {index === 3 && (
        <div className={styles.tableContainer}>
          <img
            src="/images/servicePage/hospitalTable.png"
            className={styles.tableImage}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default LeftElCard;
