import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Terminal, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Magnetic from '@/components/ui/Magnetic';
import { useV4 } from '@/context/V4Context';

const Hero = () => {
  const { isV4Active } = useV4();
  const [terminalStep, setTerminalStep] = useState(0);
  const controls = useAnimation();
  
  // If V4 is active, wait for the Signature Transformation to finish (9.4s) plus its fade out (1s).
  const baseDelay = isV4Active ? 9.8 : 0;

  useEffect(() => {
    const sequence = async () => {
      if (isV4Active) {
        await new Promise(r => setTimeout(r, 9800));
      }
      await new Promise(r => setTimeout(r, 1000));
      await new Promise(r => setTimeout(r, 1000));
      setTerminalStep(1); // line 1
      await new Promise(r => setTimeout(r, 400));
      setTerminalStep(2); // line 2
      await new Promise(r => setTimeout(r, 600));
      setTerminalStep(3); // line 3
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(4); // line 4
      await new Promise(r => setTimeout(r, 400));
      setTerminalStep(5); // line 5
      await new Promise(r => setTimeout(r, 600));
      setTerminalStep(6); // line 6
      await new Promise(r => setTimeout(r, 800));
      setTerminalStep(7); // line 7
      await new Promise(r => setTimeout(r, 400));
      setTerminalStep(8); // line 8
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
              transition={{ duration: 0.5, delay: baseDelay, ease: "easeOut" }}
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
              transition={{ duration: 0.5, delay: baseDelay + 0.1, ease: "easeOut" }}
              className="text-zinc-400 font-mono tracking-widest text-sm mb-4"
            >
              VISHAL JHA
            </motion.h2>

            <div className="mb-8 flex flex-col gap-1 md:gap-2">
              {[
                <span key="1">Building <span className="gradient-text-accent">digital products</span></span>,
                <span key="2">with code, curiosity</span>,
                <span key="3">and engineering.</span>
              ].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: baseDelay + 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] pb-2"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay + 0.3, ease: "easeOut" }}
              className="text-lg text-zinc-400 max-w-xl mb-4 leading-relaxed"
            >
              Pre-Final-Year Computer Science Engineering student specializing in Full-Stack Development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay + 0.4, ease: "easeOut" }}
              className="font-mono text-sm text-zinc-500 mb-10"
            >
              React • Node.js • TypeScript • MongoDB • MySQL
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay + 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Magnetic>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-sm font-semibold transition-all cursor-hover group"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
              <Magnetic>
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
              </Magnetic>
            </motion.div>

          </div>

          {/* Right Content - VS Code Editor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: baseDelay + 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-[550px] perspective-1000"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: -2, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="rounded-xl overflow-hidden border border-[#2d2d2d] bg-[#1e1e1e] shadow-2xl relative group cursor-hover"
            >
              {/* VS Code Header */}
              <div className="flex flex-col bg-[#252526] border-b border-[#2d2d2d]">
                <div className="flex items-center px-4 py-2 border-b border-[#1e1e1e]">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-xs text-[#cccccc] font-medium flex-1 text-center pr-12">
                    Vishal_Jha_Portfolio - Visual Studio Code
                  </div>
                </div>
                {/* Tabs */}
                <div className="flex overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border-t-2 border-[#007acc] min-w-max cursor-pointer">
                    <span className="text-[#519aba] text-sm">⚛</span>
                    <span className="text-[#cccccc] text-xs font-mono">Developer.tsx</span>
                    <span className="text-[#858585] text-xs ml-2 hover:text-[#cccccc] hover:bg-white/10 rounded p-[1px]">✕</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] text-[#858585] min-w-max cursor-pointer hover:bg-[#1e1e1e] transition-colors">
                    <span className="text-[#cb3837] text-sm">{}</span>
                    <span className="text-xs font-mono">package.json</span>
                  </div>
                </div>
              </div>

              {/* Editor Body */}
              <div className="p-4 font-mono text-[13px] md:text-sm h-[340px] overflow-hidden flex bg-[#1e1e1e]">
                
                {/* Line Numbers */}
                <div className="flex flex-col text-[#858585] text-right pr-4 select-none border-r border-[#404040]">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="leading-6">{i + 1}</span>
                  ))}
                </div>

                {/* Code Content */}
                <div className="pl-4 flex-1 text-[#d4d4d4] overflow-hidden">
                  
                  {/* Line 1 */}
                  <div className="flex items-center leading-6 whitespace-nowrap">
                    <span className="text-[#569cd6]">import</span>
                    <span className="text-[#d4d4d4] ml-2">{`{ useState, useEffect }`}</span>
                    <span className="text-[#569cd6] ml-2">from</span>
                    <span className="text-[#ce9178] ml-2">'react'</span><span className="text-[#d4d4d4]">;</span>
                    {terminalStep === 0 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                  </div>

                  {/* Line 2 */}
                  {terminalStep >= 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 mt-6 whitespace-nowrap">
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-[#4fc1ff] ml-2">DeveloperProfile</span>
                      <span className="text-[#d4d4d4] ml-2">=</span>
                      <span className="text-[#569cd6] ml-2">()</span>
                      <span className="text-[#569cd6] ml-2">{`=>`}</span>
                      <span className="text-[#d4d4d4] ml-2">{`{`}</span>
                      {terminalStep === 1 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}

                  {/* Line 3 */}
                  {terminalStep >= 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-4 whitespace-nowrap">
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-[#9cdcfe] ml-2">profile</span>
                      <span className="text-[#d4d4d4] ml-2">=</span>
                      <span className="text-[#d4d4d4] ml-2">{`{`}</span>
                      {terminalStep === 2 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}

                  {/* Line 4 */}
                  {terminalStep >= 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-8 whitespace-nowrap">
                      <span className="text-[#9cdcfe]">name:</span>
                      <span className="text-[#ce9178] ml-2">'Vishal Jha'</span><span className="text-[#d4d4d4]">,</span>
                      {terminalStep === 3 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}

                  {/* Line 5 */}
                  {terminalStep >= 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-8 whitespace-nowrap">
                      <span className="text-[#9cdcfe]">role:</span>
                      <span className="text-[#ce9178] ml-2">'Full-Stack Developer'</span><span className="text-[#d4d4d4]">,</span>
                      {terminalStep === 4 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}

                  {/* Line 6 */}
                  {terminalStep >= 5 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-8 whitespace-nowrap">
                      <span className="text-[#9cdcfe]">skills:</span>
                      <span className="text-[#d4d4d4] ml-2">[</span><span className="text-[#ce9178]">'React'</span><span className="text-[#d4d4d4]">,</span>
                      <span className="text-[#ce9178] ml-2">'Node.js'</span><span className="text-[#d4d4d4]">,</span>
                      <span className="text-[#ce9178] ml-2">'MongoDB'</span><span className="text-[#d4d4d4]">],</span>
                      {terminalStep === 5 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}

                  {/* Line 7 */}
                  {terminalStep >= 6 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-4 whitespace-nowrap">
                      <span className="text-[#d4d4d4]">{`};`}</span>
                      {terminalStep === 6 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}
                  
                  {/* Line 8 */}
                  {terminalStep >= 7 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 pl-4 mt-6 whitespace-nowrap">
                      <span className="text-[#c586c0]">return</span>
                      <span className="text-[#d4d4d4] ml-2">{`<`}</span><span className="text-[#4ec9b0]">Portfolio</span>
                      <span className="text-[#9cdcfe] ml-2">data</span><span className="text-[#d4d4d4]">={"{"}</span><span className="text-[#9cdcfe]">profile</span><span className="text-[#d4d4d4]">{"}"} /{">"}</span>
                      {terminalStep === 7 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}
                  
                  {/* Line 9 */}
                  {terminalStep >= 8 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center leading-6 whitespace-nowrap">
                      <span className="text-[#d4d4d4]">{`};`}</span>
                      {terminalStep >= 8 && <span className="w-[8px] h-[16px] bg-[#d4d4d4] ml-1 animate-pulse"></span>}
                    </motion.div>
                  )}
                  
                </div>
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
