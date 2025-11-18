import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header currentPath="/about" />

      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-white text-8xl font-display font-bold mb-8">
              About Me
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed">
              Full-Stack Developer passionate about creating beautiful,
              functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-display font-bold">
                My Journey
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                I hold a degree in Information Technology and began my career
                teaching programming and robotics to children and teenagers,
                which ignited my passion for technology and education. This
                experience taught me the importance of clear communication and
                breaking down complex concepts.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                After graduating, I transitioned into professional software
                development, where I've spent over 6 years building scalable
                solutions across diverse industries—from e-learning platforms
                and government systems to AI-powered applications and
                microservices architectures.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React
                and Node.js, with expertise in AI integration, cloud
                infrastructure, and delivering high-performance, user-centered
                web applications that drive real business impact.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-orange-500 rounded-full absolute -z-10 top-4 left-4"></div>
                <div className="w-96 h-96 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src="/blog-placeholder-about.jpg"
                    alt="Carlos Viana"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-6xl font-display font-bold text-center mb-20">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Frontend
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">React & Next.js</li>
                <li className="text-gray-400 text-xl">TypeScript</li>
                <li className="text-gray-400 text-xl">
                  Redux & TanStack Query
                </li>
                <li className="text-gray-400 text-xl">Tailwind CSS</li>
                <li className="text-gray-400 text-xl">Angular</li>
                <li className="text-gray-400 text-xl">Storybook & ShadCN</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                Backend
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">
                  Node.js, Express.js & NestJS
                </li>
                <li className="text-gray-400 text-xl">Python</li>
                <li className="text-gray-400 text-xl">SQL & NOSQL</li>
                <li className="text-gray-400 text-xl">
                  RESTful APIs & GraphQL
                </li>
                <li className="text-gray-400 text-xl">Prisma & Sequelize</li>
                <li className="text-gray-400 text-xl">
                  Microservices & Serverless
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-lg">
              <h3 className="text-white text-3xl font-display font-bold mb-8">
                DevOps & Tools
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-xl">
                  AWS (Lambda, S3, RDS, SQS)
                </li>
                <li className="text-gray-400 text-xl">Docker & CI/CD</li>
                <li className="text-gray-400 text-xl">Kafka & Redis</li>
                <li className="text-gray-400 text-xl">Jest & Vitest</li>
                <li className="text-gray-400 text-xl">Terraform</li>
                <li className="text-gray-400 text-xl">AI Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-6xl font-display font-bold text-center mb-20">
            Experience
          </h2>

          <div className="space-y-16">
            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Software Engineer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  Jan 2025 - Present
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                TangoCode - Chicago, IL (Remote)
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Developing a platform leveraging AI to deliver advanced analysis
                and actionable insights for clients. Integrated machine learning
                models to automate data processing and enhance decision-making
                accuracy. Refactored and optimized key components to improve
                system efficiency, reduce technical debt, and enhance
                maintainability.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  React
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Next.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Python
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  AWS
                </span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Full-Stack Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  Mar 2023 - Jan 2025
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                Growth Machine - Rio de Janeiro (Remote)
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Led the development of Station AI, integrating generative AI to
                enhance automation and decision-making. Developed Growth Way and
                GS Engage platforms utilizing microservices architecture.
                Implemented high-performance features, reducing loading times by
                40% across products. Mentored 3 junior developers and conducted
                regular code reviews.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  React
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Next.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  AWS
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  MongoDB
                </span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Full-Stack Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  Apr 2021 - Feb 2023
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                Squadra Digital - Belo Horizonte (Remote)
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Developed and maintained complex, scalable web applications for
                clients in the public and private sectors. Collaborated closely
                with designers and product managers to implement user-focused
                designs with intuitive UX, accessibility, and responsiveness.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  React
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Next.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  PostgreSQL
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  AWS
                </span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Full-Stack Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  Jun 2020 - Apr 2021
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                Life Tecnologia - Brasília (Remote)
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Developed secure applications for 2 government ministries,
                ensuring compliance with industry standards. Cooperated
                effectively with distributed teams, delivering projects on time
                and meeting client expectations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Angular
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Java
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-white text-3xl font-display font-bold">
                  Full-Stack Developer
                </h3>
                <span className="text-orange-500 font-medium text-xl">
                  Feb 2019 - Jun 2020
                </span>
              </div>
              <h4 className="text-gray-300 text-2xl mb-4">
                Unifacex - Natal, Brazil
              </h4>
              <p className="text-gray-400 text-xl leading-relaxed">
                Developed 5 systems for the E-Learning Department, resulting in
                a 40% increase in student engagement. Built scalable solutions
                to support educational initiatives and improve learning
                outcomes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  React
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
