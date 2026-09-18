"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    GitCommit,
    GitFork,
    Star,
} from "lucide-react";

type Contribution = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

type ContributionResponse = {
    total: {
        lastYear?: number;
        [year: string]: number | undefined;
    };
    contributions: Contribution[];
};

type GithubRepo = {
    stargazers_count: number;
    forks_count: number;
};

const USERNAME = "shishir-21";

const LEVEL_CLASSES = [
    "bg-[#e5e7eb]",
    "bg-emerald-200",
    "bg-emerald-300",
    "bg-emerald-500",
    "bg-emerald-700",
];

function get2026Contributions(
    contributions: Contribution[]
) {
    const start = new Date("2026-01-01T00:00:00");
    const end = new Date();

    return contributions.filter((item) => {
        const date = new Date(`${item.date}T00:00:00`);

        return date >= start && date <= end;
    });
}

function buildWeeks(contributions: Contribution[]) {
    if (!contributions.length) {
        return [];
    }

    const sorted = [...contributions].sort((a, b) =>
        a.date.localeCompare(b.date)
    );

    const firstDate = new Date(
        `${sorted[0].date}T00:00:00`
    );

    const firstDay = firstDate.getDay();

    const padded: (Contribution | null)[] = [
        ...Array.from(
            { length: firstDay },
            () => null
        ),
        ...sorted,
    ];

    const weeks: (Contribution | null)[][] = [];

    for (let i = 0; i < padded.length; i += 7) {
        const week = padded.slice(i, i + 7);

        while (week.length < 7) {
            week.push(null);
        }

        weeks.push(week);
    }

    return weeks;
}

function getMonthLabels(
    contributions: Contribution[]
) {
    const labels: {
        name: string;
        index: number;
    }[] = [];

    let previousMonth = "";

    contributions.forEach((item, index) => {
        const date = new Date(
            `${item.date}T00:00:00`
        );

        const month = date.toLocaleString("en-US", {
            month: "short",
        });

        const key = `${date.getFullYear()}-${date.getMonth()}`;

        if (key !== previousMonth) {
            labels.push({
                name: month,
                index: Math.floor(index / 7),
            });

            previousMonth = key;
        }
    });

    return labels;
}

