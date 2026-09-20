import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { blogs } from '@/data/blogs';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-12 transition-colors cursor-hover">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono mb-6">
            <span>{blog.date}</span>
            <span>•</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1"/> {blog.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {blog.title}
          </h1>
          <div className="flex gap-2">
            {blog.tags.map(tag => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-white/10"
        >
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </motion.div>
      </article>
    </main>
  );
};

export default BlogPost;
