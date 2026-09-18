"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center">
            <div className="mx-auto w-full max-w-6xl px-6 pt-24">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {/* Small intro */}
                    <p className="mb-6 text-sm tracking-wide text-neutral-500">
                        Software Engineer · Full Stack · AI
                    </p>

                    {/* Main heading */}
                    <h1 className="max-w-6xl text-[4rem] font-medium leading-[0.95] tracking-[-0.06em] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem]">
                        Hey, I&apos;m
                        <br />
                        Shishir.
                    </h1>

                    {/* Description */}
                    <p className="mt-10 max-w-2xl text-xl leading-8 text-neutral-500 sm:text-2xl">
                        Full Stack Developer → AI Engineer.
                        I build modern web applications and AI-powered
                        products that solve real-world problems.
                    </p>

                    {/* Scroll button */}
                    <motion.a
                        href="#about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                        }}
                        className="mt-14 inline-flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-black"
                    >
                        <span>Scroll to explore</span>

                        <motion.span
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            <ArrowDown size={16} />
                        </motion.span>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
