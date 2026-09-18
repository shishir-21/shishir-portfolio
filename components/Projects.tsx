"use client";

import Image from "next/image";
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

                {/* Section heading */}
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

                {/* Project list */}
                <div className="mt-24 space-y-32 md:mt-36">

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
                                ease: "easeOut",
                            }}
                            className="grid gap-10 md:grid-cols-2 md:items-center md:gap-20"
                        >

                            {/* Project image */}
                            <div
                                className={`group overflow-hidden rounded-2xl bg-neutral-100 ${index % 2 === 1
                                        ? "md:order-2"
                                        : "md:order-1"
                                    }`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">

                                    <Image
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Number overlay */}
                                    <div className="absolute left-5 top-5">
                                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                                            {project.number}
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {/* Project content */}
                            <div
                                className={`${index % 2 === 1
                                        ? "md:order-1"
                                        : "md:order-2"
                                    }`}
                            >

                                <p className="text-sm text-neutral-400">
                                    {project.subtitle}
                                </p>

                                <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl md:text-5xl">
                                    {project.title}
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-neutral-500">
                                    {project.description}
                                </p>

                                <p className="mt-5 text-base leading-7 text-neutral-500">
                                    {project.details}
                                </p>

                                {/* Technologies */}
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
                                <div className="mt-8 flex items-center gap-6">

                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-50"
                                        >
                                            GitHub
                                            <ArrowUpRight size={15} />
                                        </a>
                                    )}

                                    {project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-50"
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
