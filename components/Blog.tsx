"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 14",
      excerpt:
        "Learn how to leverage the latest Next.js features including App Router, Server Components, and improved performance optimizations.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Frontend",
      image: "/blog1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Mastering Three.js for Interactive Web Experiences",
      excerpt:
        "A deep dive into creating stunning 3D web experiences using React Three Fiber and modern web technologies.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "3D Graphics",
      image: "/blog2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Optimizing Performance in Modern Web Applications",
      excerpt:
        "Best practices for improving Core Web Vitals, reducing bundle sizes, and implementing efficient caching strategies.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      image: "/blog3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "From Design to Code: Building Responsive UIs with Tailwind CSS",
      excerpt:
        "My approach to translating design mockups into pixel-perfect, responsive web interfaces using utility-first CSS.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Design",
      image: "/blog4.jpg",
      link: "#",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "3D Graphics",
    "Performance",
    "Design",
  ];

  return (
    <div className="py-20" id="blog">
      <h1 className="heading">
        My <span className="text-purple">Technical Blog</span>
      </h1>

      <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mt-6">
        Sharing insights, tutorials, and lessons learned from my journey as a
        full-stack developer
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-purple transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
          >
            <div className="aspect-video bg-gradient-to-br from-purple/20 to-blue/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-purple/20 border border-purple/30 rounded-full text-sm text-purple">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-purple hover:text-white transition-colors duration-300 font-medium"
              >
                Read More
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple to-blue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple/25 transition-all duration-300"
        >
          View All Posts
          <FaArrowRight />
        </motion.a>
      </div>
    </div>
  );
};

export default Blog;
