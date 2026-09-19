import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useV4 } from '@/context/V4Context';

const DebugOverlay = () => {
  const { isDebugMode, isV4Active } = useV4();
  const location = useLocation();
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (!isDebugMode) return;
    
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId;

    const measureFPS = (currentTime) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDebugMode]);

  if (!isDebugMode) return null;

  return (
    <div className="fixed top-4 left-4 z-[9999] pointer-events-none font-mono text-[10px] md:text-xs">
      <div className="bg-black/80 text-green-400 p-3 rounded border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)] backdrop-blur-sm min-w-[200px]">
        <div className="flex justify-between border-b border-green-500/30 pb-1 mb-2">
          <span className="font-bold text-green-300">V4 DEBUG MODE</span>
          <span className="text-green-500/50">[ESC to exit]</span>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-zinc-400">FPS:</span>
            <span className={fps >= 50 ? 'text-green-400' : 'text-yellow-400'}>{fps}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">ROUTE:</span>
            <span>{location.pathname}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">V4 STATE:</span>
            <span>{isV4Active ? 'ACTIVE' : 'DISABLED'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">API:</span>
            <span className="text-green-400">CONNECTED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">RENDER:</span>
            <span className="text-green-400">STABLE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">ENGINE:</span>
            <span>REACT 19 / VITE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugOverlay;
