"use client";
import React from "react";
import Button from "../components/Button";
import HeroAsset from "../../assets/images/hero_asset.png";
import Image from "next/image";
import MadaraLogo from "../../assets/images/madara_logo.png";
import Chain from "../../assets/networkchain.svg";
import Base from "../../assets/base-gd.svg";
import { motion } from "framer-motion";

const Hero = () => {
  // t1.fromTo('.orbit-1', { opacity: 0 }, { opacity: 1, duration: 1 })

  const height = 775;

  return (
    <section className="h-[calc(100vh-140px)] flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-center pb-3 heading md:pb-5 animate-[enter_0.6s_ease-in_backwards_0.4s]">
          Be the chain
          <br />
          you want to see
        </h1>
        <h2 className="text-center text-texting-secondary pb-7 md:text-2xl md:pb-10 text-base font-normal md:max-w-[50%] animate-[enter_0.6s_ease-in_backwards_0.4s]">
          Madara is an open source framework that allows you to build app chains
          using the Starknet technology
        </h2>
        <div className="flex relative gap-4 md:gap-7 animate-[enter_0.6s_ease-in_backwards_0.4s]">
          <div className="glow-circle absolute top-0 md:w-[426px] left-[-10%]" />
          <div className="glow-circle absolute top-0  md:w-[426px] right-[-10%]" />
          <Button>Build now</Button>
          <button className="px-6 md:px-9 md:w-[200px] py-2 md:py-4 text-center text-xl md:text-2xl bg-white/[0.09] text-[#FEE3E3] border-2 md:border-4 border-[#f75c5c]/[0.34] rounded-xl md:rounded-2xl">
            Contribute
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
