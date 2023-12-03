'use client';
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
    <section
      className="h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-center pb-5">
        <span className="heading">
          Start work Smarter
          <br />
          Get&nbsp;
        </span>
        <span className="heading-font red-text-gradient">Madara</span>
      </h1>

      <div className="flex gap-x-2 lg:gap-x-12 items-center pt-20">
        {socials.map((social, idx) => (
          <div
            key={idx}
            onMouseMove={(e) => checkCursor(e, `footer-social-${idx}`)}
            className="flex relative flex-col items-center justify-center w-24 h-24 lg:w-[168px] lg:h-[156px] border border-[#3B3B3B] bg-[#101010] p-6 lg:p-10 rounded-[14px]"
          >
            <div className="shine-on-cursor w-8 h-8 lg:w-[168px] lg:h-[156px]" id={`footer-social-${idx}`}></div>
            <Image className="lg:z-[1]" src={social.icon} alt={social.text}
                    sizes="(max-width: 1024px) 24px, (max-width: 1200px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
