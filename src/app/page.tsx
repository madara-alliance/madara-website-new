import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Navbar from "./components/Navbar";
import Architecture from "./sections/Architecture";
import HeroAsset from "./sections/HeroAsset";
import TestimonialsNew from "./sections/TestimonialsNew";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main
        id="main"
        className="max-w-[1300px] m-[0_auto] sm:px-20 px-6 bg-black bg-[url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png')]"
      >
        <Hero />
        <HeroAsset />
        <Features />
        <About />
        <Testimonials />
        <Architecture />
        <Footer />
      </main>
    </>
  );
}
