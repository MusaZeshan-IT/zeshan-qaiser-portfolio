import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="mb-20 flex flex-col gap-y-20">
      <Hero />
      <Services />
    </div>
  );
}
