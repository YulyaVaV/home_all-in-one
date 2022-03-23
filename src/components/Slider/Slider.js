import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.scss";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import Category from '../Categories/component/Category.jsx';

SwiperCore.use([Navigation]);

export const Slider = ({categories}) => {
  console.log(categories);
  return (
    <>
    <Swiper
      navigation={true}
      spaceBetween={30}
      slidesPerView={3}
    >  
      {
        categories.map(item => (
          <SwiperSlide>
            <Category
              title={item.title}
              img={item.img}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};
