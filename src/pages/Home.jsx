import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import HowIBuild from '../components/sections/HowIBuild';
import Experience from '../components/sections/Experience';
import ProblemSolving from '../components/sections/ProblemSolving';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HowIBuild />
      <Experience />
      <ProblemSolving />
      <Contact />
    </div>
  );
};

export default Home;
