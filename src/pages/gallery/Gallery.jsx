import React, { useRef, useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { galleryImageData } from "../../data/galleryData";

const Gallery = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Run once when component mounts
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const slideNextImage1 = () => {
    sliderRef1.current?.slickNext();
  };
  const slidePrevImage1 = () => {
    sliderRef1.current?.slickPrev();
  };
  const slideNextImage2 = () => {
    sliderRef2.current?.slickNext();
  };
  const slidePrevImage2 = () => {
    sliderRef2.current?.slickPrev();
  };

  // Divide galleryImageData into two halves
  const middleIndex = Math.ceil(galleryImageData.length / 2);
  const firstHalf = galleryImageData.slice(0, middleIndex);
  const secondHalf = galleryImageData.slice(middleIndex);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>GALLERY</h1>

      <div className={styles.sliderContainer}>
        {isMobile ? (
          <>
            {/* First Slider */}
            <div style={{
              marginBottom:"5vh"
            }} className={styles.sliderWrapper}>
              <Slider {...settings} className={styles.slider} ref={sliderRef1}>
                {firstHalf.map((val, i) => (
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
                ))}
              </Slider>

              <div className={styles.leftArrow} onClick={slidePrevImage1}>
                <img src="/images/galLeftArw.svg" alt="" />
              </div>
              <div className={styles.rightArrow} onClick={slideNextImage1}>
                <img src="/images/galRightArw.svg" alt="" />
              </div>
            </div>

            {/* Second Slider */}
            <div className={styles.sliderWrapper}>
              <Slider {...settings} className={styles.slider} ref={sliderRef2}>
                {secondHalf.map((val, i) => (
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
                ))}
              </Slider>

              <div className={styles.leftArrow} onClick={slidePrevImage2}>
                <img src="/images/galLeftArw.svg" alt="" />
              </div>
              <div className={styles.rightArrow} onClick={slideNextImage2}>
                <img src="/images/galRightArw.svg" alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Single Slider for larger screens */}
            <div className={styles.sliderWrapper}>
              <Slider {...settings} className={styles.slider} ref={sliderRef1}>
                {galleryImageData.map((val, i) => (
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
                ))}
              </Slider>

              <div className={styles.leftArrow} onClick={slidePrevImage1}>
                <img src="/images/galLeftArw.svg" alt="" />
              </div>
              <div className={styles.rightArrow} onClick={slideNextImage1}>
                <img src="/images/galRightArw.svg" alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
