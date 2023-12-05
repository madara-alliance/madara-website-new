import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="lg:px-32 md:px-28 sm:px-20 px-6 bg-[url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png')]">
      <Hero />
      <Features />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
