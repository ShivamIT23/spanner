import React from "react";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import Hero from "../../components/aboutPage/hero/Hero";
import SectionTwo from "../../components/aboutPage/sectionTwo/SectionTwo";

const About = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <SectionTwo />
    </div>
  );
};

export default About;
