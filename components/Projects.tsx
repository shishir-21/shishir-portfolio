"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-black/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">

        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm text-neutral-400">
            Projects
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
            A collection of projects where I explored full-stack
            development, AI, data, IoT and product engineering.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-32 md:mt-32">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20"
            >

              {/* Image */}
              <div
                className={`overflow-hidden rounded-2xl bg-neutral-100 ${
                  index % 2 === 1
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <div className="aspect-[4/3]">

                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-sm text-neutral-400">
                      {project.title} screenshot
                    </p>
                  </div>

                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >

                <p className="text-sm text-neutral-400">
                  {project.number}
                </p>

                <p className="mt-4 text-sm text-neutral-500">
                  {project.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-medium tracking-tight md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-500">
                  {project.description}
                </p>

                <p className="mt-5 text-base leading-7 text-neutral-500">
                  {project.details}
                </p>

                {/* Tech */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                  >
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    >
                      Live
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
