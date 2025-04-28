import React, { useEffect } from "react";
import styles from "./DoorComponent.module.css";

const DoorComponent = ({ onDoorsOpened }) => {
  useEffect(() => {
    const leftDoor = document.querySelector(`.${styles.leftDoor}`);
    const rightDoor = document.querySelector(`.${styles.rightDoor}`);
    const midBlackLineEl = document.querySelector(`.${styles.midBlackLine}`);
    const elevatorContainer = document.querySelector(`.${styles.wrapper}`);

    let leftDoorDone = false;
    let rightDoorDone = false;

    const handleAnimationEnd = (e) => {
      if (e.target.classList.contains(styles.leftDoor)) {
        leftDoorDone = true;
      }
      if (e.target.classList.contains(styles.rightDoor)) {
        rightDoorDone = true;
      }

      // Both doors opened
      if (leftDoorDone && rightDoorDone) {
        elevatorContainer.classList.add(styles.noBorder);
        if (onDoorsOpened) {
          onDoorsOpened();  // tell parent
        }
      }
    };

    leftDoor.addEventListener("animationend", handleAnimationEnd);
    rightDoor.addEventListener("animationend", handleAnimationEnd);

    setTimeout(() => {
      midBlackLineEl.classList.add(styles.removeMidBlackLine);
      leftDoor.classList.add(styles.openDoor);
      rightDoor.classList.add(styles.openDoor);
    }, 1000);

    return () => {
      leftDoor.removeEventListener("animationend", handleAnimationEnd);
      rightDoor.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [onDoorsOpened]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftDoor}></div>
        <div className={styles.midBlackLine}></div>
        <div className={styles.rightDoor}></div>
      </div>
    </div>
  );
};

export default DoorComponent;
