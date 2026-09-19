import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import useUISounds from '@/hooks/useUISounds';
import { useTheme } from '@/hooks/useTheme';
import { FaGithub } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useUISounds();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'max-w-4xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl px-6 py-3 rounded-full' 
              : 'max-w-6xl'
          }`}>
            
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="font-mono text-sm tracking-widest text-white font-bold cursor-hover relative group"
            >
              VISHAL JHA
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={playHover}
                    onClick={(e) => { playClick(); handleNavClick(e, link.href); }}
                    className="relative px-4 py-2 text-sm font-medium transition-colors cursor-hover text-zinc-400 hover:text-white"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="text-zinc-400 hover:text-white transition-colors cursor-hover p-2 rounded-full hover:bg-white/5"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="sr-only">Toggle theme</span>
              </button>
              
              <a 
                href="https://github.com/vishaljha572004-png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors cursor-hover p-2"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <Button 
                variant="outline" 
                className="rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all cursor-hover"
                onMouseEnter={playHover}
                onClick={() => { playClick(); navigate('/resume'); }}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-zinc-400 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/80 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-bold text-zinc-400 hover:text-white transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-6 mt-8"
              >
                <button
                  onClick={toggleTheme}
                  className="text-zinc-400 hover:text-white p-2"
                >
                  {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
                <a 
                  href="https://github.com/vishaljha572004-png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white p-2"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <Button 
                  variant="outline" 
                  className="rounded-full bg-white text-black hover:bg-zinc-200 transition-all border-none"
                  asChild
                >
                  <a href="/resume.pdf" download="Vishal_Jha_Resume.pdf">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
