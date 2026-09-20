import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import {
  FileText,
  Terminal,
  User,
  Code,
  Mail,
  Moon,
  Sun,
  Cpu
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useUISounds from '@/hooks/useUISounds';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { playHover, playClick } = useUISounds();


  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        if (!open) playClick();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [playClick]);

  const runCommand = (command) => {
    playClick();
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 pt-[20vh] md:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a]"
          >
            <Command className="w-full bg-transparent flex flex-col ">
              <div className="border-b border-white/10 flex items-center px-4">
                <Terminal className="w-5 h-5 text-zinc-500 mr-2" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent text-white outline-none py-4 text-base placeholder:text-zinc-500"
                  autoFocus
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <Command.Empty className="py-6 text-center text-zinc-500 text-sm">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-medium text-zinc-500 px-2 py-2">
                  <Command.Item
                    value="home"
                    onSelect={() => runCommand(() => navigate('/'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <User className="w-4 h-4" /> Home
                  </Command.Item>
                  <Command.Item
                    value="resume"
                    onSelect={() => runCommand(() => navigate('/resume'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <FileText className="w-4 h-4" /> Interactive Resume
                  </Command.Item>
                  <Command.Item
                    value="blog"
                    onSelect={() => runCommand(() => navigate('/blog'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <Cpu className="w-4 h-4" /> Technical Blog
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Projects" className="text-xs font-medium text-zinc-500 px-2 py-2 mt-2 border-t border-white/5">
                  <Command.Item
                    value="pgsphere"
                    onSelect={() => runCommand(() => window.open('https://pg-management-system-84bq.vercel.app/', '_blank'))}
                    onMouseEnter={(e) => {
                      playHover();
                      window.dispatchEvent(new CustomEvent('cursor-preview', { detail: '/images/projects/pg-sphere.png' }));
                    }}
                    onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-preview', { detail: null }))}
                    className="flex items-center justify-between px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10 group"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" /> PGSphere
                    </div>
                    <span className="text-xs text-zinc-600 group-hover:text-zinc-400">View live</span>
                  </Command.Item>
                  <Command.Item
                    value="v-mart"
                    onSelect={() => runCommand(() => window.open('https://v-mart-theta.vercel.app/', '_blank'))}
                    onMouseEnter={(e) => {
                      playHover();
                      window.dispatchEvent(new CustomEvent('cursor-preview', { detail: '/images/projects/v-mart.png' }));
                    }}
                    onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-preview', { detail: null }))}
                    className="flex items-center justify-between px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10 group"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" /> V-Mart
                    </div>
                    <span className="text-xs text-zinc-600 group-hover:text-zinc-400">View live</span>
                  </Command.Item>
                  <Command.Item
                    value="talentscope"
                    onSelect={() => runCommand(() => window.open('https://talentscope-client.onrender.com/', '_blank'))}
                    onMouseEnter={(e) => {
                      playHover();
                      window.dispatchEvent(new CustomEvent('cursor-preview', { detail: '/images/projects/talent-scope.png' }));
                    }}
                    onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-preview', { detail: null }))}
                    className="flex items-center justify-between px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10 group"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" /> TalentScope
                    </div>
                    <span className="text-xs text-zinc-600 group-hover:text-zinc-400">View live</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Actions" className="text-xs font-medium text-zinc-500 px-2 py-2 mt-2 border-t border-white/5">
                  <Command.Item
                    value="view-projects"
                    onSelect={() => runCommand(() => {
                      const element = document.getElementById('projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/#projects');
                      }
                    })}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <Code className="w-4 h-4" /> View Projects
                  </Command.Item>
                  <Command.Item
                    value="toggle-theme"
                    onSelect={() => runCommand(toggleTheme)}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    Toggle Theme
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Social" className="text-xs font-medium text-zinc-500 px-2 py-2 mt-2 border-t border-white/5">
                  <Command.Item
                    value="github"
                    onSelect={() => runCommand(() => window.open('https://github.com/vishaljha572004-png', '_blank'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </Command.Item>
                  <Command.Item
                    value="linkedin"
                    onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/vishaljha572004', '_blank'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <FaLinkedin className="w-4 h-4" /> LinkedIn
                  </Command.Item>
                  <Command.Item
                    value="email"
                    onSelect={() => runCommand(() => window.open('mailto:vishaljha572004@gmail.com'))}
                    onMouseEnter={playHover}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                  >
                    <Mail className="w-4 h-4" /> Email Me
                  </Command.Item>
                </Command.Group>

              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
