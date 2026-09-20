import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const V2PreviewOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-4"
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 max-w-3xl w-full">

          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-full shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">V2 Design Preview</h3>
              <p className="text-zinc-400 text-xs mt-1">
                You are viewing the new 3D Cinematic Developer Experience. Please review the design and interactions.
                If you reject it, the previous version will be instantly restored.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto w-full md:w-auto">
            <Button
              variant="outline"
              className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 w-full md:w-auto"
              onClick={() => alert('Tell Antigravity: "NO - RESTORE PREVIOUS VERSION"')}
            >
              <X className="w-4 h-4 mr-2" />
              NO - REVERT
            </Button>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full md:w-auto"
              onClick={() => alert('Tell Antigravity: "DONE - KEEP THIS DESIGN"')}
            >
              <Check className="w-4 h-4 mr-2" />
              DONE - KEEP
            </Button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default V2PreviewOverlay;
