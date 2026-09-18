"use client";

import { useState } from "react";

function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FileIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <polyline points="9 15 12 18 15 15" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shishir-mahato-4468aa280/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/shishir-21",
    icon: GitHubIcon,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const email = "mahatoshishir6@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);
      setCopyStatus("Email copied to clipboard.");

      setTimeout(() => {
        setCopied(false);
        setCopyStatus("");
      }, 2000);
    } catch {
      setCopyStatus("Unable to copy email.");
    }
  };

  return (
    <section id="contact" className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-[#111111] p-8 shadow-xl md:p-[72px]">
          {/* Decorative frame */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 right-0 top-8 h-px bg-zinc-700 md:top-12" />
            <div className="absolute bottom-8 left-0 right-0 h-px bg-zinc-700 md:bottom-12" />

            <div className="absolute bottom-0 right-8 top-0 w-px bg-zinc-700 md:right-12" />
            <div className="absolute bottom-0 left-8 top-0 w-px bg-zinc-700 md:left-12" />

            {/* Top-left corner */}
            <div className="absolute left-[42px] top-12 hidden h-2 w-px bg-zinc-300 md:block" />
            <div className="absolute left-12 top-[42px] hidden h-px w-2 bg-zinc-300 md:block" />

            {/* Top-right corner */}
            <div className="absolute right-[42px] top-12 hidden h-2 w-px bg-zinc-300 md:block" />
            <div className="absolute right-12 top-[42px] hidden h-px w-2 bg-zinc-300 md:block" />

            {/* Bottom-left corner */}
            <div className="absolute bottom-[42px] left-12 hidden h-px w-2 bg-zinc-300 md:block" />
            <div className="absolute bottom-12 left-[42px] hidden h-2 w-px bg-zinc-300 md:block" />

            {/* Bottom-right corner */}
            <div className="absolute bottom-[42px] right-12 hidden h-px w-2 bg-zinc-300 md:block" />
            <div className="absolute bottom-12 right-[42px] hidden h-2 w-px bg-zinc-300 md:block" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-8 text-3xl font-medium tracking-tight text-white md:text-4xl">
              Get in touch
            </h2>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Left side */}
              <div className="lg:w-[58%]">
                <p className="max-w-xl text-base leading-8 text-gray-300 md:text-lg">
                  I&apos;m open to software engineering roles, full-stack
                  opportunities, AI projects, and interesting problems.
                  <br />
                  If something I&apos;ve built resonates with you, drop me a
                  message!
                </p>

                <p className="mt-8 text-sm leading-7 text-gray-400">
                  Based in India.
                  <br />
                  Open to remote and onsite opportunities.
                </p>
              </div>

              {/* Right side */}
              <div className="flex flex-col lg:w-[300px]">
                {/* Email CTA */}
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex w-fit items-center gap-2.5 rounded-xl bg-indigo-500 px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-400 hover:shadow-indigo-400/30"
                >
                  <MailIcon className="shrink-0" />

                  <span>Say Hello</span>

                  <ArrowIcon className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Copy email */}
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={`Copy email address ${email}`}
                  className="mt-3 flex w-fit items-center gap-2 text-left text-sm text-gray-400 transition-colors hover:text-white"
                  title="Copy email"
                >
                  <span>{email}</span>

                  {copied ? (
                    <CheckIcon className="text-indigo-400" />
                  ) : (
                    <CopyIcon className="text-gray-500" />
                  )}

                  <span className="text-gray-600">
                    {copied ? "copied" : "copy"}
                  </span>
                </button>

                {/* Accessible copy status */}
                <p
                  aria-live="polite"
                  aria-atomic="true"
                  className="sr-only"
                >
                  {copyStatus}
                </p>

                {/* Links */}
                <div className="mt-6 flex flex-col border-t border-zinc-700/60 pt-3">
                  {/* Resume */}
                  <a
                    href="/resume.pdf"
                    download
                    className="group flex items-center gap-3 rounded-lg py-2.5 text-base text-gray-300 transition-colors hover:text-white"
                  >
                    <FileIcon className="shrink-0 text-gray-500 transition-colors group-hover:text-indigo-300" />

                    <span>My Resume</span>

                    <ArrowIcon className="ml-auto text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-300 group-hover:opacity-100" />
                  </a>

                  {/* Social links */}
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg py-2.5 text-base text-gray-300 transition-colors hover:text-white"
                      >
                        <Icon className="shrink-0 text-gray-500 transition-colors group-hover:text-indigo-300" />

                        <span>{social.label}</span>

                        <ArrowIcon className="ml-auto text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-300 group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shishir Mahato</p>

          <p>Designed &amp; built with Next.js</p>
        </div>
      </div>
    </section>
  );
}
