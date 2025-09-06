"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { ExpandableCard } from "./ui/ExpandableCard";
import { useExpandableCard } from "./ui/useExpandableCard";

const ProjectDescription = ({ description }: { description: string }) => {
  const { expandCard } = useExpandableCard();
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate description to show only first ~100 characters
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const shouldShowSeeMore = description.length > 100;

  return (
    <p className="lg:text-xl lg:font-normal font-light text-sm">
      {isExpanded ? description : truncatedDescription}
      {shouldShowSeeMore && !isExpanded && (
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            expandCard();
          }}
          className="text-purple hover:text-white transition-colors duration-300 ml-1 cursor-pointer"
        >
          see more
        </span>
      )}
    </p>
  );
};

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="relative flex flex-wrap items-center justify-center p-4 gap-x-24 md:gap-x-24 lg:gap-x-24 md:gap-y-32 lg:gap-y-52 mt-24">
        {projects.map(
          ({
            id,
            title,
            des,
            img,
            iconLists,
            link,
            challenge,
            solution,
            results,
            metrics,
          }) => (
            <div
              key={id}
              className="h-[38rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <ExpandableCard
                title={title}
                description={des}
                metrics={metrics}
                challenge={challenge}
                solution={solution}
                results={results}
                link={link}
                iconLists={iconLists}
              >
                <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden  sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt="cover"
                      className="z-10 absolute bottom-0 tilted-image"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>

                  <ProjectDescription description={des} />

                  {/* Project Metrics */}
                  {metrics && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Object.entries(metrics).map(([key, value]) => (
                        <span
                          key={key}
                          className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/80"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </ExpandableCard>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
