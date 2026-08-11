import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";

const TITLE = "Bella Allegri | AI and Behavioral Neuroscience at Northeastern";
const DESCRIPTION =
  "First-year at Northeastern studying Artificial Intelligence and Behavioral Neuroscience. Chess trainer, Python game, NASA GeneLab, Formula SAE. Looking for summer 2027 research.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const projects = [
  {
    index: "01",
    title: "Chess trainer",
    meta: "In progress",
    body: "Chess apps count your puzzle streak and call it progress. Mine keeps a model of what you actually know and schedules positions with spaced retrieval. Between positions it has you talk through candidate moves the way strong players do out loud. The goal is the useful part of a coach.",
  },
  {
    index: "02",
    title: "Python game",
    meta: "In progress",
    body: "A game that teaches Python. That's the honest one-line version until the write-up is done.",
  },
  {
    index: "03",
    title: "PKU dietary recommendation app",
    meta: "Kean University, July 2025",
    body: "Built during a four-week research program. Phenylketonuria means tracking protein in almost everything you eat, so meal planning is daily cognitive work. I built a hybrid recommender over a database of 900+ foods and deployed it with Streamlit.",
  },
  {
    index: "04",
    title: "NASA GeneLab internship",
    meta: "Summer 2025",
    body: "Analyzed omics data from spaceflight experiments in Python.",
  },
  {
    index: "05",
    title: "Brown Formula Racing",
    meta: "Through June 2026",
    body: "Ten months on the electronics subsystem of a Formula SAE car, on a team I joined in high school.",
  },
];

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-base focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-32">
            <h1 className="max-w-[14ch] text-[3rem] leading-[1.05] sm:text-[5.25rem] lg:mr-auto lg:w-[80%]">
              Bella Michele Allegri
            </h1>
            <div className="mt-10 max-w-[46ch] space-y-4 text-lg leading-relaxed sm:text-xl lg:ml-[22%]">
              <p>I build tools that pay attention to how people learn and decide.</p>
              <p>First semester at Queen's University Belfast, then Boston in January.</p>
              <p className="pt-2">
                <a
                  href="mailto:bmallegri@gmail.com"
                  className="text-accent underline underline-offset-4"
                >
                  bmallegri@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* The short version */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-5 pb-24 sm:px-8">
            <p className="eyebrow text-accent">The short version</p>
            <p className="mt-6 max-w-[62ch] text-lg leading-[1.8]">
              I'm a first-year at Northeastern studying Artificial Intelligence and Behavioral
              Neuroscience. I want to know what happens when a person learns something hard, and
              whether software can see it. Right now that's a chess trainer that models what you know
              instead of counting your puzzle streak, and a game that teaches Python. Until June it
              was ten months on the electronics of Brown's Formula SAE car, a team I joined while I
              was still in high school. The summer before that, spaceflight omics at NASA GeneLab.
            </p>
            <p className="mt-8 font-mono text-xs">
              <Link to="/about" className="text-accent underline underline-offset-4">
                The longer version
              </Link>
            </p>
          </div>
        </section>

        {/* Right now */}
        <section className="border-t border-accent-tint bg-base">
          <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="eyebrow text-accent">Right now</p>
              <p className="font-mono text-[0.7rem] opacity-70">updated August 2026</p>
            </div>
            <p className="mt-6 max-w-[62ch] text-lg leading-[1.8]">
              This fall I'm at Queen's University Belfast for my first semester. Discrete math,
              Python, biology, and a class called Shared Space in the Divided City. January is
              Boston, where I'm after a lab spot and the telemetry side of Northeastern Electric
              Racing.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-5 pb-24 sm:px-8">
            <p className="eyebrow text-accent">Projects</p>
            <ol className="mt-10">
              {projects.map((p) => (
                <li
                  key={p.index}
                  className="border-t border-accent-tint py-8 sm:grid sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="font-mono text-xs opacity-70">{p.index}</span>
                  <div className="mt-3 sm:mt-0">
                    <h3 className="flex flex-wrap items-baseline gap-x-4 text-2xl sm:text-3xl">
                      {p.title}
                      <span className="font-mono text-[0.7rem] uppercase tracking-widest opacity-70">
                        {p.meta}
                      </span>
                    </h3>
                    <p className="mt-4 max-w-[62ch] leading-[1.8]">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-[62ch] leading-[1.8]">
              Repos go up as I finish the write-ups. Email me if you want a look before then.
            </p>
          </div>
        </section>

        {/* From 400 feet */}
        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-28">
            <p className="eyebrow">From 400 feet</p>

            <div
              className="mt-10 aspect-video w-full border border-accent-tint bg-neutral-400/30"
              role="img"
              aria-label="Placeholder for the drone reel video with its poster frame still"
            />

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-[2fr_3fr]">
              <div
                className="row-span-2 aspect-[3/4] border border-accent-tint bg-neutral-400/30"
                role="img"
                aria-label="Placeholder for a tall vertical drone still of the New Jersey coast"
              />
              <div
                className="aspect-[16/9] border border-accent-tint bg-neutral-400/30"
                role="img"
                aria-label="Placeholder for a wide drone still of New Jersey from above"
              />
              <div
                className="aspect-[16/9] border border-accent-tint bg-neutral-400/30"
                role="img"
                aria-label="Placeholder for a second wide drone still of New Jersey from above"
              />
            </div>

            <p className="mt-6 max-w-[62ch] leading-[1.8]">
              Everything in the reel is New Jersey from above, shot on a DJI Mavic 3 Pro Cine. The
              drone and web design practice runs alongside the technical work. If you want aerial
              coverage or a site built, say so in the form.
            </p>
          </div>
        </section>

        {/* Write to me */}
        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] gap-16 px-5 pb-24 sm:px-8 lg:grid lg:grid-cols-[5fr_6fr]">
            <div>
              <h2 className="text-4xl">Write to me</h2>
              <p className="mt-6 max-w-[52ch] leading-[1.8]">
                If you're hiring for summer 2027, or you run a lab anywhere near human performance or
                human-AI systems, I'd like to hear from you. Drone and web inquiries welcome too. The
                form works. Email is faster:{" "}
                <a
                  href="mailto:bmallegri@gmail.com"
                  className="text-accent underline underline-offset-4"
                >
                  bmallegri@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <ContactForm idPrefix="home" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
