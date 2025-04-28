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
  const [showDoors, setShowDoors] = useState(true); // NEW STATE
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const location = useLocation();
  const scrollRef = useRef(0);
  let scrollTimeout = null;

  const handleScroll = (event) => {
    const currentScrollPos = event.target.scrollTop;
    const direction = currentScrollPos > scrollRef.current ? "down" : "up";
    setScrollDirection(direction);
    setArrowColor("#13ad5c");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setArrowColor("#C45F5F");
      setScrollDirection(null);
    }, 410);

    scrollRef.current = currentScrollPos;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇 Whenever route (pathname) changes, trigger door animation
  useEffect(() => {
    setShowDoors(true); // show door when navigation starts
    document.querySelector(`.${styles.midContainer}`)?.scrollTo(0, 0); // Scroll to top

    const timer = setTimeout(() => {
      setShowDoors(false); // hide door after animation
    }, 3000); // Door disappears after 3 seconds (same timing)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <TopComponent isMobile={isMobile} />
      {!isMobile && <LeftLayout />}
      {!isMobile && (
        <RightLayout
          scrollDirection={scrollDirection}
          arrowColor={arrowColor}
        />
      )}

      {/* Render DoorComponent only when showDoors is true */}
      {showDoors && (
        <div className={styles.doorContainer}>
          <DoorComponent />
        </div>
      )}

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
