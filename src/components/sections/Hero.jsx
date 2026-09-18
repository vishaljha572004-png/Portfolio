import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Terminal, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [terminalStep, setTerminalStep] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1000));
      setTerminalStep(1); // whoami
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(2); // Vishal Jha
      await new Promise(r => setTimeout(r, 1500));
      setTerminalStep(3); // role
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(4); // Full-Stack Developer
      await new Promise(r => setTimeout(r, 1500));
      setTerminalStep(5); // stack
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(6); // Stack details
      await new Promise(r => setTimeout(r, 1500));
      setTerminalStep(7); // status
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(8); // Building...
    };
    sequence();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md cursor-hover"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-zinc-400 font-mono tracking-widest text-sm mb-4"
            >
              VISHAL JHA
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              Building <span className="gradient-text-accent">digital products</span><br className="hidden md:block"/>
              with code, curiosity<br className="hidden md:block"/>
              and engineering.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-lg text-zinc-400 max-w-xl mb-4 leading-relaxed"
            >
              Pre-Final-Year Computer Science Engineering student specializing in Full-Stack Development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="font-mono text-sm text-zinc-500 mb-10"
            >
              React • Node.js • TypeScript • MongoDB • MySQL
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-sm font-semibold transition-all cursor-hover group"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-medium border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all cursor-hover"
                asChild
              >
                <a href="/resume.pdf" download="Vishal_Jha_Resume.pdf">
                  Download Resume
                  <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

          </div>

          {/* Right Content - Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-[500px] perspective-1000"
          >
            {/* Terminal Container with Hover Depth */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl relative group cursor-hover"
            >
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-zinc-500 font-mono">
                  <Terminal className="w-3 h-3 mr-2" />
                  vishal@portfolio ~
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm h-[320px] overflow-hidden flex flex-col gap-4">
                
                {/* Command 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-zinc-400">
                    <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                    <span>whoami</span>
                    {terminalStep === 0 && <span className="w-2 h-4 bg-white/70 ml-1 animate-pulse"></span>}
                  </div>
                  {terminalStep >= 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white pl-5">
                      Vishal Jha
                    </motion.div>
                  )}
                </div>

                {/* Command 2 */}
                {terminalStep >= 2 && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-zinc-400">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                      <span>role</span>
                      {terminalStep === 2 && <span className="w-2 h-4 bg-white/70 ml-1 animate-pulse"></span>}
                    </div>
                    {terminalStep >= 4 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white pl-5">
                        Full-Stack Developer
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Command 3 */}
                {terminalStep >= 4 && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-zinc-400">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                      <span>stack</span>
                      {terminalStep === 4 && <span className="w-2 h-4 bg-white/70 ml-1 animate-pulse"></span>}
                    </div>
                    {terminalStep >= 6 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white pl-5 flex gap-2 flex-wrap">
                        <span className="text-blue-400">React</span>
                        <span className="text-green-400">Node</span>
                        <span className="text-blue-500">TypeScript</span>
                        <span className="text-green-500">MongoDB</span>
                        <span className="text-orange-400">MySQL</span>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Command 4 */}
                {terminalStep >= 6 && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-zinc-400">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                      <span>status</span>
                      {terminalStep === 6 && <span className="w-2 h-4 bg-white/70 ml-1 animate-pulse"></span>}
                    </div>
                    {terminalStep >= 8 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 pl-5 flex items-center">
                        Building... <span className="w-2 h-4 bg-emerald-400 ml-2 animate-pulse"></span>
                      </motion.div>
                    )}
                  </div>
                )}
                
              </div>
              
              {/* Subtle hover glow on the terminal itself */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Scroll to explore</div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
