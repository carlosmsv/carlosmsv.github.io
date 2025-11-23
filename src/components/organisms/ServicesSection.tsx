import React, { useState } from "react";
import ServiceCard from "../molecules/ServiceCard";

// Ícones SVG simples para os serviços
const WebsiteIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h8v2H6v-2zm0 4h10v2H6v-2z" />
  </svg>
);

const AppIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" />
  </svg>
);

const HostingIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 2v2h16V3H4zm0 6h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 2v2h16v-2H4zm0 6h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 2v2h16v-2H4z" />
  </svg>
);

const serviceContent = {
  react: {
    title: "React Applications",
    description:
      "Expert in building modern, performant React applications with advanced state management, hooks, and component architecture. Specialized in creating scalable single-page applications with optimal user experience and TypeScript integration.",
    stats: [
      { value: "20+", label: "React Projects" },
      { value: "100%", label: "TypeScript Adoption" },
      { value: "6+", label: "Years with React" },
    ],
  },
  node: {
    title: "Node.js Development",
    description:
      "Building robust backend systems and APIs with Node.js and Express. Experienced in microservices architecture, database design, authentication systems, and creating high-performance server-side applications.",
    stats: [
      { value: "20+", label: "Backend Projects" },
      { value: "5+", label: "Databases Used" },
      { value: "6+", label: "Years with Node.js" },
    ],
  },
  ai: {
    title: "AI Integration",
    description:
      "Integrating cutting-edge AI technologies into web applications. Experience with machine learning models, natural language processing, AI-powered features, and creating intelligent solutions that enhance user experiences and business outcomes.",
    stats: [
      { value: "5+", label: "AI Projects" },
      { value: "10+", label: "AI Features Built" },
      { value: "3+", label: "AI Models Integrated" },
    ],
  },
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<"react" | "node" | "ai">(
    "react"
  );

  const content = serviceContent[activeService];

  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content - Services */}
        <div className="space-y-12">
          <div className="relative">
            {/* Orange vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-500"></div>

            {/* Orange dots */}
            <div className="absolute left-[1.7rem] top-12 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute left-[1.7rem] top-[11.625rem] w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute left-[1.7rem] top-81 w-3 h-3 bg-orange-500 rounded-full"></div>

            <div className="pl-20 space-y-6">
              <div
                onClick={() => setActiveService("react")}
                className="cursor-pointer"
              >
                <ServiceCard
                  icon={<AppIcon />}
                  title="React Applications"
                  isActive={activeService === "react"}
                />
              </div>
              <div
                onClick={() => setActiveService("node")}
                className="cursor-pointer"
              >
                <ServiceCard
                  icon={<HostingIcon />}
                  title="Node.js Development"
                  isActive={activeService === "node"}
                />
              </div>
              <div
                onClick={() => setActiveService("ai")}
                className="cursor-pointer"
              >
                <ServiceCard
                  icon={<WebsiteIcon />}
                  title="AI Integration"
                  isActive={activeService === "ai"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - About Me */}
        <div className="space-y-10">
          <h2 className="text-white text-6xl font-display font-bold">
            {content.title}
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed">
            {content.description}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-10 pt-12">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-display font-bold text-white mb-3">
                  {stat.value.replace(/[+%]/g, "")}{" "}
                  <span className="text-orange-500">
                    {stat.value.match(/[+%]/)?.[0]}
                  </span>
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
