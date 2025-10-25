import React from "react";
import { Github, ExternalLink } from "lucide-react";
const ProjectCards = ({ projects }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-6xl font-bold text-gray-300">
          {projects.title.charAt(0)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors leading-tight tracking-tighter">
          {projects.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow ">
          {projects.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projects.tech.map((tech, index) => (
            <span
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 mt-auto ">
          <a
            href={projects.github}
            target="#"
            className="flex items-center text-gray-600 hover:text-black transition-colors text-sm"
          >
            <Github className="w-4 h-4 mr-1 hover:animate-bounce" />
          </a>
          <a
            href={projects.demo}
            target="#"
            className="flex items-center text-gray-600 hover:text-black transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4 mr-1 hover:animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
