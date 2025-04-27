import React from "react";
import styles from "./Hero.module.css";

const elevatorTypes = [
  { type: "Manual Door Elevator", id: "ManualDoorElevator" },
  { type: "Auto Door Elevator", id: "AutoDoorElevator" },
  { type: "Goods Elevator", id: "GoodsElevator" },
  { type: "Hospital Elevator", id: "HospitalElevator" },
  { type: "Car Elevator", id: "CarElevator" },
  { type: "Stair Elevator", id: "StairElevator" },
];
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            src="/images/servicePage/serviceHeroB.jpeg"
            className={styles.bgImage}
            alt=""
          />
        </div>
        <div className={styles.mainContainer}>
          <h4 className={styles.header}>Elevators</h4>

          <div className={styles.listContainer}>
            {elevatorTypes.map((val, i) => {
              return (
                <h4 className={styles.listItem} key={i}>
                  {val.type}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
