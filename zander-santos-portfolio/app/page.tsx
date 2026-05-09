import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
    </div>

  );
}
