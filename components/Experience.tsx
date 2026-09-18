"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 — Present",
    company: "ModelSuite AI",
    role: "Full Stack Developer",
    description:
      "Building full-stack features using the MERN stack, Google APIs and OAuth. Working on messaging and meeting-related features including Google Calendar and Google Meet integrations.",
  },
  {
    period: "2026 — Present",
    company: "CodeFrog AI",
    role: "AI Software Engineer",
    description:
      "Building an AI-powered developer platform for understanding and working with GitHub repositories using Next.js, FastAPI, PostgreSQL, pgvector and Docker.",
  },
  {
    period: "2025",
    company: "Tata Motors",
    role: "Full Stack Developer Intern",
    description:
      "Built a Ticket Management System for employee support workflows, helping manage and track support requests for 500+ employees.",
  },
  {
    period: "2022 — 2026",
    company: "B.Tech CSE — Data Science",
    role: "Computer Science Engineering",
    description:
      "Completed my Bachelor of Technology in Computer Science Engineering with a specialization in Data Science.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">

        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm text-neutral-400">
            Experience
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
            My journey so far.
          </h2>
        </div>

        {/* Experience list */}
        <div className="mt-20 md:mt-28">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="grid gap-6 border-t border-black/10 py-10 md:grid-cols-[180px_1fr]"
            >

              {/* Period */}
              <div>
                <p className="text-sm text-neutral-400">
                  {experience.period}
                </p>
              </div>

              {/* Content */}
              <div className="max-w-3xl">

                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {experience.company}
                </h3>

                <p className="mt-2 text-base text-neutral-500">
                  {experience.role}
                </p>

                <p className="mt-5 text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
                  {experience.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
