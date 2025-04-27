import React, { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import TopComponent from "../components/topComponent/TopComponent";
import LeftLayout from "../components/leftLayout/LeftLayout";
import RightLayout from "../components/rightLayout/RightLayout";
import DoorComponent from "../components/doorComponent/DoorComponent";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [arrowColor, setArrowColor] = useState("#C45F5F");
  const location = useLocation();

  const scrollRef = useRef(0);
  let scrollTimeout = null;

  const handleScroll = (event) => {
    const currentScrollPos = event.target.scrollTop;
    const direction = currentScrollPos > scrollRef.current ? "down" : "up";
    setScrollDirection(direction);
    setArrowColor("#13ad5c"); // Green while scrolling

    // Reset the color and scroll direction when user stops scrolling
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setArrowColor("#C45F5F"); // Red when scrolling stops
      setScrollDirection(null); // No direction when scrolling stops
    }, 410);

    scrollRef.current = currentScrollPos;
  };

  useEffect(() => {
    setTimeout(() => {
      const doorComp = document.querySelector(`.${styles.doorContainer}`);

      doorComp.classList.add(styles.removeDoors);
    }, 3000);
  }, []);

  useEffect(() => {
    document.querySelector(`.${styles.midContainer}`).scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={styles.container}>
      <TopComponent />
      <LeftLayout />
      <RightLayout scrollDirection={scrollDirection} arrowColor={arrowColor} />
      <div className={styles.doorContainer}>
        <DoorComponent />
      </div>

      <div className={styles.midContainer} onScroll={handleScroll}>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
