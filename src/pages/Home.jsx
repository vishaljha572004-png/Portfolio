import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import HowIBuild from '../components/sections/HowIBuild';
import GithubActivity from '../components/sections/GithubActivity';
import Experience from '../components/sections/Experience';
import ProblemSolving from '../components/sections/ProblemSolving';
import Contact from '../components/sections/Contact';
import TechEcosystem from '../components/v4/TechEcosystem';
import { useV4 } from '../context/V4Context';

const Home = () => {
  const { isV4Active } = useV4();

  return (
    <div className="flex flex-col w-full bg-black">
      <Hero />
      <About />
      {isV4Active ? <TechEcosystem /> : <Skills />}
      <Projects />
      <GithubActivity />
      <HowIBuild />
      <Experience />
      <ProblemSolving />
      <Contact />
    </div>
  );
};

export default Home;
