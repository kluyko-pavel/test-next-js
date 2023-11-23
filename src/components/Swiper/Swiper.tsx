"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Swiper.module.scss";
import Image from "next/image";
import { swiperArr } from "@/constants";
import { ISwiperSlide } from "@/types";

const Swiper = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className={styles.dots}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className={styles.wrapper}>
      <Slider className={styles.swiper} {...settings}>
        {swiperArr.map((el: ISwiperSlide) => (
          <Image
            key={el.id}
            src={el.src}
            fill
            style={{ objectFit: "contain" }}
            alt="Slider picture"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Swiper;
