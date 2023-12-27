"use client";
import React from "react";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import Twitter from "../../assets/images/socials/twitter.png";
import Telegram from "../../assets/images/socials/telegram.png";
import Image from "next/image";

const socials = [
  {
    icon: Telegram,
    text: "Telegram",
  },
  {
    icon: LinkedIn,
    text: "LinkedIn",
  },
  {
    icon: Twitter,
    text: "X (formerly Twitter)",
  },
];

const Footer = () => {
  const checkCursor = (e: React.MouseEvent, id: string) => {
    console.log(e);
    const el = document.getElementById(id);
    const { x, y } = el?.getBoundingClientRect() as DOMRect;
    if (x && y) {
      el?.style.setProperty("--cursor-x", String(e.clientX - x ?? 0));
      el?.style.setProperty("--cursor-y", String(e.clientY - y ?? 0));
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-between pt-48 pb-20">
      <div className="flex flex-col items-center">
        <h1 className="text-center pb-5">
          <span className="heading">
            Start work Smarter
            <br />
            Get&nbsp;
          </span>
          <span className="heading-font red-text-gradient">Madara</span>
        </h1>

        <div className="flex gap-x-2 lg:gap-x-12 items-center pt-16">
          {socials.map((social, idx) => (
            <div
              key={idx}
              id={`footer-social-${idx}`}
              onMouseMove={(e) => checkCursor(e, `footer-social-${idx}`)}
              className="shine-on-cursor flex relative flex-col items-center justify-center w-[80px] p-4 h-[80px] border border-[#3B3B3B] bg-[#101010] rounded-[14px]"
            >
              <Image src={social.icon} alt={social.text} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-xl text-white/30 font-normal pt-32">
        Copyright © 2023-24 Madara copyright name.
      </div>
    </section>
  );
};

export default Footer;
