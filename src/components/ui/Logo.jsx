import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] relative overflow-hidden group border border-white/10"
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-mono font-bold text-lg text-white z-10 tracking-tighter drop-shadow-md">VJ</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 group-hover:animate-shine" />
      </motion.div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-mono text-sm tracking-widest text-white font-bold leading-tight">VISHAL JHA</span>
        <span className="text-[10px] text-zinc-400 font-medium tracking-[0.2em] uppercase leading-tight mt-0.5">Developer</span>
      </div>
    </div>
  );
};

export default Logo;
