"use client";
import Image from "next/image";
import React from "react";
import CardImage from "../../assets/images/test.png";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useResizeObserver from "use-resize-observer";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MobileCarousel from "../components/MobileCarousel";
import createGlobe from "cobe";
import { useOnScreen } from "../IntersectionObserver.hook";
import { DotLottiePlayer } from "@dotlottie/react-player";

const Card = ({ lottie }: { lottie: string }) => {
  return (
    <div className="h-[500px] w-full bg-[#101010] p-4 flex items-center justify-center lg:rounded-[48px] rounded-[18px]">
      <DotLottiePlayer
        className="fix-lottie-container"
        src={lottie}
        loop
        autoplay
      ></DotLottiePlayer>
    </div>
  );
};

const CardContainer = ({
  children,
  idx,
}: {
  children: React.ReactNode;
  idx: number;
}) => {
  return (
    <div
      className={`card h-full w-full flex items-center absolute top-0 left-0 z-[${idx}] opacity-0 pr-16`}
    >
      {children}
    </div>
  );
};

const GlobeCard = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isIntersecting] = useOnScreen(containerRef, 0.1);

  let arrayOfLocations = [
    // longitude latitude
    { location: [23.289288, -726.527422], size: 0.1 },
    { location: [24.512141, 79.557475], size: 0.1 },
    { location: [25.219851, -247.040304], size: 0.1 },
    { location: [29.395337, -466.817582], size: 0.1 },
    { location: [33.920572, -268.499638], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [48.277709, -273.133263], size: 0.1 },
    { location: [49.077464, -237.366015], size: 0.1 },
    { location: [50.961887, -478.815733], size: 0.1 },
    { location: [66.250822, -227.734218], size: 0.1 },
    { location: [70.189292, -247.797404], size: 0.1 },
    { location: [37.7595, -122.4367], size: 0.1 },
    { location: [50.7128, -100.006], size: 0.1 },
    { location: [53.234811, -419.677408], size: 0.1 },
    { location: [100.7128, -20.006], size: 0.1 },
    { location: [140.7128, -174.006], size: 0.1 },
    { location: [-26.991842, -221.729118], size: 0.1 },
    { location: [-22.545538, -692.403564], size: 0.1 },
    { location: [-14.455958, -767.54421], size: 0.1 },
    { location: [-10.039176, -763.452722], size: 0.1 },
    { location: [-0.663285, -709.093116], size: 0.1 },
    { location: [3.129546, -692.433781], size: 0.1 },
    { location: [64.160925, -117.04342], size: 0.1 },
    { location: [66.995624, -229.85608], size: 0.1 },
    { location: [82.446598, -392.295942], size: 0.1 },
    { location: [84.335354, -287.461823], size: 0.1 },
    { location: [-68.356673, -782.548979], size: 0.1 },
    { location: [-41.471544, -568.142977], size: 0.1 },

    { location: [67.140498, -281.492401], size: 0.1 },

    { location: [-47.842888, -789.888212], size: 0.1 },
  ];
  React.useEffect(() => {
    let phi = (2 * Math.PI) / 3;
    let markers: Array<{ location: number[]; size: number }> = [];
    if (canvasRef?.current && isIntersecting) {
      const globe = createGlobe(canvasRef?.current, {
        devicePixelRatio: 2,
        height: 900,
        width: 900,
        phi: 2 * Math.PI,
        theta: 0,
        dark: 1,
        diffuse: 1,
        mapSamples: 20000,
        mapBrightness: 2,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [140 / 255, 80 / 255, 80 / 255],
        glowColor: [30 / 255, 20 / 255, 20 / 255],
        opacity: 1,
        markers: [],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          console.log(state);

          state.markers = markers;
          state.phi = phi;
          phi += 0.005;
          const d = arrayOfLocations.pop();
          setTimeout(() => {
            if (d) markers = markers.concat([d]);
          }, 20000 * (phi - (2 * Math.PI) / 3));
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, [isIntersecting]);

  return (
    <div
      ref={containerRef}
      className="h-[500px] w-full bg-[#101010] p-4 flex items-center justify-center lg:rounded-[48px] rounded-[18px]"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: '450px',
          aspectRatio: 1,
        }}
      />
    </div>
  );
};

const copies = [
  {
    heading: "Built in the<br/>correct way",
    description:
      "Madara has made developing blockchains using the Starknet technology open source and self-serve for the first time. Setup Madara, deploy your contracts and push to mainnet!",
    cardAsset: () => <GlobeCard />,
  },
  {
    heading: "Battle tested<br/>for the future",
    description:
      "The Starknet technology has been used in production for almost 4 years and is used by the likes of dYdX, Sorare and Immutable. It is based on Cairo - the most efficient provable language that exists today.",
    cardAsset: () => <Card lottie="./battle_tested_for_future.lottie" />,
  },
  {
    heading: "Built in the<br/>correct way",
    description:
      "Madara has been open-source since day one and has over 70+ contributors all over the world. We value your work which is why you get paid for every contribution you make!",
    cardAsset: () => <Card lottie="./fold3.lottie" />,
  },
];

const FeaturesDesktop = () => {
  const itemsRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentElement, setCurrentElemet] = React.useState("01");

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftCards = document.querySelectorAll(".left-content");
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
          [leftCards[1], cards[1]],
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
                  [leftCards[2], cards[2]],
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
                  [leftCards[1], cards[1]],
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
          [leftCards[0], cards[0]],
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
    <>
      <div className="lg:w-2/4 lg:h-[500vh]" id="left-container">
        <div className="flex flex-col justify-center lg:h-screen text-left lg:sticky top-0 left-0">
          {copies.map((copy, idx) => (
            <div className="left-content absolute opacity-0 lg:pr-12" key={idx}>
              <p className="text-[#FF6969] lg:text-xl text-lg pb-3 font-bold tracking-widest">
                MADARA
              </p>
              <h1
                className="pb-10 heading"
                dangerouslySetInnerHTML={{ __html: copy.heading }}
              />
              <h2
                className="text-texting-secondary pb-10 text-2xl"
                dangerouslySetInnerHTML={{ __html: copy.description }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/4 md:h-[500vh] relative" ref={containerRef}>
        <div
          className="sticky top-0 left-0 flex flex-col items-center h-screen"
          ref={itemsRef}
        >
          {copies.map((item, idx) => (
            <CardContainer idx={idx + 1}>{item.cardAsset()}</CardContainer>
          ))}
          <div className="absolute top-[50%] right-0 -translate-y-[50%] flex flex-col items-center gap-2">
            <span className="text-[12px] opacity-40">{currentElement}</span>
            <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
              <span className="progress absolute top-0 left-0 w-full bg-[#FF6969] rounded-full"></span>
            </div>
            <span className="text-[12px] opacity-40">03</span>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturesMobile = () => {
  return (
    <>
      <MobileCarousel>
        {copies.map((e, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <div className="lg:w-2/4 lg:h-[500vh]" id="left-container">
                <div className="flex flex-col justify-center lg:h-screen text-left lg:sticky top-0 left-0">
                  <p className="text-[#FF6969] lg:text-xl text-lg pb-3 font-bold tracking-widest">
                    MADARA
                  </p>
                  <h1 className="pb-10 heading" dangerouslySetInnerHTML={{ __html: e.heading }} />
                </div>
              </div>
              {e.cardAsset()}
            </div>
          </SwiperSlide>
        ))}
      </MobileCarousel>
    </>
  );
};

const Features = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  console.log(width);

  return (
    <section className="lg:h-[500vh] lg:px-10" id="container" ref={ref}>
      <div className="flex flex-col lg:flex-row  lg:justify-between h-screen relative">
        {width >= 768 ? <FeaturesDesktop /> : <FeaturesMobile />}
      </div>
    </section>
  );
};

export default Features;
