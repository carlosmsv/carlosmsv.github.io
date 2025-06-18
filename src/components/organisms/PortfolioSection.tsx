import React from "react";
import ProjectCard from "../atoms/ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Modern E-commerce",
      description:
        "A modern e-commerce platform built with React and Node.js, with real-time inventory management and secure payment processing.",
      image: "/blog-placeholder-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Collaborative Analytics Dashboard",
      description:
        "A collaborative analytics dashboard with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/blog-placeholder-2.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Responsive Weather App",
      description:
        "A responsive weather app providing detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/blog-placeholder-3.jpg",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website featuring creative design and smooth animations, built with performance optimization in mind.",
      image: "/blog-placeholder-4.jpg",
      technologies: ["Astro", "React", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  return (
    <section className="bg-slate-800 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-white text-6xl font-display font-bold mb-6">
            My Portfolio
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Here are some of my recent projects that demonstrate my skills and
            passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

