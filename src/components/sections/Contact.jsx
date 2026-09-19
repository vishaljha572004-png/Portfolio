import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vishaljha572004@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* GitHub / Code Section */}
        <div className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              CODE, NOT JUST DESIGNS.
            </h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-lg">
              I believe in writing clean, scalable code. All my projects are open-source and available on GitHub for review.
            </p>
            <Button 
              className="rounded-full bg-white text-black hover:bg-zinc-200 h-12 px-8 cursor-hover group"
              asChild
            >
              <a href="https://github.com/vishaljha572004-png" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 w-4 h-4" />
                View GitHub Profile
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl relative cursor-hover"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="mx-auto flex items-center text-xs text-zinc-500 font-mono">
                <Terminal className="w-3 h-3 mr-2" />
                git
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm h-[200px] flex flex-col gap-3">
              <div className="flex items-center text-zinc-400">
                <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                <span>git status</span>
              </div>
              <div className="text-emerald-400 pl-5">
                Building products...
              </div>
              
              <div className="flex items-center text-zinc-400 mt-2">
                <ChevronRight className="w-4 h-4 text-emerald-400 mr-1 shrink-0" />
                <span>git commit -m "ship: improve architecture"</span>
              </div>
              <div className="text-white pl-5">
                [main 3f8a9b2] ship: improve architecture<br/>
                3 files changed, 142 insertions(+), 12 deletions(-)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full p-8 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 flex flex-col items-center relative overflow-hidden"
          >
            {/* Ambient Background Glow inside card */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full"></div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 relative z-10">
              Have an idea?<br/>
              <span className="text-zinc-500">Let's build it.</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-10 max-w-lg relative z-10">
              Open to internship, fresher and entry-level software engineering opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              
              {/* Magnetic Email Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="rounded-full bg-white text-black h-14 px-8 cursor-hover flex items-center font-medium relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span 
                      key="copied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center text-emerald-600"
                    >
                      Copied <CheckCircle2 className="ml-2 w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="copy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center"
                    >
                      vishaljha572004@gmail.com
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <Button 
                variant="outline" 
                className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-8 cursor-hover transition-colors"
                asChild
              >
                <a href="/resume.pdf" download="Vishal_Jha_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
