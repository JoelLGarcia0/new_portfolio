import React from "react";
import Image from "next/image";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJsSquare,
  FaDocker,
  FaJava,
  FaDownload,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiStreamlit,
  SiOpenai,
} from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";
import { darklogo, logo } from "../../public";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-950 dark:text-gray-300 font-sans px-6 py-12">
      <header className="max-w-3xl mx-auto flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Joel Garcia Logo"
            width={100}
            height={100}
            className="block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            src={darklogo}
            alt="Joel Garcia Logo (White)"
            width={100}
            height={100}
            className="hidden dark:block"
          />
          <div>
            <h1 className="text-2xl font-bold">Joel Garcia</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/JOEL_GARCIA_Resume.pdf"
            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 dark:border hover:bg-gray-800 text-xs"
            download
          >
            <FaDownload className="text-sm" />
            <span>Resume</span>
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-lg font-semibold mb-2">About</h2>
        <p className="text-sm">
          I am Joel Garcia, a <strong>full-stack developer</strong> with a
          passion for sports, finance, and building clean, user-focused web
          applications. I recently earned my{" "}
          <strong>Computer Science degree</strong> from <strong>FIU</strong>,
          where I led <strong>Agile projects</strong> and built backend systems
          using <strong>Java</strong> and <strong>MySQL</strong>. Since then,
          I've developed <strong>full-stack applications</strong> with{" "}
          <strong>Django</strong>, created <strong>AI-powered tools</strong>{" "}
          using <strong>Python</strong> and <strong>OpenAI</strong>, and
          continued sharpening my skills across the stack. I also design and
          build modern, responsive frontends using <strong>React</strong> and{" "}
          <strong>Next.js</strong>, bringing clean UI and strong performance
          together. I'm driven by curiosity, collaboration, and the challenge of
          turning ideas into scalable, real-world solutions.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-lg font-semibold mb-8">Technologies</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center text-slate-800 dark:text-gray-400">
          <div>
            <SiNextdotjs className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Next.js</p>
          </div>
          <div>
            <FaReact className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">React</p>
          </div>
          <div>
            <FaJsSquare className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">JavaScript</p>
          </div>
          <div>
            <SiTypescript className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">TypeScript</p>
          </div>
          <div>
            <SiTailwindcss className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Tailwind CSS</p>
          </div>
          <div>
            <SiDjango className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Django</p>
          </div>
          <div>
            <FaPython className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Python</p>
          </div>
          <div>
            <SiMysql className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">MySQL</p>
          </div>
          <div>
            <SiPostgresql className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">PostgreSQL</p>
          </div>
          <div>
            <FaJava className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Java</p>
          </div>
          <div>
            <SiSpringboot className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Spring Boot</p>
          </div>
          <div>
            <FaDocker className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">Docker</p>
          </div>
          <div>
            <SiStreamlit className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2 hover:text-">Streamlit</p>
          </div>
          <div>
            <SiOpenai className="mx-auto text-3xl" />
            <p className="text-sm font-semibold mt-2">OpenAI</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-12 space-y-8">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <ProjectCard
          title="AI Chatbot for Real Estate"
          description="Custom AI chatbot for MJ Estates realty to automate property Q&A and lead generation in English and Spanish."
          techStack={["Python", "Streamlit", "OpenAI", "Render"]}
          role="Built backend logic and UI with AI integration"
          outcome="Demo of bilingual chatbot"
          linkLabel="Live Demo"
          linkHref="https://mj-estates-ai.onrender.com/"
        />

        <ProjectCard
          title="RESTWeb Dev Website"
          description="Landing page for my freelance web dev brand. Optimized for performance, branding, and SEO."
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwindcss",
            "Vercel",
          ]}
          role="Built custom animations and branding site"
          outcome="Used to generate client leads"
          linkLabel="Live Site"
          linkHref="https://www.restweb.dev"
        />
        <ProjectCard
          title="Cuba Bakery Website"
          description="A custom-built site for a local bakery in Homestead, FL. Includes dynamic menu display, Leaflet map integration, and responsive pages."
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwindcss",
            "Vercel",
          ]}
          role="Created and deployed full front-end layout and navigation"
          outcome="Client-ready site"
          linkLabel="Live Site"
          linkHref="https://www.cubabakery.com"
        />
        <ProjectCard
          title="Lee Construction Website"
          description="Built for a construction company in South Florida. Features service pages, gallery, contact form, and modern design."
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwindcss",
            "Vercel",
          ]}
          role="Designed pages and collaborated on business needs"
          outcome="Responsive, scalable site, mobile-friendly"
          linkLabel="Live Site"
          linkHref="https://lee-construction.vercel.app/"
        />
      </section>
      <section className="max-w-3xl mx-auto mb-12 space-y-8">
        <h2 className="text-lg font-semibold mb-4">Professional Experience</h2>

        <div>
          <h3 className="text-md font-semibold">
            Freelance Web Developer – RESTweb Dev (01/2021 – Current)
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Built and deployed responsive websites and applications tailored
              to client needs
            </li>
            <li>
              Designed user interfaces in Figma and developed pixel-perfect
              components using React and Tailwind CSS
            </li>
            <li>
              Managed client assets, branding, and deliverables through Google
              Drive
            </li>
            <li>
              Deployed sites with Vercel and integrated continuous deployment
              pipelines
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold">
            IT Assistant – Lee Construction Company (01/2025 – Current)
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Supported internal IT infrastructure and troubleshooting systems
            </li>
            <li>
              Assisted in backend-to-frontend integration tasks across multiple
              teams
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold">
            Property Manager – MJ Estates (11/2022 – Current)
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Streamlined document management and scheduling through digital
              tools
            </li>
            <li>
              Coordinated projects using agile-style workflows and team
              collaboration tools
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-lg font-semibold mb-4">Education</h2>
        <div className="text-sm text-gray-800 dark:text-gray-300 space-y-4">
          <div>
            <p className="font-bold">Bachelor of Arts in Computer Science</p>
            <p>Florida International University – Miami, FL (12/2024)</p>
            <p>Major GPA: 3.9</p>
          </div>
          <div>
            <p className="font-bold">Associate of Arts</p>
            <p>Miami Dade College – Miami, FL (01/2014)</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-10">
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <div className="flex items-center gap-6 text-3xl text-gray-700">
          <a
            href="https://github.com/JoelLGarcia0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-garcia-69163a20b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:joellorenzogarcia0@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
}
