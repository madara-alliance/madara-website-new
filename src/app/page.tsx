import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="lg:px-32 md:px-28 sm:px-20 px-6">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
