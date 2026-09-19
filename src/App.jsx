import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import CustomCursor from '@/components/ui/CustomCursor';
import { CommandMenu } from '@/components/ui/CommandMenu';
import InteractiveResume from '@/pages/InteractiveResume';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import PageTransition from '@/components/layout/PageTransition';
import { V4Provider } from '@/context/V4Context';
import V4ApprovalPanel from '@/components/v4/V4ApprovalPanel';
import DebugOverlay from '@/components/v4/DebugOverlay';
import LivingCodeEnvironment from '@/components/v4/LivingCodeEnvironment';
import SignatureTransformation from '@/components/v4/SignatureTransformation';
function App() {
  useKonamiCode();
  const location = useLocation();
  
  return (
    <V4Provider>
      <div className="noise-bg"></div>
      <CustomCursor />
      <CommandMenu />
      <SignatureTransformation />
      <LivingCodeEnvironment />
      <V4ApprovalPanel />
      <DebugOverlay />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Layout /></PageTransition>}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/resume" element={<PageTransition><InteractiveResume /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogList /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </V4Provider>
  );
}

export default App;
