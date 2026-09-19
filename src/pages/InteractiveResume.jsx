import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const InteractiveResume = () => {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Sticky Sidebar (Index & Download) */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-32">
            <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors cursor-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <nav className="hidden lg:flex flex-col gap-4 text-sm font-medium text-zinc-500 border-l border-white/10 pl-4 mb-8">
              <a href="#summary" className="hover:text-white transition-colors">Summary</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </nav>

            <Button className="w-full justify-start rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-hover" asChild>
              <a href="/Vishal_Jha_Resume.pdf" download="Vishal_Jha_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </aside>

        {/* Right Content Area (The Resume) */}
        <div className="flex-1 bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          {/* Header */}
          <header className="border-b border-white/10 pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vishal Jha</h1>
            <h2 className="text-xl text-blue-400 font-medium mb-6">Full Stack Developer</h2>
            
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400 font-mono">
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> Jaipur, India</span>
              <span className="flex items-center"><Mail className="w-4 h-4 mr-1"/> vishaljha572004@gmail.com</span>
              <span className="flex items-center"><Phone className="w-4 h-4 mr-1"/> +91 9771146700</span>
              <a href="https://github.com/vishaljha572004-png" target="_blank" className="flex items-center hover:text-white"><FaGithub className="w-4 h-4 mr-1"/> GitHub</a>
              <a href="https://linkedin.com/in/vishaljha572004" target="_blank" className="flex items-center hover:text-white"><FaLinkedin className="w-4 h-4 mr-1"/> LinkedIn</a>
            </div>
          </header>

          {/* Summary */}
          <section id="summary" className="mb-12 scroll-mt-32">
            <h3 className="text-lg font-mono text-zinc-500 mb-4 tracking-wider uppercase">Summary</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Pre-Final-Year B.Tech Computer Science Engineering student specializing in Full-Stack Web Development. Passionate about building highly scalable, production-ready applications with modern architectures. Strong foundation in JavaScript/TypeScript, React, Node.js, and relational/NoSQL databases.
            </p>
          </section>

          {/* Education */}
          <section id="education" className="mb-12 scroll-mt-32">
            <h3 className="text-lg font-mono text-zinc-500 mb-6 tracking-wider uppercase">Education</h3>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-1">
                  <h4 className="text-xl font-bold text-white">JECRC University</h4>
                  <span className="text-zinc-500 font-mono text-sm">2022 - 2026</span>
                </div>
                <div className="text-blue-400 font-medium mb-2">B.Tech in Computer Science and Engineering</div>
                <p className="text-zinc-400">Current CGPA: 8.5</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-12 scroll-mt-32">
            <h3 className="text-lg font-mono text-zinc-500 mb-6 tracking-wider uppercase">Experience</h3>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-1">
                  <h4 className="text-xl font-bold text-white">100xDevs (Cohort 3)</h4>
                  <span className="text-zinc-500 font-mono text-sm">Jul 2024 - Present</span>
                </div>
                <div className="text-blue-400 font-medium mb-4">Open Source Contributor & Learner</div>
                <ul className="list-disc list-inside text-zinc-300 space-y-2 marker:text-zinc-600">
                  <li>Building production-grade applications under the guidance of Harkirat Singh.</li>
                  <li>Implementing advanced backend patterns: Rate Limiting, CI/CD, AWS deployments, and Docker containerization.</li>
                  <li>Contributing to community open-source projects and reviewing PRs.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-12 scroll-mt-32">
            <h3 className="text-lg font-mono text-zinc-500 mb-6 tracking-wider uppercase">Key Projects</h3>
            <div className="flex flex-col gap-8">
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    PGSphere <a href="https://pg-management-system-84bq.vercel.app" target="_blank" className="text-zinc-500 hover:text-white"><ExternalLink className="w-4 h-4"/></a>
                  </h4>
                  <span className="text-zinc-500 font-mono text-sm">2026</span>
                </div>
                <p className="text-zinc-400 mb-2">React, Node.js, Express, MySQL, JWT</p>
                <ul className="list-disc list-inside text-zinc-300 space-y-2 marker:text-zinc-600">
                  <li>Engineered a multi-tenant property management system capable of securely isolating data for different PG owners.</li>
                  <li>Implemented advanced SQL schemas to track real-time room availability, tenant ledgers, and maintenance requests.</li>
                  <li>Integrated role-based JWT authentication protecting over 25+ REST endpoints.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    V-Mart <a href="https://github.com/vishaljha572004-png/V-mart" target="_blank" className="text-zinc-500 hover:text-white"><ExternalLink className="w-4 h-4"/></a>
                  </h4>
                  <span className="text-zinc-500 font-mono text-sm">2026</span>
                </div>
                <p className="text-zinc-400 mb-2">React, Node, MongoDB, MySQL</p>
                <ul className="list-disc list-inside text-zinc-300 space-y-2 marker:text-zinc-600">
                  <li>Built a responsive grocery e-commerce platform handling state synchronization across a dynamic cart.</li>
                  <li>Designed a hybrid database architecture utilizing MongoDB for unstructured product catalogs and MySQL for transactional integrity.</li>
                  <li>Optimized API response times by 30% using efficient query indexing.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-32">
            <h3 className="text-lg font-mono text-zinc-500 mb-6 tracking-wider uppercase">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-3">Languages</h4>
                <p className="text-zinc-300">JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3, C++</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Frontend</h4>
                <p className="text-zinc-300">React.js, Next.js, Redux, Tailwind CSS, Framer Motion</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Backend</h4>
                <p className="text-zinc-300">Node.js, Express.js, REST APIs, Prisma, JWT</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Tools & Databases</h4>
                <p className="text-zinc-300">MongoDB, MySQL, Git, Docker, Postman, Vercel, AWS</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default InteractiveResume;
