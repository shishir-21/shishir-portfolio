"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Email",
    href: "mailto:mahatoshishir6@gmail.com",
    type: "email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shishir-mahato-4468aa280/",
    type: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/shishir-21",
    type: "github",
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.84c.85 0 1.7.12 2.49.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">

        {/* Heading */}
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-5xl"
        >
          <p className="text-sm text-neutral-400">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Let&apos;s build
            <br />
            something together.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl">
            Have a project, opportunity, or just want
            to talk about technology? Feel free to
            reach out.
          </p>
        </motion.div>

        {/* Email */}
        <motion.a
          href="mailto:mahatoshishir6@gmail.com"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="group mt-16 flex w-fit items-center gap-3 border-b border-black pb-2 text-lg font-medium transition-opacity hover:opacity-60 md:text-2xl"
        >
          mahatoshishir6@gmail.com

          <ArrowUpRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>

        {/* Social Links */}
        <div className="mt-20 grid gap-3 sm:grid-cols-3">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={
                social.type === "email"
                  ? undefined
                  : "_blank"
              }
              rel={
                social.type === "email"
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
              }}
              className="group flex items-center justify-between rounded-2xl bg-neutral-50 p-5 transition-colors hover:bg-neutral-100"
            >
              <div className="flex items-center gap-4">

                <div className="text-neutral-500">
                  <SocialIcon type={social.type} />
                </div>

                <span className="font-medium">
                  {social.name}
                </span>
              </div>

              <ArrowUpRight
                size={18}
                className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-black/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Shishir
              Mahato
            </p>

            <p>
              Designed &amp; built with Next.js
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
