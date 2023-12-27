"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import useResizeObserver from "use-resize-observer";
import MobileCarousel from "../components/MobileCarousel";

const Card = () => (
  <div className="flex flex-col p-12 pt-5 text-center border border-[#3B3B3B] bg-gradient-to-r bg-[#101010] rounded-[28px]">
    <h3 className="font-semibold text-[#FDFDFD] text-3xl pb-3">Ryan Glasgow</h3>
    <h4 className="text-[#FF6969] font-medium text-lg pb-8">CEO, Spring</h4>
    <p className="font-medium text-[#ADADAD] text-base">
      “Focus on your getting your thoughts out and crafting the best message
      while Madara. Locus on your getting your thoughts out.Three liner would
      just look good”
    </p>
  </div>
);

function getSlideTransformEl(slideEl) {
  return (
    slideEl.querySelector('.swiper-slide-transform') ||
    (slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform')) ||
    slideEl
  );
}

function effectTarget(slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}

const setTranslate = (swiper) => {
  const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
  const params = swiper.params.myEffect;
  const transform = swiper.translate;
  
  const center = -transform + swiperWidth / 2
  const translate = 100;
  // Each slide offset from center
  for (let i = 0, length = slides.length; i < length; i += 1) {
    const slideEl = slides[i];
    const slideSize = slidesSizesGrid[i];
    const slideOffset = slideEl.swiperSlideOffset;
    const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
    const offsetMultiplier = centerOffset * 1;
    
    // var rotateZ = 0
    let translateZ = -translate * Math.abs(offsetMultiplier);

    let translateX =  60*offsetMultiplier
  

    let scale = 1 - (1 - 0.8) * Math.abs(offsetMultiplier);
    let blur = 2 * Math.abs(offsetMultiplier);

    const slideTransform = `translate3d(${translateX}px,0,${translateZ}px) scale(${scale})`;
    const filter = `blur(${blur}px)`
    const targetEl = effectTarget(slideEl);
    targetEl.style.transform = slideTransform;
    targetEl.style.filter = filter;

    slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

  }
};


const Testimonials = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <section
      className="flex flex-col items-center justify-center"
      ref={ref}
    >
      <h1 className="heading pb-14">Word on the street</h1>
      <div className="swiper-container h-full flex items-center">
        {width < 768 ? (
          <MobileCarousel>
            {Array(5)
              .fill("")
              .map((e, idx) => (
                <SwiperSlide key={idx}>
                  <Card />
                </SwiperSlide>
              ))}
          </MobileCarousel>
        ) : (
          <Swiper
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            watchSlidesProgress={true}
            loop={true}
            effect="myEffect"
            onSetTranslate={setTranslate}
            onSetTransition={(swiper, duration) => {
              const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
          
              transformElements.forEach((el) => {
                el.style.transitionDuration = `${duration}ms`;
              });
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>

            <SwiperSlide>
              <Card />
            </SwiperSlide>

            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
