import React from "react";
import { UserIcon } from "./UserIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Post = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <UserIcon />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export { Post };
