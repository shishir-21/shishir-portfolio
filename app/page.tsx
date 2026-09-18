import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <GithubStats />

      <Contact />
    </main>
  );
}
