import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import CustomCursor from '@/components/ui/CustomCursor';
import { CommandMenu } from '@/components/ui/CommandMenu';
import InteractiveResume from '@/pages/InteractiveResume';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';
import { useKonamiCode } from '@/hooks/useKonamiCode';

function App() {
  useKonamiCode();
  
  return (
    <>
      <div className="noise-bg"></div>
      <CustomCursor />
      <CommandMenu />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/resume" element={<InteractiveResume />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
