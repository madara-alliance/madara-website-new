"use client";
import React from "react";
import Github from "../../assets/images/socials/github.png";
import Twitter from "../../assets/images/socials/twitter.png";
import Telegram from "../../assets/images/socials/telegram.png";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: Telegram,
    text: "Telegram",
    link: "https://t.me/MadaraStarknet",
  },
  {
    icon: Github,
    text: "Github",
    link: "https://github.com/keep-starknet-strange/madara",
  },
  {
    icon: Twitter,
    text: "X (formerly Twitter)",
    link: "https://twitter.com/MadaraStarknet",
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
    <section className="h-screen flex flex-col items-center" id="footer">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] md:h-[calc(100vh-156px)]">
        <h1 className="text-center pb-5">
          <span className="heading">
            Join us in building
            <br />
            the trustless&nbsp;
          </span>
          <span className="heading-font red-text-gradient">future</span>
        </h1>

        <div className="flex gap-x-2 lg:gap-x-12 items-center pt-20">
          {socials.map((social, idx) => (
            <Link
              target="_blank"
              key={idx}
              href={social.link}
              id={`footer-social-${idx}`}
              onMouseMove={(e) => checkCursor(e, `footer-social-${idx}`)}
              className="shine-on-cursor flex relative flex-col items-center justify-center w-[80px] p-4 h-[80px] border border-[#3B3B3B] bg-[#101010] rounded-[14px]"
            >
              <Image
                src={social.icon}
                alt={social.text}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-sm lg:text-xl text-white/30 font-normal pb-20 md:pb-32 text-center">
        Copyright © 2023-24 Madara
      </div>
    </section>
  );
};

export default Footer;
