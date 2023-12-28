"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import React from "react";
import useResizeObserver from "use-resize-observer";
import MobileCarousel from "../components/MobileCarousel";
import { SwiperSlide } from "swiper/react";
import { useInView, useAnimate } from "framer-motion";
import { stagger } from "framer-motion/dom";
import a1 from "../../assets/images/about/design_to_be_faster.svg";
import a2 from "../../assets/images/about/decentralised.svg";
import a3 from "../../assets/images/about/seemless_compatability.svg";
import a4 from "../../assets/images/about/earn_for_every.svg";
import a5 from "../../assets/images/about/fastest_growing.svg";
import a6 from "../../assets/images/about/create_at_the_speed.svg";
import Image from "next/image";

const cards = [
  {
    heading: "Designed to be faster",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    image: a1,
  },
  {
    heading: "Focus on decentralisation",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    image: a2,
  },
  {
    heading: "Seamless composability",
    description:
      "Focus on your getting your thoughts out and crafting the best message while Madara.",
    image: a3,
  },
  {
    heading: "Earn for every contribution",
    description:
      "You can find multiple issues to pick up on our GitHub. The best part - you get paid via OnlyDust for every contribution you make",
    image: a4,
  },
  {
    heading: "Fastest growing ecosystem",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    image: a5,
  },
  {
    heading: "Create at the speed",
    description:
      "Focus on your getting your thoughts out and crafting the best message while Madara.",
    image: a6,
  },
];

const Card = ({
  item,
  shouldAutoPlay,
}: {
  item: {
    heading: string;
    description: string;
    lottie: string;
    loop?: boolean;
    image: HTMLImageElement;
  };
  shouldAutoPlay?: boolean;
}) => {
  const containerRef = React.useRef(null);
  const lottieRef = React.useRef<DotLottieCommonPlayer>(null);

  return (
    <div className="about-card opacity-0 flex h-[360px] flex-col text-left items-center rounded-2xl isolate">
      <div className="maast-border-inner overflow-hidden pt-3">
        <div className="h-[180px] flex justify-center">
          <Image src={item.image} alt={item.heading} />
        </div>
        <div className="p-3 pt-4 pl-4">
          <h4 className="text-xl font-medium text-white pb-4 text-left">
            {item.heading}
          </h4>
          <p className="text-base font-normal text-[#ADADAD]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2, once: true });

  React.useEffect(() => {
    if (isInView) {
      animate(
        "#about-container>.about-card",
        {
          opacity: [0, 1],
          y: ["10%", "0%"],
        },
        {
          delay: stagger(0.2),
          duration: 0.5,
        }
      );
    }
  }, [isInView]);

  const checkCursor = (e: React.MouseEvent) => {
    const elements = document.querySelectorAll(".maast-border-content");

    if (elements) {
      let a: Element[] = [];
      const items = [...elements].map((item) => [...item.children]).flat();
      items.forEach((el) => {
        const rect = el?.getBoundingClientRect() as DOMRect;
        console.log(rect);

        const { left, top } = rect;

        if (left && top) {
          console.log(el);

          el?.style.setProperty(
            "--cursor-x",
            `${String(e.clientX - left ?? 0)}px`
          );
          el?.style.setProperty(
            "--cursor-y",
            `${String(e.clientY - top ?? 0)}px`
          );
        }
      });
    }
  };

  return (
    <section className="py-10 maast-borders" ref={ref}>
      <h1 className="heading pb-14 text-center">Word on the street</h1>
      <div
        ref={scope}
        id="about-container"
        className="grid gap-y-4 md:grid-rows-2 md:grid-cols-3 md:gap-x-8 md:gap-y-8 maast-border-content"
        onMouseMove={(e) => checkCursor(e)}
      >
        {cards.map((item, idx) => (
          <React.Fragment key={idx}>
            <Card item={item} shouldAutoPlay={width < 768} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;
