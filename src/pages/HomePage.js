import React from "react";
import { Post } from "../components/Post";
import { StoriesIcon } from "../components/UserIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import { BottomToolBar, TopToolBar } from "../components/ToolBars";

const stories = [];

for (let i = 0; i < 10 + Math.floor(Math.random() * 10); i++) {
  stories.push(Math.floor(Math.random() * 5) > 3);
}

const HomePage = (props) => {
  return (
    <>
      <TopToolBar />
      <StoriesCarousel />
      <Post />
      <BottomToolBar />
    </>
  );
};

const StoriesCarousel = (props) => {
  return (
    <section className="stories-carousel">
      <Swiper
        spaceBetween={5}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode]}
        className="stories-carousel__carousel"
      >
        <SwiperSlide>
          <StoriesIcon random={true} watched={true} addStory={true} />
        </SwiperSlide>
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <StoriesIcon random={true} watched={story} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export { HomePage };
