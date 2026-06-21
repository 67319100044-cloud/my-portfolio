import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projectscard from "./Components/Projectscard";
const name = "รณพีร์";

export default function Home() {
  return (
    <main>
      <header className="py-4 px-8 text-center">
        <h1 className="text-4xl font-bold">my portfolio</h1>
      </header>
      <Hero name={name} />
      <About name={name} />
      <Projectscard />
      <Skills />
    </main>
  );
}
