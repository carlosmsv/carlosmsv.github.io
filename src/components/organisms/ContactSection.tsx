import React from "react";
import Button from "../atoms/Button";

export default function ContactSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-white text-6xl font-display font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, or just want to chat? I'd love to hear from
            you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/carlosmsv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">
              <span className="text-lg">Contact me</span>
            </Button>
          </a>
          <a
            href="/carlos-viana-resume.pdf"
            download="Resume - Carlos Viana.pdf"
          >
            <Button variant="secondary">
              <span className="text-lg">Download my resume</span>
            </Button>
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
            <a
              href="mailto:carlos.cmsv@gmail.com"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              carlos.cmsv@gmail.com
            </a>
            <span className="hidden sm:block text-slate-600">|</span>
            <a
              href="https://linkedin.com/in/carlosmsv"
              className="text-lg hover:text-orange-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
