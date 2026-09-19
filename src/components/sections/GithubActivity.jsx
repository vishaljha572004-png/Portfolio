import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const GithubActivity = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-white"></span>
              <span className="text-sm font-mono tracking-wider text-zinc-400">03.5</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Code Contributions
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm md:text-right">
            A visual representation of my daily coding activity on GitHub. I believe in consistent learning and building.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-white/10 rounded-2xl bg-zinc-900/50 flex justify-center overflow-x-auto overflow-y-hidden"
        >
          <div className="min-w-[800px]">
            <GitHubCalendar 
              username="vishaljha572004-png" 
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              theme={{
                light: ['#e5e7eb', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#1f2937', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
