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
  const [isOpen, setIsOpen] = React.useState(false);
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

  const toggleNavClick = () => {
    setIsOpen(prevState => !prevState);
  }
  return (
    <div className="flex flex-col items-center fixed z-[100] top-0 w-full">
      <nav
        id="nav"
        className="w-full z-[100]"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="lg:px-32 md:px-28 sm:px-20 px-6 py-4  flex justify-between items-center md:grid md:grid-cols-3 bg-black/90">
          <div className="flex items-center">
            <Image src={MadaraLogo} alt="madara logo" />
            <h2 className="font-bold">MADARA</h2>
          </div>
          <button
            onClick={toggleNavClick}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        <div className={`absolute md:static z-[1] w-full flex flex-col md:flex-row md:items-center md:justify-end md:w-2/4 transition-transform bg-black p-4 ${
          isOpen ? "translate-y-0" : "translate-y-[-200%]"
        } md:translate-y-0 md:pt-0 md:p-0 md:pr-10`}>
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
          className="hidden md:visible items-center justify-end gap-2 transition-all opacity-0"
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
