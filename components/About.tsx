import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="border-t border-black/10">
            <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">

                {/* Section heading */}
                <div className="max-w-4xl">
                    <p className="text-sm text-neutral-400">
                        About
                    </p>

                    <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
                        Here&apos;s a quick intro about me and what I love to do.
                    </h2>
                </div>

                {/* Story 1 */}
                <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-2 md:items-center md:gap-20">

                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
                        <Image
                            src="/profile.jpg"
                            alt="Shishir Mahato"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-neutral-400">
                            01
                        </p>

                        <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                            From college to production
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-neutral-500">
                            I&apos;m a Computer Science Engineering graduate
                            specializing in Data Science. I enjoy turning ideas
                            into complete, working products.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-neutral-500">
                            My journey started with learning the fundamentals
                            of programming and gradually moved into full-stack
                            development, backend systems and AI.
                        </p>
                    </div>

                </div>

                {/* Story 2 */}
                <div className="mt-32 grid gap-12 md:mt-48 md:grid-cols-2 md:items-center md:gap-20">

                    <div className="order-2 md:order-1">

                        <p className="text-sm text-neutral-400">
                            02
                        </p>

                        <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                            Building things I actually want to exist
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-neutral-500">
                            I like building products that solve practical problems.
                            Instead of only writing isolated code, I enjoy
                            understanding how the complete system works.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-neutral-500">
                            From AI developer tools like CodeFrog AI to healthcare
                            platforms like MediBrain, I enjoy working across the
                            frontend, backend and AI layers.
                        </p>

                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100">
                        <Image
                            src="/projects/codefrog.png"
                            alt="CodeFrog AI"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                </div>

                {/* Story 3 */}
                <div className="mt-32 md:mt-48">

                    <p className="text-sm text-neutral-400">
                        03
                    </p>

                    <h3 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                        Shipping is the habit.
                    </h3>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-500 md:text-xl">
                        I learn by building. I like taking an idea from
                        architecture to implementation, testing it in the
                        real world and continuously improving it.
                    </p>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-500 md:text-xl">
                        Every project gives me a chance to understand something
                        new — whether that is a backend architecture, an API,
                        an AI workflow or a better way to build a user experience.
                    </p>

                </div>

            </div>
        </section>
    );
}
