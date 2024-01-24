import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileCarousel = ({ children, handleSlideChange }: { children: React.ReactNode, handleSlideChange?: (idx: number) => void }) => {
  return (
    <div className="flex-1 features-mobile-swiper">
      <Swiper
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        centeredSlides={false}
        slidesPerView={1.3}
        loop={true}
        onSlideChange={(swiper) => {
          handleSlideChange?.(swiper.realIndex);
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default MobileCarousel;