export default function GithubStats() {
    const [contributions, setContributions] =
        useState<Contribution[]>([]);

    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);
    const [commits, setCommits] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGithubData() {
            try {
                /*
                 * Fetch GitHub contribution calendar
                 */
                const contributionResponse =
                    await fetch(
                        `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
                        {
                            cache: "no-store",
                        }
                    );

                if (!contributionResponse.ok) {
                    throw new Error(
                        "Failed to fetch GitHub contributions"
                    );
                }

                const contributionData =
                    (await contributionResponse.json()) as ContributionResponse;

                /*
                 * Only show contributions
                 * from January 1, 2026
                 */
                const contributions2026 =
                    get2026Contributions(
                        contributionData.contributions
                    );

                setContributions(contributions2026);

                /*
                 * Fetch public repositories
                 */
                const repoResponse = await fetch(
                    `https://api.github.com/users/${USERNAME}/repos?per_page=100`,
                    {
                        cache: "no-store",
                    }
                );

                if (!repoResponse.ok) {
                    throw new Error(
                        "Failed to fetch GitHub repositories"
                    );
                }

                const repos =
                    (await repoResponse.json()) as GithubRepo[];

                let totalStars = 0;
                let totalForks = 0;

                repos.forEach((repo) => {
                    totalStars += repo.stargazers_count || 0;
                    totalForks += repo.forks_count || 0;
                });

                setStars(totalStars);
                setForks(totalForks);

                /*
                 * Total contributions from January 2026
                 */
                const total = contributions2026.reduce(
                    (sum, item) => sum + item.count,
                    0
                );

                setCommits(total);
            } catch (error) {
                console.error(
                    "Failed to load GitHub data:",
                    error
                );
            } finally {
                setLoading(false);
            }
        }

        loadGithubData();
    }, []);

    const weeks = useMemo(
        () => buildWeeks(contributions),
        [contributions]
    );

    const monthLabels = useMemo(
        () => getMonthLabels(contributions),
        [contributions]
    );

    const contributionTotal = contributions.reduce(
        (sum, item) => sum + item.count,
        0
    );

    return (
        <section className="border-t border-black/10 bg-[#fafafa]">
            <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

                {/* Section heading */}
                <motion.div
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
                    }}
                >
                    <p className="text-sm text-neutral-400">
                        GitHub
                    </p>

                    <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
                        What I&apos;m building in public.
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
                        I use GitHub to build, experiment,
                        contribute and continuously improve
                        my projects.
                    </p>
                </motion.div>

                {/* GitHub Dashboard */}
                <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_290px]">

                    {/* Contribution Card */}
                    <motion.a
                        href={`https://github.com/${USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        }}
                        className="group block cursor-pointer overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-neutral-50 md:p-8"
                    >

                        {/* Card Header */}
                        <div className="flex items-start justify-between gap-6">

                            {/* GitHub title */}
                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-7 w-7"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.84c.85 0 1.7.12 2.49.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-xl font-medium">
                                        GitHub contributions
                                    </p>

                                    <p className="mt-1 text-sm text-neutral-400">
                                        January 2026 — Present
                                    </p>
                                </div>

                            </div>

                            {/* Total */}
                            <div className="text-right">
                                <p className="text-4xl font-semibold tracking-tight text-violet-600">
                                    {loading
                                        ? "—"
                                        : contributionTotal}
                                </p>

                                <p className="text-sm text-neutral-400">
                                    contributions
                                </p>
                            </div>

                        </div>

                        {/* Contribution Calendar */}
                        <div className="mt-12 overflow-x-auto pb-4">
                            <div className="min-w-[930px]">

                                {/* Month Labels */}
                                <div className="relative ml-11 mb-4 h-5 text-xs text-neutral-400">

                                    {monthLabels.map(
                                        (month) => (
                                            <span
                                                key={`${month.name}-${month.index}`}
                                                className="absolute"
                                                style={{
                                                    left: `${month.index * 19}px`,
                                                }}
                                            >
                                                {month.name}
                                            </span>
                                        )
                                    )}

                                </div>

                                <div className="flex gap-3">

                                    {/* Day Labels */}
                                    <div className="flex w-8 shrink-0 flex-col justify-between py-1 text-[11px] text-neutral-400">
                                        <span></span>
                                        <span>Mon</span>
                                        <span></span>
                                        <span>Wed</span>
                                        <span></span>
                                        <span>Fri</span>
                                        <span></span>
                                    </div>

                                    {/* Heatmap */}
                                    <div className="flex gap-[5px]">

                                        {weeks.map(
                                            (week, weekIndex) => (
                                                <div
                                                    key={weekIndex}
                                                    className="flex flex-col gap-[5px]"
                                                >

                                                    {Array.from({
                                                        length: 7,
                                                    }).map(
                                                        (_, dayIndex) => {
                                                            const item =
                                                                week[dayIndex];

                                                            if (!item) {
                                                                return (
                                                                    <div
                                                                        key={dayIndex}
                                                                        className="h-[18px] w-[18px]"
                                                                    />
                                                                );
                                                            }

                                                            return (
                                                                <div
                                                                    key={item.date}
                                                                    className="group/cell relative"
                                                                >

                                                                    {/* Green Cell */}
                                                                    <div
                                                                        className={`h-[18px] w-[18px] cursor-pointer rounded-[4px] transition-all duration-150 hover:scale-110 hover:ring-2 hover:ring-black/10 ${LEVEL_CLASSES[item.level]}`}
                                                                    />

                                                                    {/* Tooltip */}
                                                                    <div
                                                                        className={`pointer-events-none absolute left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-2 text-xs text-white shadow-xl group-hover/cell:block ${dayIndex <= 1
                                                                                ? "top-full mt-3"
                                                                                : "bottom-full mb-3"
                                                                            }`}
                                                                    >
                                                                        <p className="font-semibold">
                                                                            {item.count}{" "}
                                                                            {item.count === 1
                                                                                ? "contribution"
                                                                                : "contributions"}
                                                                        </p>

                                                                        <p className="mt-0.5 text-gray-300">
                                                                            {new Date(
                                                                                `${item.date}T00:00:00`
                                                                            ).toLocaleDateString(
                                                                                "en-US",
                                                                                {
                                                                                    weekday: "short",
                                                                                    month: "short",
                                                                                    day: "numeric",
                                                                                    year: "numeric",
                                                                                }
                                                                            )}
                                                                        </p>

                                                                        {/* Tooltip arrow */}
                                                                        <span
                                                                            className={`absolute left-1/2 -translate-x-1/2 border-x-[5px] border-x-transparent ${dayIndex <= 1
                                                                                    ? "bottom-full border-b-[5px] border-b-[#111827]"
                                                                                    : "top-full border-t-[5px] border-t-[#111827]"
                                                                                }`}
                                                                        />
                                                                    </div>

                                                                </div>
                                                            );
                                                        }
                                                    )}

                                                </div>
                                            )
                                        )}

                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="mt-6 flex items-center justify-end gap-2 text-xs text-neutral-400">

                                    <span>Less</span>

                                    {LEVEL_CLASSES.map(
                                        (level, index) => (
                                            <span
                                                key={index}
                                                className={`h-[14px] w-[14px] rounded-[3px] ${level}`}
                                            />
                                        )
                                    )}

                                    <span>More</span>

                                </div>

                            </div>
                        </div>

                    </motion.a>

                    {/* Right Statistics */}
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

                        {/* GitHub Stars */}
                        <motion.a
                            href={`https://github.com/${USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-neutral-50"
                        >
                            <div className="flex items-center justify-between">

                                <p className="font-medium">
                                    GitHub Stars
                                </p>

                                <Star
                                    size={18}
                                    className="text-amber-300"
                                    fill="currentColor"
                                />

                            </div>

                            <p className="mt-10 text-4xl font-semibold tracking-tight text-violet-600">
                                {loading ? "—" : stars}
                            </p>

                        </motion.a>

                        {/* Forks */}
                        <motion.a
                            href={`https://github.com/${USERNAME}?tab=repositories`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-neutral-50"
                        >
                            <div className="flex items-center justify-between">

                                <p className="font-medium">
                                    Forks
                                </p>

                                <GitFork
                                    size={20}
                                    className="text-cyan-300"
                                />

                            </div>

                            <p className="mt-10 text-4xl font-semibold tracking-tight text-violet-600">
                                {loading ? "—" : forks}
                            </p>

                        </motion.a>

                        {/* Contributions */}
                        <motion.a
                            href={`https://github.com/${USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-neutral-50"
                        >
                            <div className="flex items-center justify-between">

                                <p className="font-medium">
                                    Contributions
                                </p>

                                <GitCommit
                                    size={20}
                                    className="text-violet-300"
                                />

                            </div>

                            <p className="mt-10 text-4xl font-semibold tracking-tight text-violet-600">
                                {loading ? "—" : commits}
                            </p>

                        </motion.a>

                    </div>
                </div>

            </div>
        </section>
    );
}
