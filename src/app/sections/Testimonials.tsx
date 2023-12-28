"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import useResizeObserver from "use-resize-observer";
import MobileCarousel from "../components/MobileCarousel";
import PragmaLogo from "../../assets/images/testimonials/pragma.jpeg";
import KasarLabsLogo from "../../assets/images/testimonials/kasar_labs.jpeg";
import KarnotLogo from "../../assets/images/testimonials/karnot.jpeg";
import Image from "next/image";
import { useInView, useAnimate } from "framer-motion";
import { stagger } from "framer-motion/dom";

const Card = ({ data }) => (
  <div className="flex flex-col items-center p-4 py-5 lg:p-12 text-center border border-[#3B3B3B] bg-gradient-to-r bg-[#101010] rounded-[28px] ">
    <div className="w-[70px] h-[70px] rounded-[50%] mb-4">
      <Image src={data.icon} alt={data.heading} className="rounded-[50%]" />
    </div>
    <h3 className="font-semibold text-[#FDFDFD] text-3xl pb-1">
      {data.heading}
    </h3>
    <h4 className="text-[#FF6969] font-medium text-lg pb-8">
      {data.subheading}
    </h4>
    <p className="font-medium text-[#ADADAD] text-base">{data.description}</p>
  </div>
);

function getSlideTransformEl(slideEl) {
  return (
    slideEl.querySelector(".swiper-slide-transform") ||
    (slideEl.shadowRoot &&
      slideEl.shadowRoot.querySelector(".swiper-slide-transform")) ||
    slideEl
  );
}

function effectTarget(slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

const items = [
  {
    heading: "Pragma",
    subheading: "Building a zk Oracle",
    icon: PragmaLogo,
    description:
      "Madara stands out as an ideal combination of advanced technologies, utilizing both the CairoVM and Substrate frameworks. This new kind of stack provides the essential flexibility we require to create a highly efficient and provable oracle solution.",
  },

  {
    heading: "Kasar Labs",
    subheading: "Building a full node, Deoxys",
    icon: KasarLabsLogo,
    description:
      "Madara is the result of 6 years of development from ParityTech, modernized for today's tastes by the skilled developers from Starknet. It represents an impressive demonstration of what can be achieved through open source by potentially being one of the most powerful engine in the world of Blockchain.",
  },

  {
    heading: "Karnot",
    subheading: "Building rollup infra",
    icon: KarnotLogo,
    description:
      "At Karnot, our mission is to help app chain developers to build on top of the most efficient tech. Madara with the CairoVM helps us deliver exactly that. Madara app chains are not only the most performant but are also highly modular - there is no design hardcoded and you can replace any component you like.",
  },
];

const setTranslate = (swiper) => {
  const {
    width: swiperWidth,
    height: swiperHeight,
    slides,
    slidesSizesGrid,
  } = swiper;
  const params = swiper.params.myEffect;
  const transform = swiper.translate;

  const center = -transform + swiperWidth / 2;
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

    let translateX = 30 * offsetMultiplier;

    let scale = 1 - (1 - 0.8) * Math.abs(offsetMultiplier);
    let blur = 2 * Math.abs(offsetMultiplier);

    const slideTransform = `translate3d(${translateX}px,0,${translateZ}px) scale(${scale})`;
    const filter = `blur(${blur}px)`;
    const targetEl = effectTarget(slideEl);
    targetEl.style.transform = slideTransform;
    targetEl.style.filter = filter;

    slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
  }
};

const Testimonials = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2, once: true });

  React.useEffect(() => {
    if (isInView) {
      animate(
        ".testimonial-container>.testimonial-item",
        {
          opacity: [0, 1],
          y: ["10%", "0%"],
        },
        {
          delay: stagger(0.1),
          duration: 0.5,
        }
      );
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-36">
      <div className="testimonial-container" ref={scope}>
        <h1 className="heading pb-14 text-center testimonial-item opacity-0">Word on the street</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between relative testimonial-item opacity-0">
          {width >= 768 ? (
            <div className="swiper-container">
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
                  const transformElements = swiper.slides.map((slideEl) =>
                    getSlideTransformEl(slideEl)
                  );

                  transformElements.forEach((el) => {
                    el.style.transitionDuration = `${duration}ms`;
                  });
                }}
              >
                {[...items, ...items].map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Card data={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <div className="ml-[-1.5rem] mr-[-1.5rem]">
              <MobileCarousel>
                {items.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="pl-[20px]">
                      <Card data={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </MobileCarousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
