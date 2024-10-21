import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Banner />
    </div>
  );
}
