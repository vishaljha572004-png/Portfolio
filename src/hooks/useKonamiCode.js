import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export const useKonamiCode = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key];
        if (newKeys.length > KONAMI_CODE.length) {
          newKeys.shift();
        }
        
        // Check if the sequence matches
        const isMatch = newKeys.every((key, index) => key.toLowerCase() === KONAMI_CODE[index].toLowerCase());
        
        if (isMatch && newKeys.length === KONAMI_CODE.length) {
          // Trigger Confetti
          const duration = 3000;
          const end = Date.now() + duration;

          const frame = () => {
            confetti({
              particleCount: 5,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ['#3b82f6', '#10b981', '#ffffff']
            });
            confetti({
              particleCount: 5,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ['#3b82f6', '#10b981', '#ffffff']
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          
          frame();
          
          // Clear keys after match
          return [];
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
