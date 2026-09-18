import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journeyItems = [
  {
    title: "B.Tech Computer Science & Engineering",
    subtitle: "JECRC University, Jaipur (2023 - 2027)",
    description: "Started my formal education in Computer Science, focusing on core engineering principles, algorithms, and system fundamentals."
  },
  {
    title: "Full-Stack Development Focus",
    subtitle: "Self-Directed Curriculum",
    description: "Began deep-diving into the JavaScript ecosystem, mastering React.js for the frontend and Node.js/Express for scalable backend services."
  },
  {
    title: "Real-world Projects",
    subtitle: "V Mart & PGSphere",
    description: "Architected and deployed complex platforms involving JWT authentication, Razorpay integration, multi-tenancy, and hybrid databases."
  },
  {
    title: "Full Stack Developer Intern",
    subtitle: "Cognifyz (May 2026 - Jun 2026)",
    description: "Developed RESTful APIs and built reusable React.js UI components. Collaborated with cross-functional teams on production-ready features."
  },
  {
    title: "Certifications & Achievements",
    subtitle: "Continuous Growth",
    description: "Completed IBM Skills Network SQL Certification and Goldman Sachs Job Simulation. Represented at the state level in Kabaddi."
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-zinc-800"></div>
            <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Experience</span>
            <div className="w-12 h-[1px] bg-zinc-800"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          
          {/* Background Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2"></div>
          
          {/* Animated Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[15px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 md:-translate-x-1/2 origin-top"
          ></motion.div>

          <div className="flex flex-col gap-12">
            {journeyItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[15px] md:left-1/2 w-3 h-3 rounded-full bg-black border-2 border-zinc-600 md:-translate-x-1/2 z-10 group-hover:border-white transition-colors duration-300"></div>
                  
                  {/* Content Left (Even) or Right (Odd) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] group-hover:border-white/10 transition-colors cursor-hover">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <div className="text-sm font-mono text-zinc-500 mb-4">{item.subtitle}</div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
