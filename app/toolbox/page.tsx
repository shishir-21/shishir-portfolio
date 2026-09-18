import {
  Code2,
  Database,
  Globe,
  Send,
  Server,
} from "lucide-react";

import {
  siFastapi,
  siDocker,
  siNextdotjs,
  siGithub,
} from "simple-icons";

const tools = [
  {
    title: "VS Code",
    type: "lucide" as const,
    icon: Code2,
    link: "https://code.visualstudio.com/",
  },
  {
    title: "FastAPI",
    type: "simple" as const,
    icon: siFastapi,
    link: "https://fastapi.tiangolo.com/",
  },
  {
    title: "Docker",
    type: "simple" as const,
    icon: siDocker,
    link: "https://www.docker.com/",
  },
  {
    title: "Next.js",
    type: "simple" as const,
    icon: siNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    title: "GitHub",
    type: "simple" as const,
    icon: siGithub,
    link: "https://github.com/shishir-21",
  },
  {
    title: "Postman",
    type: "lucide" as const,
    icon: Send,
    link: "https://www.postman.com/",
  },
  {
    title: "PostgreSQL",
    type: "lucide" as const,
    icon: Database,
    link: "https://www.postgresql.org/",
  },
  {
    title: "MongoDB",
    type: "lucide" as const,
    icon: Database,
    link: "https://www.mongodb.com/",
  },
  {
    title: "React",
    type: "lucide" as const,
    icon: Globe,
    link: "https://react.dev/",
  },
  {
    title: "Node.js",
    type: "lucide" as const,
    icon: Server,
    link: "https://nodejs.org/",
  },
];

export default function ToolboxPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <section className="relative border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <h1 className="mx-auto max-w-3xl text-center text-5xl font-medium leading-tight tracking-tight md:text-7xl">
            Software I keep
            <br />
            in my toolbox.
          </h1>
        </div>
      </section>

      {/* Applications heading */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center md:px-6">
          <span className="text-sm font-medium text-indigo-600">
            Applications
          </span>
        </div>
      </section>

      {/* Tools */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <div className="grid grid-cols-2 place-items-center gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {tools.map((tool) => {
              return (
                <a
                  key={tool.title}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center"
                >
                  <div className="h-28 w-28 rounded-[20px] border border-black/10 bg-white p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-black/[0.03] bg-[#EDEEF0]"
                      style={{
                        boxShadow:
                          "0px 2px 1.5px 0px rgba(165,174,184,0.32) inset",
                      }}
                    >
                      {tool.type === "simple" ? (
                        <svg
                          role="img"
                          aria-label={tool.title}
                          viewBox="0 0 24 24"
                          className="h-10 w-10"
                          fill={`#${tool.icon.hex}`}
                        >
                          <path d={tool.icon.path} />
                        </svg>
                      ) : (
                        <tool.icon
                          size={40}
                          strokeWidth={1.7}
                        />
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-500 transition-colors group-hover:text-neutral-900">
                    {tool.title}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-24" />
    </main>
  );
}
