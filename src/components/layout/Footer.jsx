import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-mono text-xl tracking-widest text-white font-bold mb-1">VISHAL JHA</h2>
              <p className="text-sm text-zinc-500 font-medium tracking-wide">FULL-STACK DEVELOPER</p>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs mt-2">
              Building digital products with code, curiosity, and engineering. Open to entry-level software engineering roles.
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/vishaljha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/vishaljha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 text-sm font-medium"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:vishaljha572004@gmail.com" 
                className="text-zinc-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Vishal Jha. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span>Built with React + Tailwind + Framer Motion</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            <span>Designed for Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
