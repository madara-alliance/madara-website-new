import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileCarousel = ({ children }: { children: React.ReactNode }) => {
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
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
      >
        {children}
        <div className="swiper-navigation">
          <button className="swiper-button-prev">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <button className="swiper-button-next">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default MobileCarousel;
