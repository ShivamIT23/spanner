import React from "react";
import styles from "./SectionTwo.module.css";
import SecTwoCard from "../secTwoCard/SecTwoCard";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  const elData = [
    {
      imgLink: "/images/homepage/sec2/img1.png",
      header: "Manual Door Elevator",
      para: `Manual door elevators are a practical and budget-friendly option, particularly suited for private buildings with low lift usage. Unlike their automatic counterparts, these elevators require users to open and close the doors manually, reducing the complexity and cost of installation and maintenance.`,
    },
    {
      imgLink: "/images/homepage/sec2/img2.png",
      header: "Auto Door Elevator",
      para: `Auto door elevators are specifically designed for buildings with high foot traffic, ensuring efficiency, safety, and ease of use. These elevators automatically open and close doors, eliminating the need for manual operation, making them a preferred option for public spaces.`,
    },
    {
      imgLink: "/images/homepage/sec2/img3.png",
      header: "Goods Elevator",
      para: `Goods elevators are specifically designed for transporting heavy and bulky materials, making them an essential feature for industrial and commercial spaces. Built with an all-steel construction, these lifts are highly durable and capable of withstanding rough usage in demanding environments.`,
    },
    {
      imgLink: "/images/homepage/sec2/img4.png",
      header: `Hospital Elevator`,
      para: `Hospital elevators are specially designed to handle the unique demands of healthcare facilities, ensuring the safe and efficient transport of patients, medical equipment, and staff across different floors of a hospital or medical center. `,
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Elevators</h2>

      <div className={styles.cardContainer}>
        <div className={styles.cardsWrapper}>
          {elData.slice(0, 2).map((val, i) => {
            return (
              <div className={styles.card} key={i}>
                <SecTwoCard data={val} />
              </div>
            );
          })}
        </div>
        <div className={styles.cardsWrapper}>
          {elData.slice(2).map((val, i) => {
            return (
              <div className={styles.card} key={i}>
                <SecTwoCard data={val} />
              </div>
            );
          })}
        </div>
      </div>
      <Link className={styles.viewLink}>View All</Link>
    </div>
  );
};

export default SectionTwo;
