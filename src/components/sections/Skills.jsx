import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Globe, Boxes, Lock, Zap, GitBranch } from 'lucide-react';

const skills = [
  { id: 'react', name: 'React.js', icon: Globe, desc: 'Frontend UI Library for building interactive user interfaces.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'node', name: 'Node.js', icon: Server, desc: 'JavaScript runtime for scalable backend services.', color: 'text-green-400', bg: 'bg-green-400/10' },
  { id: 'ts', name: 'TypeScript', icon: Code2, desc: 'Strongly typed JavaScript for robust applications.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 'mongo', name: 'MongoDB', icon: Database, desc: 'NoSQL document database for flexible data storage.', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { id: 'mysql', name: 'MySQL', icon: Database, desc: 'Relational database for structured transactional data.', color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { id: 'express', name: 'Express.js', icon: Layout, desc: 'Minimalist web framework for Node.js APIs.', color: 'text-zinc-300', bg: 'bg-zinc-300/10' },
  { id: 'redis', name: 'Redis', icon: Zap, desc: 'In-memory data store for caching and real-time processing.', color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: 'jwt', name: 'JWT Auth', icon: Lock, desc: 'Secure stateless authentication mechanisms.', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: 'git', name: 'Git & GitHub', icon: GitBranch, desc: 'Version control and collaborative development.', color: 'text-white', bg: 'bg-white/10' },
  { id: 'cpp', name: 'C++', icon: Cpu, desc: 'Low-level systems programming and competitive coding.', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Calculate circular positions
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
        
        {/* Header */}
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

        {/* Constellation Container */}
        <div className="relative h-[500px] w-full max-w-[500px] mx-auto flex items-center justify-center">
          
          {/* Central Node */}
          <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl">
            <Boxes className="w-8 h-8 text-white mb-2" />
            <span className="text-xs font-bold tracking-widest text-white">FULL-STACK</span>
          </div>

          {/* Lines and Nodes */}
          {skills.map((skill, index) => {
            const pos = getPosition(index, skills.length);
            const isHovered = hoveredSkill === skill.id;
            
            return (
              <div key={skill.id} className={`absolute inset-0 flex items-center justify-center pointer-events-none ${isHovered ? 'z-50' : 'z-10'}`}>
                
                {/* Connecting Line */}
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

                {/* Node */}
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
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute top-full mt-4 w-48 p-3 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl z-50 pointer-events-none"
                        >
                          <div className={`text-sm font-bold mb-1 ${skill.color}`}>{skill.name}</div>
                          <div className="text-xs text-zinc-400 leading-relaxed">{skill.desc}</div>
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

// We need AnimatePresence from framer-motion which was missing in import
import { AnimatePresence } from 'framer-motion';

export default Skills;
