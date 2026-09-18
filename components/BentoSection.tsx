"use client";

import { useEffect, useMemo } from "react";
import { Code2 } from "lucide-react";

import {
  siFastapi,
  siDocker,
  siNextdotjs,
  siGithub,
} from "simple-icons";

import { BentoCard } from "./BentoCard";

const tools = [
  {
    title: "VS Code",
    type: "lucide" as const,
    icon: Code2,
  },
  {
    title: "FastAPI",
    type: "simple" as const,
    icon: siFastapi,
  },
  {
    title: "Docker",
    type: "simple" as const,
    icon: siDocker,
  },
  {
    title: "Next.js",
    type: "simple" as const,
    icon: siNextdotjs,
  },
  {
    title: "GitHub",
    type: "simple" as const,
    icon: siGithub,
  },
];

const dayNames = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

function ShadowBox({
  children,
  width,
  height,
}: {
  children: React.ReactNode;
  width: number;
  height: number;
}) {
  return (
    <div
      className="rounded-[20px] border border-black/10 p-2"
      style={{
        width,
        height,
      }}
    >
      <div
        className="grid h-full place-items-center rounded-xl border-2 border-black/[0.03] bg-[#EDEEF0]"
        style={{
          boxShadow:
            "0px 2px 1.5px 0px rgba(165,174,184,0.32) inset",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CalendarDays({
  firstDayOfWeek,
  daysInMonth,
}: {
  firstDayOfWeek: number;
  daysInMonth: number;
}) {
  const highlightedDays = new Set([
    1,
    2,
    3,
    5,
    7,
    8,
    10,
    16,
    21,
    26,
  ]);

  return (
    <>
      {dayNames.map((day) => (
        <div
          key={`header-${day}`}
          className="flex h-8 w-8 items-center justify-center"
        >
          <span className="text-[11px] font-medium text-gray-400">
            {day}
          </span>
        </div>
      ))}

      {Array(firstDayOfWeek)
        .fill(null)
        .map((_, index) => (
          <div
            key={`empty-${index}`}
            className="h-8 w-8"
          />
        ))}

      {Array(daysInMonth)
        .fill(null)
        .map((_, index) => {
          const day = index + 1;
          const highlighted = highlightedDays.has(day);

          return (
            <div
              key={`day-${day}`}
              className={`flex h-8 w-8 items-center justify-center rounded text-sm ${highlighted
                ? "bg-white text-gray-500 shadow-sm"
                : "text-gray-400"
                }`}
            >
              {day}
            </div>
          );
        })}
    </>
  );
}

function CalendarBento() {
  const calendar = useMemo(() => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return {
      year,
      monthName: currentDate.toLocaleString("default", {
        month: "long",
      }),
      firstDayOfWeek: new Date(
        year,
        month,
        1,
      ).getDay(),
      daysInMonth: new Date(
        year,
        month + 1,
        0,
      ).getDate(),
    };
  }, []);

  return (
    <button
      type="button"
      data-cal-link="shishir-dxpp1j/30min"
      data-cal-config='{"layout":"month_view","theme":"light","hideEventTypeDetails":false}'
      aria-label="Book a 30 minute call with Shishir"
      className="w-full text-left"
    >
      <BentoCard
        height="h-[180px] md:h-[260px]"
        showHoverGradient
      >
        <div className="group grid h-full grid-cols-12 gap-5">
          {/* Left content */}
          <div className="relative z-40 col-span-5 text-balance">
            <h2 className="mb-4 text-base font-medium text-neutral-900">
              Book a call with me
            </h2>

            <p className="mb-2 max-w-[220px] text-sm leading-6 text-neutral-500">
              I&apos;d love to chat even if there&apos;s no agenda!
            </p>
          </div>

          {/* Calendar preview */}
          <div className="absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
            <div className="h-[230px] w-[430px] rounded-[20px] border border-black/10 p-2 transition-colors duration-300 group-hover:border-indigo-400">
              <div
                className="h-full overflow-hidden rounded-xl border-2 border-black/[0.03] bg-[#EDEEF0] p-3"
                style={{
                  boxShadow:
                    "0px 2px 1.5px 0px rgba(165,174,184,0.32) inset",
                }}
              >
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">
                      {calendar.monthName}, {calendar.year}
                    </span>
                  </p>

                  <span className="h-1 w-1 rounded-full bg-gray-400" />

                  <p className="text-xs text-gray-400">
                    30 min call
                  </p>
                </div>

                <div className="mt-2 grid grid-cols-7 gap-1 px-2">
                  <CalendarDays
                    firstDayOfWeek={calendar.firstDayOfWeek}
                    daysInMonth={calendar.daysInMonth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>
    </button>
  );
}

function ToolboxBento() {
  return (
    <BentoCard height="h-[180px] md:h-[260px]">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-white to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-white to-transparent" />

      {/* Heading */}
      <div className="relative z-20 text-center">
        <h2 className="text-base font-medium text-neutral-900">
          Toolbox
        </h2>

        <p className="mt-1 text-sm text-neutral-500">
          Check out my favorite tools and spots around the web.
        </p>
      </div>

      {/* Tools */}
      <div className="mt-auto mb-4 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out">
        {tools.map((tool, index) => (
          <div
            key={tool.title}
            className="group inline-block text-center"
          >
            <div
              className={`rounded-[20px] border border-black/10 p-2 transition-all duration-500 group-hover:border-indigo-400 ${index === 2
                ? "delay-0 group-hover:-translate-y-3"
                : index === 1 || index === 3
                  ? "delay-100 group-hover:-translate-y-3"
                  : "delay-200 group-hover:-translate-y-3"
                }`}
              style={{
                width: index === 2 ? 130 : 110,
                height: index === 2 ? 130 : 110,
              }}
            >
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
                    className={
                      index === 2
                        ? "h-[46px] w-[46px]"
                        : "h-10 w-10"
                    }
                    fill={`#${tool.icon.hex}`}
                  >
                    <path d={tool.icon.path} />
                  </svg>
                ) : (
                  <tool.icon
                    size={index === 2 ? 46 : 40}
                    strokeWidth={1.8}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

export default function BentoSection() {
  useEffect(() => {
    let cancelled = false;

    async function initializeCal() {
      try {
        const { getCalApi } = await import(
          "@calcom/embed-react"
        );

        if (cancelled) return;

        const cal = await getCalApi();

        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#6366f1",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error(
          "Cal.com initialization failed:",
          error,
        );
      }
    }

    initializeCal();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CalendarBento />
          <ToolboxBento />
        </div>
      </div>
    </section>
  );
}
