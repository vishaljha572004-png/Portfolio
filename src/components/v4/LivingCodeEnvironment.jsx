import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useV4 } from '@/context/V4Context';

const logs = [
  "GET /api/projects 200 OK",
  "POST /auth/login",
  "JWT VERIFIED",
  "DATABASE CONNECTED",
  "BUILD SUCCESSFUL",
  "npm run build",
  "git commit -m 'feat: v4'",
  "docker compose up -d",
  "SELECT * FROM users",
  "Cache Hit: Redis"
];

const generateFloatingLog = (id) => {
  const isLeft = Math.random() > 0.5;
  return {
    id,
    text: logs[Math.floor(Math.random() * logs.length)],
    x: isLeft ? Math.random() * 20 : 80 + Math.random() * 15,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 5,
  };
};

const LivingCodeEnvironment = () => {
  const { isV4Active, isRecruiterMode } = useV4();
  const [activeLogs, setActiveLogs] = useState([]);

  useEffect(() => {
    if (!isV4Active || isRecruiterMode) {
      setActiveLogs([]);
      return;
    }


    const initialLogs = Array.from({ length: 8 }).map((_, i) => generateFloatingLog(i));
    setActiveLogs(initialLogs);


    const interval = setInterval(() => {
      setActiveLogs(prev => {
        const newLogs = [...prev];
        const replaceIndex = Math.floor(Math.random() * newLogs.length);
        newLogs[replaceIndex] = generateFloatingLog(Date.now() + Math.random());
        return newLogs;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isV4Active, isRecruiterMode]);

  if (!isV4Active || isRecruiterMode) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30">
      <AnimatePresence>
        {activeLogs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: `${log.y + 10}vh`, x: `${log.x}vw` }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: `${log.y - 20}vh`,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: log.duration,
              ease: "linear",
              times: [0, 0.1, 0.9, 1],
              delay: log.delay
            }}
            className="absolute font-mono text-[10px] md:text-xs text-[#569cd6] whitespace-nowrap drop-shadow-[0_0_8px_rgba(86,156,214,0.3)]"
          >
            {log.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LivingCodeEnvironment;
