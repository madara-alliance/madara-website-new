"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import React from "react";
import useResizeObserver from "use-resize-observer";
import MobileCarousel from "../components/MobileCarousel";
import { SwiperSlide } from "swiper/react";

const cards = [
  {
    heading: "Designed to be faster",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    lottie: "./DTBF.lottie",
  },
  {
    heading: "Focus on decentralisation",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    lottie: "./globeanime.lottie",
  },
  {
    heading: "Seamless composability",
    description:
      "Focus on your getting your thoughts out and crafting the best message while Madara.",
    lottie: "./ITC.lottie",
  },
  {
    heading: "Earn for every contribution",
    description:
      "You can find multiple issues to pick up on our GitHub. The best part - you get paid via OnlyDust for every contribution you make",
    lottie: "./tile4.lottie",
  },
  {
    heading: "Fastest growing ecosystem",
    description:
      "All chains built on the Madara stack would be connected with each other via shared sequencing layer. Interoperability should be as easy as making smart contract calls!",
    lottie: "./codefix.lottie",
  },
  {
    heading: "Create at the speed",
    description:
      "Focus on your getting your thoughts out and crafting the best message while Madara.",
    lottie: "./create_at_speed.lottie",
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
  };
  shouldAutoPlay?: boolean;
}) => {
  const lottieRef = React.useRef<DotLottieCommonPlayer>(null);
  return (
    <div className="flex h-[500px] flex-col rounded-[24px] bg-[#101010] text-left items-start p-8">
      <div className="h-[200px] pb-7">
        <DotLottiePlayer
          className="fix-lottie-container"
          ref={lottieRef}
          src={item.lottie}
          loop={item?.loop ?? true}
          autoplay={shouldAutoPlay ?? false}
          hover={shouldAutoPlay ? false : true}
        ></DotLottiePlayer>
      </div>
      <h4 className="text-2xl font-semibold text-white pb-4 text-left max-w-[70%]">{item.heading}</h4>
      <p className="text-base font-medium text-[#ADADAD]">{item.description}</p>
    </div>
  );
};

const About = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <section className="py-10" ref={ref}>
      <div className="grid gap-y-4 md:grid-rows-2 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
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
