import React, { useRef } from "react";
import styles from "./Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const testimonialData = [
  {
    imgLink: "/images/testRahul.avif",
    custName: "Rahul Mehta",
    content:
      "We recently installed a manual door elevator in our apartment building, and the experience has been fantastic. The installation was quick, the quality is outstanding, and the pricing was very reasonable. The team provided excellent support and customized the lift to match our building's aesthetics. Highly recommended!",
  },
  {
    imgLink: "/images/testNeha.avif",
    custName: "Neha Sharma",
    content:
      "Our commercial complex needed an efficient auto door elevator to handle high foot traffic. The elevator we installed has been incredibly smooth, safe, and reliable. The modern design and seamless operation have impressed both tenants and visitors. A great investment!",
  },
  {
    imgLink: "/images/testVikram.avif",
    custName: "Vikram Joshi",
    content:
      "As a warehouse owner, efficiency in material handling is crucial. The goods elevator we installed has significantly improved productivity. It's strong, spacious, and handles heavy loads with ease. Installation was fast, and the quality is top-notch!",
  },
  {
    imgLink: "/images/testPooja.avif",
    custName: "Pooja Verma",
    content:
      "The stair elevator has made a world of difference for my elderly parents. It operates smoothly, is easy to use, and has given them the freedom to move around the house effortlessly. The team was professional, and the installation was hassle-free. Thank you for making our home more accessible!",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    fade: true,
  };
  const slideNextImage = () => {
    sliderRef.current.slickNext();
  };
  const slidePrevImage = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <h2 className={styles.header}>Testimonials</h2>

        <div className={styles.sliderInnerWrapper}>
          <Slider {...settings} className={styles.slider} ref={sliderRef}>
            {testimonialData.map((val, i) => {
              return (
                <div className={styles.cardWrapper} key={i}>
                  <div className={styles.card}>
                    <img
                      src={val.imgLink}
                      className={styles.cardImage}
                      alt=""
                    />
                    <div className={styles.cardRight}>
                      <h3 className={styles.custName}>{val.custName}</h3>
                      <div className={styles.contentContainer}>
                        <p className={styles.dquote}>"</p>
                        <p className={styles.content}>{val.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className={styles.larw} onClick={slidePrevImage}>
          <img src="/images/galLeftArw.svg" className={styles.arw} alt="" />
        </div>
        <div className={styles.rarw} onClick={slideNextImage}>
          <img src="/images/galRightArw.svg" className={styles.arw} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
