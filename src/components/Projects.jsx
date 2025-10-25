import React from "react";
import { projects } from "../data/projects";
import ProjectCards from "./ProjectCards";

const Project = ({ hasAnimated }) => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            hasAnimated.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  ">
            {projects.map((project, index) => (
              <ProjectCards key={index} projects={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
