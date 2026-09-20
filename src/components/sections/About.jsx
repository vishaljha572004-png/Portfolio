import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">About</span>
              <div className="w-12 h-[1px] bg-zinc-800"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              I like turning<br />
              <span className="text-zinc-500">ideas into</span><br />
              working products.
            </h2>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              I'm a Pre-Final-Year B.Tech Computer Science student with a passion for building scalable, end-to-end web applications. My focus is on creating seamless user experiences powered by robust backend architectures.
            </p>

            <div className="grid grid-cols-2 gap-8">

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 cursor-hover hover:bg-white/10 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Location</span>
                <span className="text-sm text-white font-medium">Jaipur, India</span>
              </div>


              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 cursor-hover hover:bg-white/10 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Focus</span>
                <span className="text-sm text-white font-medium">Full-Stack Dev</span>
              </div>


              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 cursor-hover hover:bg-white/10 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Education</span>
                <span className="text-sm text-white font-medium">JECRC University</span>
                <span className="text-xs text-zinc-400">B.Tech CSE (2027) • 8.42 CGPA</span>
              </div>


              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 cursor-hover hover:bg-white/10 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Interest</span>
                <span className="text-sm text-white font-medium">System Architecture</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
