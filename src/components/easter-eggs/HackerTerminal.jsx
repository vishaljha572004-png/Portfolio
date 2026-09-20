import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HackerTerminal = ({ onClose }) => {
  const [history, setHistory] = useState([
    "INITIALIZING HACKER TERMINAL v1.0.0...",
    "TYPE 'help' FOR A LIST OF COMMANDS.",
    " "
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmedCmd) {
      case 'help':
        response = [
          "AVAILABLE COMMANDS:",
          "  whoami       - Identify yourself",
          "  sudo hire    - Make the best decision of the day",
          "  ls projects  - List current directory",
          "  clear        - Clear the terminal",
          "  exit         - Close the terminal"
        ];
        break;
      case 'whoami':
        response = ["A recruiter looking for top tier talent."];
        break;
      case 'sudo hire':
        response = [
          "ELEVATING PRIVILEGES...",
          "ACCESS GRANTED.",
          "EXCELLENT CHOICE. SENDING OFFER LETTER PROTOCOLS..."
        ];
        break;
      case 'ls projects':
        response = [
          "v_mart/         (Full Stack E-Commerce)",
          "pg_sphere/      (PG Accommodation Portal)",
          "talent_scope/   (AI Resume Analyzer)"
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        response = ["EXITING TERMINAL..."];
        setTimeout(() => onClose?.(), 800);
        break;
      case '':
        response = [];
        break;
      default:
        response = [`COMMAND NOT FOUND: ${trimmedCmd}`];
    }

    setHistory(prev => [...prev, `guest@vishal-jha:~$ ${cmd}`, ...response, " "]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9990] bg-black/90 backdrop-blur-sm pointer-events-auto flex items-center justify-center p-4 md:p-12"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-4xl h-full max-h-[80vh] bg-[#0c0c0c] border border-green-500/30 rounded-lg shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden flex flex-col font-mono relative">


        <div className="absolute inset-0 pointer-events-none bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-10 z-10"></div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-20"></div>

        <div className="bg-[#111] border-b border-green-500/30 px-4 py-2 flex items-center gap-2 relative z-30">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <div className="ml-4 text-green-500 text-xs font-bold tracking-widest opacity-50">ROOT TERMINAL</div>
        </div>


        <div className="flex-1 overflow-y-auto p-6 text-green-500 text-sm md:text-base relative z-30">
          {history.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
          ))}
          <div className="flex items-center">
            <span className="mr-2 text-green-400">guest@vishal-jha:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-500 caret-green-500"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </motion.div>
  );
};

export default HackerTerminal;
