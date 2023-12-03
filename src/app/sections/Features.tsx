"use client";
import Image from "next/image";
import React from "react";
import CardImage from "../../assets/images/test.png";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useResizeObserver from "use-resize-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MobileCarousel from "../components/MobileCarousel";

const Card = () => {
  return (
    <div className="h-[500px] bg-[#101010] p-4 flex items-center justify-center lg:rounded-[48px] rounded-[18px]">
      <Image src={CardImage} alt="test" />
    </div>
  );
};

const CardContainer = ({ idx }: { idx: number }) => {
  return (
    <div
      className={`card h-full flex items-center absolute top-0 left-0 z-[${idx}] opacity-0 pr-16`}
    >
      <Card />
    </div>
  );
};

const FeaturesDesktop = () => {
  const itemsRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentElement, setCurrentElemet] = React.useState("01");

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = itemsRef.current?.querySelectorAll(".card");

    if (cards?.length) {
      //   const t1 = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "top top",
      //       end: "bottom bottom",
      //       scrub: 1,
      //     },
      //   });

      console.log(cards);

      gsap.to(".progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.5,
        },
      });

      const t1 = gsap
        .timeline({
          scrollTrigger: {
            markers: true,
            trigger: containerRef.current,
            start: "33% top",
            end: "34% top",
            toggleActions: "play none reverse none",
          },
        })
        .fromTo(
          cards[1],
          {
            opacity: 0,
            y: "20%",
            scale: 0.8,
            ease: Power4.easeIn,
          },
          {
            opacity: 1,
            y: "0%",
            scale: 1,
            onReverseComplete: () => {
              setCurrentElemet("01");
            },
            onComplete: () => {
              setCurrentElemet("02");
              gsap
                .timeline({
                  scrollTrigger: {
                    markers: true,
                    trigger: containerRef.current,
                    start: "60% top",
                    end: "61% top",
                    toggleActions: "play none reverse none",
                  },
                })
                .fromTo(
                  cards[2],
                  {
                    opacity: 0,
                    y: "20%",
                    scale: 0.8,
                    ease: Power4.easeIn,
                  },
                  {
                    opacity: 1,
                    y: "0%",
                    scale: 1,
                    onReverseComplete: () => {
                      setCurrentElemet("02");
                    },
                    onComplete: () => {
                      setCurrentElemet("03");
                    },
                  }
                )
                .fromTo(
                  cards[1],
                  {
                    opacity: 1,
                    y: "0%",
                    scale: 1,
                    ease: Power4.easeIn,
                  },
                  {
                    opacity: 0,
                    y: "20%",
                    scale: 0.8,
                  },
                  "<"
                );
            },
          }
        )
        .fromTo(
          cards[0],
          {
            opacity: 1,
            y: "0%",
            scale: 1,
            ease: Power4.easeIn,
          },
          {
            opacity: 0,
            y: "20%",
            scale: 0.8,
          },
          "<"
        );

      //   t1.fromTo(
      //     cards[2],
      //     {
      //       opacity: 0,
      //       y: "100%",
      //       scale: 0.8,
      //       ease: Power4.easeIn,
      //     },
      //     {
      //       opacity: 1,
      //       y: "0%",
      //       scale: 1,
      //     }
      //   );
    }
  }, []);
  return (
    <div className="w-2/5 md:h-[500vh] relative" ref={containerRef}>
      <div
        className="sticky top-0 left-0 flex flex-col items-center h-screen"
        ref={itemsRef}
      >
        <CardContainer idx={1} />
        <CardContainer idx={2} />
        <CardContainer idx={3} />
        <div className="absolute top-[50%] right-0 -translate-y-[50%] flex flex-col items-center gap-2">
          <span className="text-[12px] opacity-40">{currentElement}</span>
          <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
            <span className="progress absolute top-0 left-0 w-full bg-[#FF6969] rounded-full"></span>
          </div>
          <span className="text-[12px] opacity-40">03</span>
        </div>
      </div>
    </div>
  );
};

const FeaturesMobile = () => {
  return (
    <MobileCarousel>
      {Array(5)
        .fill("")
        .map((e, idx) => (
          <SwiperSlide key={idx}>
            <Card />
          </SwiperSlide>
        ))}
    </MobileCarousel>
  );
};

const Features = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  console.log(width);
  
  return (
    <section className="lg:h-[500vh]" id="container" ref={ref}>
      <div className="flex flex-col lg:flex-row  lg:justify-between h-screen relative">
        <div className="lg:w-2/4 lg:h-[500vh]" id="left-container">
          <div className="flex flex-col justify-center lg:h-screen text-left lg:sticky top-0 left-0">
            <p className="text-[#FF6969] lg:text-xl text-lg pb-3 font-bold tracking-widest">
              MADARA
            </p>
            <h1 className="pb-10 heading">
              Create at
              <br />
              the speed
              <br />
              of thought
            </h1>
            {width >= 768 ? (
              <h2 className="text-texting-secondary pb-10 text-2xl">
                Focus on your getting your thoughts out
                <br />
                and crafting the best message while Madara.
              </h2>
            ) : null}
          </div>
        </div>
        {width < 768 ? <FeaturesMobile /> : <FeaturesDesktop />}
      </div>
    </section>
  );
};

export default Features;
