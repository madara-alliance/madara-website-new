import React from "react";
import PragmaLogo from "../../assets/images/testimonials/pragma.jpeg";
import KasarLabsLogo from "../../assets/images/testimonials/kasar_labs.jpeg";
import KarnotLogo from "../../assets/images/testimonials/karnot.jpeg";
import Image from "next/image";

const items = [
  {
    heading: "Pragma",
    subheading: "Building a zk Oracle",
    icon: PragmaLogo,
    description:
      "Madara stands out as an ideal combination of advanced technologies, utilizing both the CairoVM and Substrate frameworks. This new kind of stack provides the essential flexibility we require to create a highly efficient and provable oracle solution.",
  },

  {
    heading: "Kasar Labs",
    subheading: "Building a full node, Deoxys",
    icon: KasarLabsLogo,
    description:
      "Madara is the result of 6 years of development from ParityTech, modernized for today's tastes by the skilled developers from Starknet. It represents an impressive demonstration of what can be achieved through open source by potentially being one of the most powerful engine in the world of Blockchain.",
  },

  {
    heading: "Karnot",
    subheading: "Building rollup infra",
    icon: KarnotLogo,
    description:
      "At Karnot, our mission is to help app chain developers to build on top of the most efficient tech. Madara with the CairoVM helps us deliver exactly that. Madara app chains are not only the most performant but are also highly modular - there is no design hardcoded and you can replace any component you like.",
  },
];

const TestimonialsNew = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          {items.map((item, idx) => (
            <div className="w-[70px] h-[70px] rounded-[50%] mb-10">
              <Image
                src={item.icon}
                alt={item.heading}
                className="rounded-[50%]"
              />
            </div>
          ))}
        </div>

        <div className="text-xl pb-7 text-white text-center max-w-[50%]">
          {items[0].description}
        </div>
        <div className="flex gap-2 items-center">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="rounded-2xl text-xs text-white border border-[#3A3a3a] p-2 px-3"
            >
              {item.heading}&nbsp;
              <span className="opacity-50">{item.subheading}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
