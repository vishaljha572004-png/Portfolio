import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [previewImg, setPreviewImg] = useState(null);

  useEffect(() => {
    const handleCursorPreview = (e) => {
      setPreviewImg(e.detail);
    };
    window.addEventListener('cursor-preview', handleCursorPreview);
    return () => window.removeEventListener('cursor-preview', handleCursorPreview);
  }, []);

  useEffect(() => {
    // Only show custom cursor on desktop devices (non-touch)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Elements that should trigger cursor expansion
      const interactable = e.target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-hover'
      );
      setIsHovering(!!interactable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* The Floating Image Preview */}
      <AnimatePresence>
        {previewImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            className="fixed top-0 left-0 w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/20 z-[999] pointer-events-none"
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y + 20,
            }}
          >
            <img src={previewImg} alt="Preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[1000]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 28,
          mass: 0.5
        }}
      />
      {/* Subtle glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none z-[-1]"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.2
        }}
      />
    </>
  );
};

export default CustomCursor;
