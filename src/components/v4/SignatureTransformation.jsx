import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useV4 } from '@/context/V4Context';
import { Database, Server, Code2, Layers, LayoutTemplate, Activity } from 'lucide-react';

const sequenceSteps = [
  { id: 'ui', label: 'PROJECT UI', icon: LayoutTemplate, duration: 1000 },
  { id: 'components', label: 'COMPONENTS', icon: Layers, duration: 800 },
  { id: 'code', label: 'CODE', icon: Code2, duration: 800 },
  { id: 'api', label: 'API GATEWAY', icon: Activity, duration: 800 },
  { id: 'backend', label: 'BACKEND NODE', icon: Server, duration: 800 },
  { id: 'database', label: 'DATABASE', icon: Database, duration: 800 },
  { id: 'data', label: 'RAW DATA', icon: Database, duration: 800 },
  { id: 'architecture', label: 'ARCHITECTURE', icon: Layers, duration: 800 },
  { id: 'tech', label: 'TECH STACK', icon: Code2, duration: 800 },
  { id: 'final', label: 'FULL-STACK DEVELOPER', duration: 2000 }
];

const SignatureTransformation = () => {
  const { isV4Active } = useV4();
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isV4Active) {
      setCurrentStep(0);
      setIsComplete(false);
      return;
    }

    let timeout;
    const playSequence = async () => {
      for (let i = 0; i < sequenceSteps.length; i++) {
        setCurrentStep(i);
        await new Promise(resolve => {
          timeout = setTimeout(resolve, sequenceSteps[i].duration);
        });
      }
      setIsComplete(true);
    };

    playSequence();
    return () => clearTimeout(timeout);
  }, [isV4Active]);

  if (!isV4Active || isComplete) return null;

  const step = sequenceSteps[currentStep];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="relative flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {currentStep < sequenceSteps.length - 1 ? (
            <motion.div
              key={step.id}
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              {step.icon && (
                <div className="w-24 h-24 rounded-3xl border border-white/20 bg-white/5 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
              )}
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-tighter">
                {step.label}
              </h2>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl text-blue-400 font-mono tracking-widest mb-4">VISHAL JHA</h3>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                FULL-STACK DEVELOPER
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-mono">
                BUILDING DIGITAL PRODUCTS FROM CODE TO EXPERIENCE.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Speed lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full border border-white"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SignatureTransformation;
