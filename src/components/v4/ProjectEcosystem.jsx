import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Server, Database, Code2, Shield, Activity, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectEcosystem = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('PRODUCT');
  const [requestState, setRequestState] = useState('idle'); // idle, loading, error, success

  const handleSimulateRequest = () => {
    setRequestState('loading');
    setTimeout(() => {
      // 30% chance of failure for simulation
      if (Math.random() > 0.7) {
        setRequestState('error');
        setTimeout(() => setRequestState('loading'), 1500); // auto retry
        setTimeout(() => setRequestState('success'), 3000); // success after retry
      } else {
        setRequestState('success');
      }
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-white/10 bg-[#111]">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{project.title.split(' — ')[0]}</h2>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.architecture.client}</div>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-black p-1 rounded-lg border border-white/5">
            {['PRODUCT', 'SYSTEM', 'ENGINEERING'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-white/10 text-white shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
          
          <AnimatePresence mode="wait">
            
            {/* PRODUCT LAYER */}
            {activeTab === 'PRODUCT' && (
              <motion.div
                key="product"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col lg:flex-row gap-12"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">User Experience</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">{project.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <Zap className="w-4 h-4 text-yellow-500 mb-2" />
                        <div className="text-sm text-zinc-300">{feature}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.live && (
                      <Button className="bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live App</a>
                      </Button>
                    )}
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 font-mono text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </Button>
                  </div>
                </div>
                
                {/* Simulated UI Area */}
                <div className="flex-1 min-h-[400px] border border-white/10 rounded-xl bg-gradient-to-br from-zinc-900 to-black p-8 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                  <Code2 className="w-16 h-16 text-zinc-800 mb-4" />
                  <div className="text-center font-mono text-zinc-500 text-sm">
                    {project.title.split(' — ')[0]} UI Rendered
                  </div>
                </div>
              </motion.div>
            )}

            {/* SYSTEM LAYER */}
            {activeTab === 'SYSTEM' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="flex flex-col gap-12 h-full"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Software Pipeline</h3>
                    <p className="text-zinc-400 text-sm">Interactive data flow and architecture visualization.</p>
                  </div>
                  <Button 
                    onClick={handleSimulateRequest}
                    disabled={requestState === 'loading'}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold"
                  >
                    {requestState === 'loading' ? 'Executing...' : 'Simulate API Request'}
                  </Button>
                </div>

                <div className="relative flex-1 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-8 min-h-[300px]">
                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 -translate-y-1/2"></div>
                  
                  {/* Nodes */}
                  {[
                    { id: 'client', label: 'CLIENT', icon: Code2, tech: project.architecture.client, activeDelay: 0 },
                    { id: 'api', label: 'GATEWAY', icon: Activity, tech: project.architecture.api, activeDelay: 0.5 },
                    { id: 'auth', label: 'SECURITY', icon: Shield, tech: project.architecture.auth, activeDelay: 1 },
                    { id: 'db', label: 'DATABASE', icon: Database, tech: project.architecture.database, activeDelay: 1.5 }
                  ].map((node, i) => (
                    <div key={node.id} className="relative z-10 flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border
                        ${requestState === 'success' || requestState === 'loading' 
                          ? 'bg-blue-500/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                          : requestState === 'error' && i > 1
                            ? 'bg-red-500/20 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                            : 'bg-[#1e1e1e] border-white/20'}`}
                        style={{ transitionDelay: requestState === 'loading' ? `${node.activeDelay}s` : '0s' }}
                      >
                        <node.icon className={`w-6 h-6 ${requestState === 'idle' ? 'text-zinc-500' : 'text-white'}`} />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="font-mono text-xs font-bold text-white">{node.label}</div>
                        <div className="font-mono text-[10px] text-zinc-500 mt-1">{node.tech}</div>
                      </div>
                    </div>
                  ))}

                  {/* Status Overlay */}
                  <AnimatePresence>
                    {requestState !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black border border-white/10 p-4 rounded-xl shadow-2xl min-w-[300px]"
                      >
                        <div className="font-mono text-[10px] uppercase text-zinc-500 mb-2">Request Status</div>
                        {requestState === 'loading' && <div className="text-blue-400 font-mono text-xs animate-pulse">{'>'} Processing Request...</div>}
                        {requestState === 'error' && <div className="text-red-400 font-mono text-xs">{'>'} 500 Internal Error. Retrying...</div>}
                        {requestState === 'success' && (
                          <div className="text-emerald-400 font-mono text-xs">
                            {'>'} 200 OK<br/>
                            {'>'} Data fetched successfully.<br/>
                            {'>'} Updating UI.
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* ENGINEERING LAYER */}
            {activeTab === 'ENGINEERING' && (
              <motion.div
                key="engineering"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Problem</h3>
                  <p className="text-zinc-400 mb-8">{project.problem}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-2">The Solution</h3>
                  <p className="text-zinc-400 mb-8">{project.solution}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Key Challenges</h3>
                  <p className="text-zinc-400">{project.challenges}</p>
                </div>
                
                <div className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-6">
                  <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Decision Log</div>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-black border border-white/10">
                      <div className="text-sm font-bold text-white mb-2">Auth Strategy</div>
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px] border border-blue-500/30">JWT</span>
                        <span className="px-2 py-1 rounded bg-white/5 text-zinc-500 font-mono text-[10px] opacity-50 line-through">Sessions</span>
                      </div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        Chose JWT for stateless authentication, enabling easier scaling of the API gateway and reducing database lookups on every request.
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-black border border-white/10">
                      <div className="text-sm font-bold text-white mb-2">Primary Database</div>
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                          {project.techStack.includes('MongoDB') ? 'NoSQL / MongoDB' : 'SQL / MySQL'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        {project.learnings}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectEcosystem;
