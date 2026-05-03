import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import WefiSection from "./components/WefiSection";
import WefiPartner from "./components/WefiPartner";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <WefiSection />
        <WefiPartner />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
