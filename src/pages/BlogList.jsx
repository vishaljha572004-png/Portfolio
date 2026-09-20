import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { blogs } from '@/data/blogs';

const BlogList = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-12 transition-colors cursor-hover">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Writings & Thoughts</h1>
          <p className="text-xl text-zinc-400">Technical deep dives, architectural decisions, and learnings.</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 pb-8 cursor-hover"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {blog.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors mb-3">
                  {blog.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogList;
