import React, { useRef } from "react";
import styles from "./Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { galleryImageData } from "../../../data/galleryData";

const Gallery = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideNextImage = () => {
    sliderRef.current.slickNext();
  };
  const slidePrevImage = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Gallery</h2>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} className={styles.slider} ref={sliderRef}>
            {galleryImageData.map((val, i) => {
              return (
                <div className={styles.imageWrapper} key={i}>
                  {val.fileType === "image" ? (
                    <img
                      src={`/images/gallery/${val.fileName}`}
                      alt=""
                      className={styles.galImage}
                    />
                  ) : (
                    <video controls className={styles.galVid}>
                      <source
                        src={`/images/gallery/${val.fileName}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </Slider>

          <div className={styles.leftArrow} onClick={slidePrevImage}>
            <img src="/images/galLeftArw.svg" alt="" />
          </div>
          <div className={styles.rightArrow} onClick={slideNextImage}>
            <img src="/images/galRightArw.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
