import React from "react";
import { Post } from "../components/Post";
import { UserIcon } from "../components/UserIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const HomePage = (props) => {
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode]}
        className="stories-carousel"
      >
        {stories.map((story, index) => (
          <SwiperSlide>
            <UserIcon />
          </SwiperSlide>
        ))}
      </Swiper>
      <Post />
    </>
  );
};

export { HomePage };
