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

// function getSlideTransformEl(slideEl) {
//   return (
//     slideEl.querySelector('.swiper-slide-transform') ||
//     (slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform')) ||
//     slideEl
//   );
// }

// function effectTarget(slideEl) {
//   const transformEl = getSlideTransformEl(slideEl);
//   if (transformEl !== slideEl) {
//     transformEl.style.backfaceVisibility = 'hidden';
//     transformEl.style['-webkit-backface-visibility'] = 'hidden';
//   }
//   return transformEl;
// }

// const setTranslate = (swiper) => {
//   const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
//   const params = swiper.params.coverflowEffect;
//   const transform = swiper.translate;
//   const center = -transform + swiperWidth / 2
//   const translate = params.depth;
//   // Each slide offset from center
//   for (let i = 0, length = slides.length; i < length; i += 1) {
//     const slideEl = slides[i];
//     const slideSize = slidesSizesGrid[i];
//     const slideOffset = slideEl.swiperSlideOffset;
//     const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
//     const offsetMultiplier =
//       typeof params.modifier === 'function'
//         ? params.modifier(centerOffset)
//         : centerOffset * params.modifier;

//     // var rotateZ = 0
//     let translateZ = -translate * Math.abs(offsetMultiplier);

//     let stretch = params.stretch;
//     // Allow percentage to make a relative stretch for responsive sliders
//     if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
//       stretch = (parseFloat(params.stretch) / 100) * slideSize;
//     }
//     let translateY =
//     let translateX =  stretch * offsetMultiplier

//     let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

//     // Fix for ultra small values
//     if (Math.abs(translateX) < 0.001) translateX = 0;
//     if (Math.abs(translateY) < 0.001) translateY = 0;
//     if (Math.abs(translateZ) < 0.001) translateZ = 0;

//     if (Math.abs(scale) < 0.001) scale = 0;

//     const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
//     const targetEl = effectTarget(params, slideEl);
//     targetEl.style.transform = slideTransform;

//     slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

//     if (params.slideShadows) {
//       // Set shadows
//       let shadowBeforeEl = isHorizontal
//         ? slideEl.querySelector('.swiper-slide-shadow-left')
//         : slideEl.querySelector('.swiper-slide-shadow-top');
//       let shadowAfterEl = isHorizontal
//         ? slideEl.querySelector('.swiper-slide-shadow-right')
//         : slideEl.querySelector('.swiper-slide-shadow-bottom');
//       if (!shadowBeforeEl) {
//         shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
//       }
//       if (!shadowAfterEl) {
//         shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
//       }
//       if (shadowBeforeEl)
//         shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
//       if (shadowAfterEl)
//         shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
//     }
//   }
// };
// const setTransition = (duration) => {
//   const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));

//   transformElements.forEach((el) => {
//     el.style.transitionDuration = `${duration}ms`;
//     el.querySelectorAll(
//       '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
//     ).forEach((shadowEl) => {
//       shadowEl.style.transitionDuration = `${duration}ms`;
//     });
//   });
// };

const Testimonials = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      ref={ref}
    >
      <h1 className="heading pb-14">Word on the street</h1>
      <div className="swiper-container">
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
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={0}
            watchSlidesProgress={true}
            loop={true}
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
