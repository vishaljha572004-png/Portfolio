import React, { createContext, useContext, useState, useEffect } from 'react';

const V4Context = createContext();

export const useV4 = () => useContext(V4Context);

export const V4Provider = ({ children }) => {
  // state: 'disabled' | 'preview' | 'approved'
  const [v4State, setV4State] = useState(() => {
    return localStorage.getItem('portfolio-v4-state') || 'approved';
  });

  const [isDebugMode, setIsDebugMode] = useState(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState(() => {
    return localStorage.getItem('portfolio-recruiter-mode') === 'true';
  });

  useEffect(() => {
    if (v4State === 'approved') {
      localStorage.setItem('portfolio-v4-state', 'approved');
    } else if (v4State === 'disabled') {
      localStorage.removeItem('portfolio-v4-state');
    }
  }, [v4State]);

  useEffect(() => {
    if (isRecruiterMode) {
      localStorage.setItem('portfolio-recruiter-mode', 'true');
    } else {
      localStorage.removeItem('portfolio-recruiter-mode');
    }
  }, [isRecruiterMode]);

  // Global Keyboard listener for Debug Mode (Ctrl + Shift + D)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsDebugMode(prev => !prev);
      }
      // Escape to exit debug mode if active
      if (e.key === 'Escape') {
        setIsDebugMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const startV4Preview = () => setV4State('preview');
  
  const approveV4 = () => {
    setV4State('approved');
  };
  
  const rejectV4 = () => {
    setV4State('disabled');
  };

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(prev => !prev);
  };

  const isV4Active = v4State === 'preview' || v4State === 'approved';

  const value = {
    v4State,
    isV4Active,
    isDebugMode,
    isRecruiterMode,
    startV4Preview,
    approveV4,
    rejectV4,
    toggleRecruiterMode,
  };

  return (
    <V4Context.Provider value={value}>
      {children}
    </V4Context.Provider>
  );
};
