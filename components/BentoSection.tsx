"use client";

import { useEffect, useMemo } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import "@calcom/embed-react";

const tools = [
  {
    name: "VS Code",
    short: "VS",
    description: "Code Editor",
    className: "bg-[#007acc] text-white",
  },
  {
    name: "FastAPI",
    short: "F",
    description: "Python API",
    className: "bg-[#009688] text-white",
  },
  {
    name: "Docker",
    short: "D",
    description: "Containers",
    className: "bg-[#2496ed] text-white",
  },
  {
    name: "Next.js",
    short: "N",
    description: "React Framework",
    className: "bg-black text-white",
  },
  {
    name: "GitHub",
    short: "GH",
    description: "Code Hosting",
    className: "bg-[#24292f] text-white",
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

function CalendarCard() {
  const calendar = useMemo(() => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();

    return {
      year,
      monthName: date.toLocaleString("default", {
        month: "long",
      }),
      firstDay: new Date(year, month, 1).getDay(),
      daysInMonth: new Date(
        year,
        month + 1,
        0,
      ).getDate(),
    };
  }, []);

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
    <button
      type="button"
      data-cal-link="shishir-dxpp1j/30min"
      data-cal-config='{"layout":"month_view","theme":"dark","hideEventTypeDetails":false}'
      aria-label="Book a 30 minute call with Shishir"
      className="group relative h-full w-full overflow-hidden rounded-2xl border border-black/10 bg-white text-left"
    >
      {/* Text */}
      <div className="relative z-20 flex h-full w-[42%] flex-col p-7 md:p-8">
        <h2 className="text-xl font-medium tracking-tight text-neutral-900 md:text-2xl">
          Book a call with me
        </h2>

        <p className="mt-5 max-w-[210px] text-base leading-7 text-neutral-500 md:text-lg">
          I&apos;d love to chat even if there&apos;s no agenda!
        </p>

        <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-700 transition-colors group-hover:text-indigo-500">
          Let&apos;s connect
          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>

      {/* Calendar preview */}
      <div className="absolute left-[35%] top-8 h-[265px] w-[520px] max-w-[62%] transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <div className="h-full rounded-[20px] border border-indigo-300 bg-white p-2 shadow-sm">
          <div
            className="h-full rounded-xl border-2 border-black/[0.03] bg-[#edeef0] p-4"
            style={{
              boxShadow:
                "0px 2px 2px rgba(165,174,184,0.32) inset",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2">
              <CalendarDays
                size={16}
                className="text-indigo-500"
                strokeWidth={1.6}
              />

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

            {/* Calendar grid */}
            <div className="mt-4 grid grid-cols-7 gap-x-2 gap-y-1 px-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="flex h-8 items-center justify-center"
                >
                  <span className="text-[11px] font-medium text-gray-400">
                    {day}
                  </span>
                </div>
              ))}

              {Array.from({
                length: calendar.firstDay,
              }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="h-8"
                />
              ))}

              {Array.from({
                length: calendar.daysInMonth,
              }).map((_, index) => {
                const day = index + 1;

                const highlighted =
                  highlightedDays.has(day);

                return (
                  <div
                    key={day}
                    className={`flex h-8 items-center justify-center rounded-md text-sm ${
                      highlighted
                        ? "bg-white text-gray-500 shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Calendar arrow */}
            <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-sm">
              <ArrowUpRight
                size={18}
                strokeWidth={1.7}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function ToolboxCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white">
      {/* Heading */}
      <div className="relative z-20 px-6 pt-7 text-center">
        <h2 className="text-xl font-medium tracking-tight text-neutral-900 md:text-2xl">
          Toolbox
        </h2>

        <p className="mt-2 text-base text-neutral-500 md:text-lg">
          Check out my favorite tools and technologies.
        </p>
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      {/* Tools */}
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-end gap-3">
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            className={`group/tool shrink-0 transition-all duration-500 ${
              index === 2
                ? "translate-y-0"
                : "translate-y-2"
            } hover:-translate-y-3`}
          >
            <div
              className={`rounded-[20px] border border-black/10 bg-white p-2 shadow-sm transition-colors duration-300 group-hover/tool:border-indigo-300 ${
                index === 2
                  ? "h-[120px] w-[120px]"
                  : "h-[100px] w-[100px]"
              }`}
            >
              <div className="grid h-full place-items-center rounded-xl border-2 border-black/[0.03] bg-[#edeef0]">
                <div
                  className={`flex items-center justify-center rounded-2xl font-semibold shadow-sm ${
                    index === 2
                      ? "h-14 w-14 text-xl"
                      : "h-12 w-12 text-lg"
                  } ${tool.className}`}
                >
                  {tool.short}
                </div>
              </div>
            </div>

            <p className="mt-2 text-center text-xs font-medium text-neutral-400 opacity-0 transition-opacity duration-300 group-hover/tool:opacity-100">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BentoSection() {
  useEffect(() => {
    let cancelled = false;

    async function setupCal() {
      try {
        const { getCalApi } = await import(
          "@calcom/embed-react"
        );

        if (cancelled) return;

        const cal = await getCalApi();

        cal("ui", {
          theme: "dark",
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
          "Failed to initialize Cal.com:",
          error,
        );
      }
    }

    setupCal();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="h-[360px]">
            <CalendarCard />
          </div>

          <div className="h-[360px]">
            <ToolboxCard />
          </div>
        </div>
      </div>
    </section>
  );
}
