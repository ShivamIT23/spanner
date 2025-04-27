import React from "react";
import styles from "./Home.module.css";
import Hero from "../../components/homePage/hero/Hero";
import SectionTwo from "../../components/homePage/sectionTwo/SectionTwo";
import CopsAndLops from "../../components/homePage/copsAndLops/CopsAndLops";
import Gallery from "../../components/homePage/gallery/Gallery";
import Testimonials from "../../components/homePage/testimonials/Testimonials";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <SectionTwo />
      <CopsAndLops />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
