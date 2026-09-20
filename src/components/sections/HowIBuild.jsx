import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap, ShieldCheck, Rocket, BookOpen } from 'lucide-react';

const principles = [
  {
    num: "01",
    title: "BUILD SIMPLE",
    desc: "Complexity is the enemy of scalability. I focus on writing clean, modular, and maintainable code that solves the actual problem without over-engineering.",
    icon: Layers
  },
  {
    num: "02",
    title: "DESIGN FOR SCALE",
    desc: "From database schemas to API routes, I architect systems anticipating future growth, ensuring efficient data retrieval and processing.",
    icon: Zap
  },
  {
    num: "03",
    title: "SECURE BY DEFAULT",
    desc: "Implementing robust authentication, rate limiting, and data validation isn't an afterthought—it's foundational to every product I build.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "SHIP & ITERATE",
    desc: "Perfectionism delays progress. I believe in shipping functional minimum viable products and iterating rapidly based on feedback and metrics.",
    icon: Rocket
  },
  {
    num: "05",
    title: "LEARN CONSTANTLY",
    desc: "Technology evolves rapidly. I maintain a growth mindset, constantly exploring new frameworks, system design patterns, and engineering practices.",
    icon: BookOpen
  }
];

const HowIBuild = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">


        <div className="container mx-auto px-6 max-w-7xl mb-12 flex flex-col items-start absolute top-32 left-0 right-0 z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Philosophy</span>
            <div className="w-12 h-[1px] bg-zinc-800"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            How I Think About Software
          </h2>
        </div>


        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 w-max mt-24">
          {principles.map((principle) => (
            <div
              key={principle.num}
              className="w-[300px] md:w-[450px] h-[350px] p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between group cursor-hover transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex justify-between items-start">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0">
                  {principle.num}
                </div>
                <div className="p-4 rounded-full bg-white/5 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  <principle.icon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                  {principle.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="w-[10vw]"></div>
        </motion.div>


        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
