"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { ExpandableCardProvider, useExpandableCard } from "./useExpandableCard";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      // Don't close if clicking inside the modal
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // Only close on actual click events, not scroll or wheel events
      callback(event);
    };

    // Only listen to click events, not scroll events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const ExpandableCardContent = ({
  children,
  className,
  expandedContent,
  title,
  description,
  metrics,
  challenge,
  solution,
  results,
  link,
  iconLists,
  img,
}: {
  children: React.ReactNode;
  className?: string;
  expandedContent?: React.ReactNode;
  title: string;
  description: string;
  metrics: Record<string, string | undefined>;
  challenge: string;
  solution: string;
  results: string[];
  link: string;
  iconLists: string[];
  img: string;
}) => {
  const { isExpanded, setIsExpanded } = useExpandableCard();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        className={cn("relative", className)}
        initial={false}
        animate={{ height: isExpanded ? "auto" : "auto" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="relative">{children}</div>
      </motion.div>

      {/* Expanded Content Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={(e) => {
              // Only close if clicking directly on the backdrop, not on child elements
              if (
                e.target === e.currentTarget &&
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
              ) {
                setIsExpanded(false);
              }
            }}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black-200/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-[10000]"
              onClick={(e) => e.stopPropagation()}
              onScroll={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Expanded Content */}
              <div className="space-y-6">
                {/* Project Image */}
                <div className="w-full h-64 rounded-xl overflow-hidden bg-[#13162d] flex items-center justify-center">
                  <img
                    src={img}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Title and Description */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Challenge, Solution, Results */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-purple mb-3">
                      Challenge
                    </h3>
                    <p className="text-white/80 text-sm">{challenge}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-purple mb-3">
                      Solution
                    </h3>
                    <p className="text-white/80 text-sm">{solution}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-purple mb-3">
                      Results
                    </h3>
                    <ul className="text-white/80 text-sm space-y-1">
                      {results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-purple mb-4">
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(metrics).map(
                      ([key, value]) =>
                        value && (
                          <div key={key} className="text-left">
                            <div className="text-2xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-sm text-white/60 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-purple mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2"
                      >
                        <img
                          src={icon}
                          alt={`tech-${index}`}
                          className="w-5 h-5"
                        />
                        <span className="text-white/80 text-sm">
                          {icon.includes("next.svg")
                            ? "Next.js"
                            : icon.includes("tail.svg")
                            ? "Tailwind CSS"
                            : icon.includes("ts.svg")
                            ? "TypeScript"
                            : icon.includes("fm.svg")
                            ? "Framer Motion"
                            : icon.includes("three.svg")
                            ? "Three.js"
                            : icon.includes("gsap.svg")
                            ? "GSAP"
                            : icon.includes("stream.svg")
                            ? "Stream"
                            : icon.includes("c.svg")
                            ? "C++"
                            : "Tech"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Project Button */}
                <div className="text-center pt-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple to-blue text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-purple/25 transition-all duration-300"
                  >
                    Visit Project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const ExpandableCard = (props: any) => {
  return (
    <ExpandableCardProvider>
      <ExpandableCardContent {...props} />
    </ExpandableCardProvider>
  );
};
