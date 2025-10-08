import React from "react";

export default function PortfolioSection() {
  return (
    <section className="bg-slate-800 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-6xl font-display font-bold mb-8">
            What I've built
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-2xl leading-relaxed mb-6">
              Throughout my career, I have developed robust systems and
              innovative solutions for clients across diverse industries,
              including{" "}
              <span className="text-orange-400 font-semibold">healthcare</span>,{" "}
              <span className="text-cyan-400 font-semibold">education</span>,{" "}
              <span className="text-purple-400 font-semibold">sales</span>,{" "}
              <span className="text-emerald-400 font-semibold">
                telecommunications
              </span>
              , and even{" "}
              <span className="text-orange-400 font-semibold">
                government ministries
              </span>
              .
            </p>
            <p className="text-gray-300 text-2xl leading-relaxed">
              My expertise extends to cutting-edge{" "}
              <span className="text-cyan-400 font-semibold">
                AI-powered projects
              </span>
              , delivering intelligent solutions that drive business
              transformation and enhance user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
