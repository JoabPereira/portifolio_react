import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Consulta de CEP",
    description:
      "API RESTful desenvolvida com Spring Boot para consultar CEPs.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    tech: ["Java", "Spring Boot", "RestTemplate"],
    github: "https://github.com/JoabPereira/ConsultaCepApi",
    live: "https://api.example.com",
  },
  {
    title: "CHUCK NORRIS API",
    description:
      "Front-End em React consumindo api publica de piadas do Chuck Norris",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    tech: ["React", "TypeScript", "Vite", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/JoabPereira/ConsumindoAPI_Chuck_Norris",
    live: "https://joabpereira.github.io/ConsumindoAPI_Chuck_Norris/",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
