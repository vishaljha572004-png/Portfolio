import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Database, Server, Shield, Smartphone, Globe, Code2, X } from 'lucide-react';
import useUISounds from '@/hooks/useUISounds';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const ProjectSection = ({ project, index, setSelectedProject }) => {
  const { playClick, playHover } = useUISounds();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen py-24 flex items-center relative" id={`project-${index}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            style={{ opacity }}
            className="flex flex-col relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-zinc-500 font-mono text-sm">0{index + 1}</span>
              <div className="w-12 h-[1px] bg-zinc-800"></div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title.split(' — ')[0]}
            </h3>
            
            <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
              {project.shortDesc}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 text-zinc-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Button 
                onClick={() => { playClick(); setSelectedProject(project); }}
                onMouseEnter={playHover}
                className="rounded-full bg-white text-black hover:bg-zinc-200 h-12 px-8 cursor-hover transition-all"
              >
                Case Study
              </Button>
              <Button 
                variant="outline"
                className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-8 cursor-hover"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              {project.live && (
                <Button 
                  variant="outline"
                  className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-8 cursor-hover"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Right Visualizer */}
          <motion.div 
            style={{ y, opacity }}
            className="relative lg:h-[600px] w-full flex items-center justify-center cursor-hover"
          >
            {/* Visuals vary based on the project */}
            {index === 0 && <VMartVisualizer />}
            {index === 1 && <PGSphereVisualizer />}
            {index === 2 && <TalentScopeVisualizer />}
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent blur-3xl -z-10 rounded-full"></div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

// Specialized Visualizers

const VMartVisualizer = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-lg aspect-[4/3] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl relative flex flex-col"
    >
      {/* Browser Bar */}
      <div className="h-10 bg-white/5 border-b border-white/5 rounded-t-xl flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        <div className="mx-auto w-1/2 h-4 bg-white/5 rounded-md"></div>
      </div>
      {/* Browser Body Mockup */}
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="w-24 h-6 bg-white/10 rounded-md"></div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
        <div className="grid grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-square bg-white/5 rounded-lg"></div>
          ))}
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-24 p-3 bg-zinc-900 border border-white/10 rounded-lg shadow-xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Database className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-xs font-mono text-zinc-300">Live Cart Sync</div>
      </motion.div>
    </motion.div>
  );
};

const PGSphereVisualizer = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-lg aspect-square rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent relative flex items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full border border-white/10 scale-75 border-dashed animate-[spin_60s_linear_infinite]"></div>
      
      {/* Core Node */}
      <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <Server className="w-8 h-8 text-white" />
      </div>

      {/* Orbiting Nodes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
          <Shield className="w-5 h-5 text-blue-400" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
          <Database className="w-5 h-5 text-orange-400" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
          <Globe className="w-5 h-5 text-green-400" />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-purple-400" />
        </div>
      </motion.div>
      
      {/* Animated Data Packets */}
      <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          animate={{ left: ["0%", "50%"], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
        />
      </div>
    </motion.div>
  );
};

const TalentScopeVisualizer = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-lg flex flex-col gap-4 relative"
    >
      {/* Node 1: Resume */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="self-start p-4 rounded-xl bg-zinc-900 border border-white/10 flex items-center gap-4 shadow-lg z-10 relative"
      >
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
          <Code2 className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">Parse Resume.pdf</div>
          <div className="text-xs text-zinc-500 font-mono">Extracting skills...</div>
        </div>
      </motion.div>

      {/* Connecting Line */}
      <div className="w-[2px] h-8 bg-gradient-to-b from-white/20 to-transparent ml-12"></div>

      {/* Node 2: AI Evaluation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="self-center p-4 rounded-xl bg-zinc-900 border border-white/10 flex items-center gap-4 shadow-lg z-10 relative"
      >
        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
          <Database className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">AI Evaluation Engine</div>
          <div className="text-xs text-zinc-500 font-mono">Generating questions...</div>
        </div>
      </motion.div>

      {/* Connecting Line */}
      <div className="w-[2px] h-8 bg-gradient-to-b from-transparent to-white/20 ml-auto mr-12"></div>

      {/* Node 3: Result */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="self-end p-4 rounded-xl bg-zinc-900 border border-emerald-500/30 flex items-center gap-4 shadow-lg z-10 relative"
      >
        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-emerald-400">Match Found: 94%</div>
          <div className="text-xs text-zinc-500 font-mono">Ready for interview</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative bg-black pt-32">
      
      {/* Section Header */}
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              A collection of digital products I've built, focusing on scalable architecture and seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project Stack */}
      <div className="flex flex-col relative pb-32">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} setSelectedProject={setSelectedProject} />
        ))}
      </div>

      {/* Case Study Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black overflow-y-auto"
          >
            <div className="min-h-screen">
              {/* Header */}
              <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
                <div className="font-mono text-sm text-zinc-400">
                  CASE STUDY: {selectedProject.title.split(' — ')[0].toUpperCase()}
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-hover"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="container mx-auto max-w-4xl px-6 py-24 flex flex-col gap-16">
                
                {/* 01 Overview */}
                <div>
                  <h2 className="text-sm font-mono text-zinc-500 mb-4">01 — OVERVIEW</h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h1>
                  <p className="text-xl text-zinc-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10"></div>

                {/* 02 Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-sm font-mono text-zinc-500 mb-4">02 — PROBLEM</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-sm font-mono text-zinc-500 mb-4">03 — SOLUTION</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/10"></div>

                {/* 04 Architecture & 05 Features */}
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-sm font-mono text-zinc-500 mb-4">04 — ARCHITECTURE</h2>
                    <div className="flex flex-col gap-4">
                      {Object.entries(selectedProject.architecture).map(([layer, desc]) => (
                        <div key={layer} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                          <div className="text-xs font-mono text-zinc-500 uppercase mb-1">{layer}</div>
                          <div className="text-white">{desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-mono text-zinc-500 mb-4">05 — CORE FEATURES</h2>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white mr-3 shrink-0"></span>
                          <span className="text-zinc-300 text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/10"></div>

                {/* 06 Challenges & 07 Learnings */}
                <div>
                  <h2 className="text-sm font-mono text-zinc-500 mb-4">06 — CHALLENGES & LEARNINGS</h2>
                  <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl flex flex-col gap-6">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      <strong className="text-white">Challenge:</strong> {selectedProject.challenges}
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      <strong className="text-white">Outcome:</strong> {selectedProject.learnings}
                    </p>
                  </div>
                </div>
                
                {/* 08 Tech Stack & Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 pb-24">
                  <div>
                    <h2 className="text-sm font-mono text-zinc-500 mb-4">08 — TECH STACK</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-4 py-2 text-sm font-mono rounded-full bg-white/10 text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="rounded-full bg-white text-black hover:bg-zinc-200 h-12 px-8 cursor-hover" asChild>
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-8 cursor-hover" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">View Source</a>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
