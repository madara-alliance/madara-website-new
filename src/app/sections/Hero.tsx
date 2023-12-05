import React from "react";
import Button from "../components/Button";
import HeroAsset from "../../assets/images/hero_asset.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen h-[1000px] max-h-[1000px] relative items-center overflow-hidden">
      <div className="z-[1] flex flex-col items-center pt-32">
        <h1 className="text-center pb-3 heading md:pb-5">
          Be the chain<br/>you want to see
        </h1>
        <h2 className="text-center text-texting-secondary pb-7 md:text-2xl md:pb-10 text-base font-normal md:max-w-[50%]">
          Madara is an open source framework that allows you to build app chains using the Starknet technology
        </h2>
        <div className="flex relative gap-4 md:gap-7">
          <div className="glow-circle absolute top-0 md:w-[426px] left-[-10%]" />
          <div className="glow-circle absolute top-0  md:w-[426px] right-[-10%]" />
          <Button>Build now</Button>
          <button className="px-6 md:px-9 md:w-[200px] py-2 md:py-4 text-center text-xl md:text-2xl bg-white/[0.09] text-[#FEE3E3] border-2 md:border-4 border-[#f75c5c]/[0.34] rounded-xl md:rounded-2xl">
            Contribute
          </button>
        </div>
      </div>
      <div className="absolute z-[0] left-0 bottom-0 flex items-center justify-center">
        <div className="w-[1300px]">
          <Image src={HeroAsset} width={1300}  alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
