import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Globe, Boxes, Lock, Zap, GitBranch } from 'lucide-react';
import { useV4 } from '@/context/V4Context';

const skills = [
  { id: 'react', name: 'React.js', icon: Globe, desc: 'Frontend UI Library for building interactive user interfaces.', color: 'text-blue-400', projects: ['V Mart', 'PG Sphere', 'Talent Scope'] },
  { id: 'node', name: 'Node.js', icon: Server, desc: 'JavaScript runtime for scalable backend services.', color: 'text-green-400', projects: ['V Mart', 'PG Sphere', 'Talent Scope'] },
  { id: 'ts', name: 'TypeScript', icon: Code2, desc: 'Strongly typed JavaScript for robust applications.', color: 'text-blue-500', projects: ['PG Sphere'] },
  { id: 'mongo', name: 'MongoDB', icon: Database, desc: 'NoSQL document database for flexible data storage.', color: 'text-emerald-500', projects: ['V Mart', 'Talent Scope'] },
  { id: 'mysql', name: 'MySQL', icon: Database, desc: 'Relational database for structured transactional data.', color: 'text-orange-400', projects: ['V Mart', 'PG Sphere'] },
  { id: 'express', name: 'Express.js', icon: Layout, desc: 'Minimalist web framework for Node.js APIs.', color: 'text-zinc-300', projects: ['V Mart', 'PG Sphere', 'Talent Scope'] },
  { id: 'redis', name: 'Redis', icon: Zap, desc: 'In-memory data store for caching and real-time processing.', color: 'text-red-500', projects: ['V Mart'] },
  { id: 'jwt', name: 'JWT Auth', icon: Lock, desc: 'Secure stateless authentication mechanisms.', color: 'text-purple-400', projects: ['V Mart', 'PG Sphere', 'Talent Scope'] },
  { id: 'git', name: 'Git & GitHub', icon: GitBranch, desc: 'Version control and collaborative development.', color: 'text-white', projects: ['All Projects'] },
  { id: 'cpp', name: 'C++', icon: Cpu, desc: 'Low-level systems programming and competitive coding.', color: 'text-indigo-400', projects: ['Algorithms'] },
];

const TechEcosystem = () => {
  const { isV4Active } = useV4();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  if (!isV4Active) return null;


  const radius = 160;
  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">


        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-zinc-800"></div>
            <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Tech Stack</span>
            <div className="w-12 h-[1px] bg-zinc-800"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Interactive Constellation
          </h2>
          <p className="text-zinc-400">Hover over a technology to explore its role in my stack.</p>
        </div>


        <div className="relative h-[500px] w-full max-w-[500px] mx-auto flex items-center justify-center">


          <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl">
            <Boxes className="w-8 h-8 text-white mb-2" />
            <span className="text-xs font-bold tracking-widest text-white">FULL-STACK</span>
          </div>


          {skills.map((skill, index) => {
            const pos = getPosition(index, skills.length);
            const isHovered = hoveredSkill === skill.id;

            return (
              <div key={skill.id} className={`absolute inset-0 flex items-center justify-center pointer-events-none ${isHovered ? 'z-50' : 'z-10'}`}>


                <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible pointer-events-none">
                  <motion.line
                    x1="250"
                    y1="250"
                    x2={250 + pos.x}
                    y2={250 + pos.y}
                    stroke={isHovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.05)"}
                    strokeWidth={isHovered ? 2 : 1}
                    className="transition-all duration-300"
                  />
                </svg>


                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute pointer-events-auto"
                  style={{ x: pos.x, y: pos.y }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >

                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-zinc-900 cursor-hover transition-all duration-300 ${isHovered ? 'scale-125 z-30 shadow-xl' : 'scale-100 z-10'}`}>
                    <skill.icon className={`w-6 h-6 ${isHovered ? skill.color : 'text-zinc-500'} transition-colors duration-300`} />


                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute top-full mt-4 w-52 p-3 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl z-50 pointer-events-none"
                        >
                          <div className={`text-sm font-bold mb-1 ${skill.color}`}>{skill.name}</div>
                          <div className="text-xs text-zinc-400 leading-relaxed mb-3">{skill.desc}</div>


                          <div className="pt-2 border-t border-white/10">
                            <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Where I Used It:</div>
                            <ul className="flex flex-col gap-1">
                              {skill.projects.map((proj, i) => (
                                <li key={i} className="text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                                  <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                                  {proj}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
