import { motion, AnimatePresence } from 'framer-motion';
import { useV4 } from '@/context/V4Context';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const V4ApprovalPanel = () => {
  const { v4State, approveV4, rejectV4 } = useV4();

  return (
    <AnimatePresence>
      {v4State === 'preview' && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-[9999]"
        >
          <div className="bg-[#111111]/90 border border-blue-500/30 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)] p-2 backdrop-blur-xl flex items-center gap-4">

            <div className="pl-4 font-mono text-xs text-blue-400 font-bold tracking-widest hidden sm:block">
              V4 PREVIEW ACTIVE
            </div>

            <div className="flex gap-2">
              <Button
                onClick={approveV4}
                size="sm"
                className="rounded-full bg-white text-black hover:bg-zinc-200 h-9 px-4 font-bold font-mono text-[10px] tracking-wider"
              >
                <Check className="mr-1.5 h-3 w-3" />
                KEEP V4
              </Button>
              <Button
                onClick={rejectV4}
                variant="outline"
                size="sm"
                className="rounded-full border-red-500/30 hover:bg-red-500/10 text-red-400 h-9 px-4 font-bold font-mono text-[10px] tracking-wider"
              >
                <X className="mr-1.5 h-3 w-3" />
                REVERT
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default V4ApprovalPanel;
