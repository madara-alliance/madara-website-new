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
        grabCursor={true}
        slidesPerView={1.2}
        spaceBetween={0}
        loop={true}
        onSlideChange={({ activeIndex }) => {
          handleSlideChange?.(activeIndex);
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default MobileCarousel;
