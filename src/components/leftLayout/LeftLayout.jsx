import React from "react";
import styles from "./LeftLayout.module.css";
import { NavLink, useLocation } from "react-router-dom";

const data = [
  { text: "Home", page: "/", uniqueId: "home" },
  { text: "About Us", page: "/about", uniqueId: "about" },
  { text: "Gallery", page: "/gallery", uniqueId: "gallery" },
  { text: "Services", page: "/services", uniqueId: "services" },
  { text: "Accessories", page: "/accessories", uniqueId: "accessories" },
  { text: "Contact Us", page: "/contact", uniqueId: "contact" },
];
const LeftLayout = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data.map((val, i) => {
          return (
            <div className={styles.floorCard} key={i}>
              <NavLink to={val.page}>
                <div className={styles.floorCardwrapper}>
                  <div className={styles.imageContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 70 73"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_265_1467)">
                        <circle
                          cx="34.6897"
                          cy="33.721"
                          r="30.6897"
                          fill={
                            location.pathname == val.page
                              ? "#C45F5F"
                              : "#545454"
                          }
                        />
                        <circle
                          cx="34.6897"
                          cy="30.6897"
                          r="29.6897"
                          fill="white"
                          stroke={
                            location.pathname == val.page
                              ? "#C45F5F"
                              : "#545454"
                          }
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_265_1467"
                          x="0"
                          y="0"
                          width="69.3799"
                          height="72.4106"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_265_1467"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_265_1467"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.contentContainer}>
                    <p
                      className={`${styles.content}  ${
                        styles[`${val.uniqueId}`]
                      }`}
                      style={{
                        color:
                          location.pathname == val.page ? "#C45F5F" : "#545454",
                      }}
                    >
                      {val.text}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftLayout;
