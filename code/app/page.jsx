
import Header from "./components/Header";
import Hero from "./components/hero";
export default function Home() {
  return (
    <main className="text-black font-['Inter']">
      <Header />
      <Hero />
      <div id="root"></div>

      <section id="work" className="min-h-screen p-8 bg-black">
        <h2 className="text-center"><span className="text-white text-5xl font-bold font-['Inter'] leading-[48px]">A small selection of </span><span className="text-teal-400 text-5xl font-bold font-['Inter'] leading-[48px]">recent projects</span></h2>      </section>

      <section id="about" className="min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-bold">About Me</h2>
      </section>

      <section id="contact" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </section>

      <section id="work-together" className="min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
      </section>
    </main>

  );
}
