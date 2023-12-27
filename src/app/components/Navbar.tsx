"use client";
import React from "react";
import MadaraLogo from "../../assets/images/madara_logo.png";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "Home",
    link: "#home",
  },
];

const Navbar = () => {
  const scrollRef = React.useRef<number>(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("button-container");
      if (
        document.documentElement.scrollTop >
          document.documentElement.clientHeight &&
        el
      ) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0%)";
      } else if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(100%)";
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col items-center fixed z-[100] top-0 w-full ">
      <nav
        id="nav"
        className="w-full px-20 py-4 z-[100] grid grid-cols-3 bg-black/90"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="flex items-center">
          <Image src={MadaraLogo} alt="madara logo" />
          <h2 className="font-bold">MADARA</h2>
        </div>
        <div className="flex items-center justify-between">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-[#C0C0C0] hover:text-white text-lg active:text-white"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div
          id="button-container"
          className="flex items-center justify-end gap-2 transition-all opacity-0"
        >
          <a className="text-[#FF7074] font-semibold text-lg px-5">Build now</a>
          <button className="bg-[#BF383C] border-[1.5px] border-[#C77475] flex items-center px-5 py-2 rounded-[32px]">
            Contribute
          </button>
        </div>
      </nav>
      <div className="h-[1px] bg-[#464646] navbar-reveal-animate "></div>
    </div>
  );
};

export default Navbar;
