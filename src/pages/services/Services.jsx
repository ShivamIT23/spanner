import React, { useEffect } from "react";
import styles from "./Services.module.css";
import Hero from "../../components/servicePage/hero/Hero";
import LeftElCard from "../../components/servicePage/leftElCard/LeftElCard";

const elevatorDetails = [
  {
    elName: `Manual Door Elevator:`,
    elTopParas: [
      `Manual Door Elevators are prefered for low cost installation at private buildings where lift usage is low.`,
    ],
    elFeatures: [
      `Low Cost`,
      `Low Space Requirement`,
      `Fast Installation`,
      `4 to 15 people`,
    ],
    elBotParas: [
      `The cabin walls can be of M. S. painted, M. S. Powdercoated or Hairline brush finished stainless steel.`,
      `Collapsible channel glass or swing doors with glass vision windows can be provided. Swing doors can be varied from floor to floor to suit the decor.`,
      `Lifts can be traction based or machine room less depending on building position.`,
    ],
    elPointers: [],
    elImage: "/images/servicePage/lift1.png",
  },
  {
    elName: `Auto Door Elevator:`,
    elTopParas: [
      `Auto Door Elevator are recommended for lifts being used in public buildings handling high traffic.`,
    ],
    elFeatures: [
      `More Space Requirement`,
      `0.7 m/s - 1.75m/s speed`,
      `6 to 26 people`,
    ],
    elBotParas: [
      `The cabin walls can be of M. S. painted, M. S. Powdercoated or Hairline brush finished stainless steel. Glass door can be provided.`,
      `Normally center opening doors are advised due to their ease of use and elegance. In tight spaces, telescopic doors can be provided in which both the doors open towards one side`,
    ],
    elPointers: [],
    elImage: "/images/servicePage/lift2.png",
  },
  {
    elName: `Goods Elevator`,
    elTopParas: [
      `Goods elevator is of all-steel construction, which ensures durability in rough use. Goods lift increase material handling capacity.`,
    ],
    elFeatures: [
      `500 Kg to 10 Tonne Capacity`,
      `Fast Installation`,
      `4 to 15 people`,
    ],
    elBotParas: [
      `The cabin walls can be of M. S. painted, M. S. Powdercoated or Hairline brush finished stainless steel.`,
      `Collapsible channel glass or swing doors with glass vision windows can be provided. Swing doors can be varied from floor to floor to suit the decor.`,
      `Lifts can be traction based or machine room less depending on building position.`,
    ],
    elPointers: [],
    elImage: "/images/servicePage/lift3.png",
  },
  {
    elName: `Hospital Elevator`,
    elTopParas: [
      `Hospital elevators are specially designed to handle the unique demands of healthcare facilities, ensuring the safe and efficient transport of patients, medical equipment, and staff across different floors of a hospital or medical center. `,
    ],
    elFeatures: [],
    elBotParas: [],
    elPointers: [
      `Designed for High Traffic: Built to accommodate a large number of users and frequent trips, ensuring minimal wait times in busy hospital environments.`,
      `Spacious and Accessible: Large cabins allow easy movement of hospital beds, stretchers, and wheelchairs.`,
      `Smooth and Quiet Operation: Advanced systems ensure quiet, smooth travel, which is essential for patient comfort and reducing noise in a healthcare setting.`,
      `Advanced Safety Features: Equipped with features such as emergency communication systems, backup power supply, anti-slip floors, and safety sensors to prevent accidents and ensure a smooth ride.`,
      `Hygienic Materials: Cabins are designed with materials that are easy to clean and maintain, ensuring high hygiene standards in a medical environment.`,
      `Compliance with Medical Standards: Meets health and safety regulations, ensuring it is designed to handle the high standards required in medical environments.`,
    ],

    elImage: "/images/servicePage/lift4.png",
  },
  {
    elName: `Car Elevator`,
    elTopParas: [
      `Car elevators are designed to safely transport vehicles, such as cars and small trucks, between floors in commercial buildings, showrooms, parking garages, and more.`,
    ],
    elFeatures: [],
    elBotParas: [],
    elPointers: [
      `Heavy-Duty Design: Built to carry vehicles with precise control, ensuring safe and smooth movement.`,
      `Wide Platform Area: Offers ample space to accommodate various types of vehicles with ease.`,
      `Robust Construction: Made with durable steel or reinforced materials to withstand the weight and stress of vehicle transport.`,
      `Smooth Ride Quality: Advanced safety features and control mechanisms to ensure the vehicles are safely moved between levels.`,
      `Automatic and Manual Operation Options: Depending on the requirement, car elevators can be equipped with automatic or manual door systems.`,
      `Quick and Efficient Operation: Ideal for environments with high vehicle turnover, ensuring fast and seamless service.`,
    ],
    elImage: "/images/servicePage/lift5.png",
  },
  {
    elName: `Stairs Elevator`,
    elTopParas: [
      `Stair elevators are designed to assist individuals with mobility challenges in navigating stairs within private or public buildings. These lifts are ideal for providing accessibility in multi-story buildings, especially in places where traditional elevators are not feasible.`,
    ],
    elFeatures: [],
    elBotParas: [],
    elPointers: [
      `Space-Saving Design: Compact and can be installed on narrow staircases without major structural changes.`,
      `Easy Operation: Simple controls for effortless travel between floors, making it user-friendly for individuals with mobility difficulties.`,
      `Safe and Reliable: Equipped with safety sensors, emergency brakes, and secure seating to ensure a safe ride.`,
      `Customizable to Staircase Type: Can be adapted to different staircase configurations, whether straight or curved.`,
      `Durable and Low Maintenance: Built with high-quality materials to ensure longevity and low upkeep costs.`,
      `Versatile Usage: Ideal for homes, offices, and public spaces, providing an inclusive solution for people with limited mobility.`,
    ],
    elImage: "/images/servicePage/lift6.png",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <Hero />

      <div className={styles.liftCardsContainer}>
        {elevatorDetails.map((val, i) => {
          return <LeftElCard data={val} key={i} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Services;
