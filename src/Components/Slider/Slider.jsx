import React from "react";
import "./Slider.css";
import Data from "./Data";
import Item from "../Item/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: "4rem", color: "#012E4A" }}>
        Swiper js slider
      </h1>
      <Swiper
        className="container_items"
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        // navigation={true}
      >
        {Data.map((data) => {
          return (
            <SwiperSlide key={data.avatar}>
              <Item {...data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
