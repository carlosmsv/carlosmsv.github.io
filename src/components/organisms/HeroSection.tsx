import React from "react";
import Button from "../atoms/Button";
import SkillBadge from "../atoms/SkillBadge";

export default function HeroSection() {
  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Javascript",
    "Python",
    "Tailwind CSS",
    "AWS",
  ];

  return (
    <section className="bg-slate-900 bg-grid-pattern min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-12">
          <div className="space-y-8">
            {/* Terminal-like greeting */}
            <div className="font-mono text-xs text-gray-400 mb-6">
              <span className="text-emerald-400">$</span> whoami
            </div>

            <div className="border-l-4 border-gradient-to-b from-orange-500 to-cyan-500 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-cyan-500"></div>
              <h2 className="text-white text-2xl font-display font-light tracking-wide">
                I am{" "}
                <span className="font-bold bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                  Carlos Viana
                </span>
              </h2>
            </div>

            <div className="space-y-4 gap-4">
              <h3 className="text-white text-6xl font-display font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Full-Stack
                  <br />
                </span>
                <span className="bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent text-glow">
                  Developer
                </span>
              </h3>
            </div>

            {/* Code snippet decoration */}
            <div className="font-mono text-lg text-gray-500 mt-8 space-y-2">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">passion</span> ={" "}
                <span className="text-emerald-400">"coding"</span>;
              </div>
              <div>
                <span className="text-purple-400">let</span>{" "}
                <span className="text-cyan-400">yearsOfExperience</span> ={" "}
                <span className="text-orange-400">7</span>;
              </div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">creativity</span> ={" "}
                <span className="text-emerald-400">"unlimited"</span>;
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/carlosmsv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                <span className="font-display font-semibold text-lg">
                  Contact me
                </span>
              </Button>
            </a>
            <a
              href="/carlos-viana-resume.pdf"
              download="Resume - Carlos Viana.pdf"
            >
              <Button variant="secondary">
                <span className="font-display font-semibold text-lg">
                  Download my resume
                </span>
              </Button>
            </a>
          </div>

          {/* Skills with modern styling */}
          <div className="pt-12">
            <div className="font-mono text-lg text-gray-400 mb-6">
              <span className="text-emerald-400">$</span> cat skills.json
            </div>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <SkillBadge
                    name={skill}
                    className="font-mono text-xl text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-default
                              border border-slate-700 hover:border-orange-500/50 px-4 py-3 rounded-lg
                              bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm
                              hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image with modern effects */}
        <div className="flex justify-center relative">
          <div className="relative group">
            {/* Glowing circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 opacity-50 blur-md animate-spin-slow"></div>

            {/* Orange circle background with glow */}
            <div className="w-80 h-80 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full absolute -z-10 top-4 left-4 blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile Image */}
            <div className="overflow-hidden flex items-center justify-center relative z-10 transition-all duration-500">
              <img
                src="/me.png"
                alt="Carlos Viana"
                className="w-full max-h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Decorative code elements */}
            <div className="absolute -top-12 -right-6 text-orange-500 text-6xl opacity-60 font-mono animate-bounce">
              &lt;/&gt;
            </div>
            <div className="absolute -bottom-1 -left-8 text-cyan-500 text-6xl opacity-60 font-mono animate-float">
              {"{}"}
            </div>
            <div className="absolute top-1/3 -right-8 text-purple-500 text-5xl opacity-60 font-mono animate-ping">
              [ ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
