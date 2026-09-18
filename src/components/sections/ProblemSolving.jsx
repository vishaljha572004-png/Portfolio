import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const algorithms = [
  {
    id: 'two-pointer',
    name: 'Two Pointers',
    code: `function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
}`,
    visual: () => {
      const [left, setLeft] = useState(0);
      const [right, setRight] = useState(6);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setLeft(prev => prev < 2 ? prev + 1 : 0);
          setRight(prev => prev > 4 ? prev - 1 : 6);
        }, 1500);
        return () => clearInterval(interval);
      }, []);

      return (
        <div className="flex items-center justify-between w-full h-12 bg-white/5 rounded-full px-4 relative">
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-white/10 -translate-y-1/2"></div>
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-colors duration-500 z-10 ${
              i === left ? 'bg-emerald-400 scale-150 shadow-[0_0_10px_#34d399]' : 
              i === right ? 'bg-blue-400 scale-150 shadow-[0_0_10px_#60a5fa]' : 
              'bg-zinc-700'
            }`}></div>
          ))}
          <motion.div 
            animate={{ left: `calc(${(left/6)*100}% + 16px)` }}
            className="absolute -top-6 text-xs font-mono text-emerald-400 -translate-x-1/2 transition-all duration-500"
          >left</motion.div>
          <motion.div 
            animate={{ left: `calc(${(right/6)*100}% - 16px)` }}
            className="absolute -top-6 text-xs font-mono text-blue-400 -translate-x-1/2 transition-all duration-500"
          >right</motion.div>
        </div>
      );
    }
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    code: `function maxSubArrayLen(nums, k) {
  let sum = 0, maxLen = 0;
  let map = new Map([[0, -1]]);
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }
    if (!map.has(sum)) map.set(sum, i);
  }
  return maxLen;
}`,
    visual: () => {
      const [pos, setPos] = useState(0);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setPos(prev => prev < 4 ? prev + 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

      return (
        <div className="flex items-center w-full h-12 bg-white/5 rounded-md relative overflow-hidden">
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} className="flex-1 border-r border-white/5 h-full flex items-center justify-center text-xs text-zinc-500 font-mono">
              {i+1}
            </div>
          ))}
          <motion.div 
            animate={{ left: `${(pos/7)*100}%` }}
            className="absolute top-0 bottom-0 w-[42.8%] border-2 border-purple-400 bg-purple-400/20 rounded-md transition-all duration-500"
          ></motion.div>
        </div>
      );
    }
  }
];

const ProblemSolving = () => {
  const [activeAlgo, setActiveAlgo] = useState(algorithms[0]);

  return (
    <section className="py-24 md:py-32 relative bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Context */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Data Structures</span>
              <div className="w-12 h-[1px] bg-zinc-800"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Problem Solving
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-lg">
              Writing scalable code requires a solid understanding of algorithmic patterns. I regularly practice Data Structures and Algorithms to optimize data processing and backend performance.
            </p>
            
            <div className="flex flex-col gap-2 w-full max-w-sm mb-8">
              {algorithms.map((algo) => (
                <button
                  key={algo.id}
                  onClick={() => setActiveAlgo(algo)}
                  className={`px-4 py-3 rounded-lg text-left transition-colors font-mono text-sm ${
                    activeAlgo.id === algo.id 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <Code2 className="w-4 h-4 inline-block mr-2" />
                  {algo.name}
                </button>
              ))}
            </div>

            <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-8 cursor-hover" asChild>
              <a href="https://github.com/vishaljha" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </Button>
          </div>

          {/* Right - Code Window */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl relative cursor-hover group">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center text-xs text-zinc-500 font-mono">
                <Terminal className="w-3 h-3 mr-2" />
                algo.js
              </div>
            </div>
            
            {/* Visualizer Area */}
            <div className="p-8 border-b border-white/5 bg-black/50 h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeAlgo.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full max-w-sm"
                >
                  <activeAlgo.visual />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Code Area */}
            <div className="p-6 bg-[#0c0c0c] overflow-x-auto">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeAlgo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-mono text-zinc-300 leading-relaxed"
                >
                  <code>{activeAlgo.code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>
            
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
