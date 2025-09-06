"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStacks } from "@/data";

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      level: 85,
      technologies: ["Node.js", "Express", ".NET", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Database & Cloud",
      level: 80,
      technologies: ["MongoDB", "PostgreSQL", "AWS", "Vercel", "Firebase"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "DevOps & Tools",
      level: 75,
      technologies: ["Docker", "CI/CD", "Git", "Jest", "Webpack"],
      color: "from-orange-500 to-red-500",
    },
    {
      name: "3D & Animation",
      level: 90,
      technologies: ["Three.js", "GSAP", "React Three Fiber", "Blender"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Mobile Development",
      level: 70,
      technologies: ["React Native", "Expo", "iOS", "Android"],
      color: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Technical Skills</span>
      </h1>

      <div className="mt-12 grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <span className="text-purple font-bold">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Icons */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto px-4">
          {techStacks.map((tech) => (
            <motion.div
              key={tech.id}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-white font-medium">{tech.stack}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
