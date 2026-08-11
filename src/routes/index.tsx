import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { CopyEmail } from "@/components/site/CopyEmail";
import drone1 from "@/assets/drone-1.webp";
import drone2 from "@/assets/drone-2.webp";
import drone3 from "@/assets/drone-3.webp";

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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-accent focus:bg-base focus:px-3 focus:py-2 focus:t-mono"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-6 pb-16 pt-10 md:pb-28 md:pt-16">
            <h1 className="t-hero">Bella Michele Allegri</h1>
            <div className="mt-10 max-w-[46ch] space-y-4 t-subline md:ml-[20%]">
              <p>I build tools that pay attention to how people learn and decide.</p>
              <p>First semester at Queen's University Belfast, then Boston in January.</p>
            </div>
            <p className="mt-8 flex flex-wrap items-baseline gap-4 md:ml-[20%]">
              <a href="mailto:bellamallegri@gmail.com" className="link-accent t-mono">
                bellamallegri@gmail.com
              </a>
              <CopyEmail />
            </p>
          </div>
        </section>

        {/* The short version */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-6 pb-16 md:pb-28">
            <p className="eyebrow text-accent">The short version</p>
            <p className="mt-6 t-body">
              I'm a first-year at Northeastern studying Artificial Intelligence and Behavioral
              Neuroscience. I want to know what happens when a person learns something hard, and
              whether software can see it. Right now that's a chess trainer that models what you know
              instead of counting your puzzle streak, and a game that teaches Python. Until June it
              was ten months on the electronics of Brown's Formula SAE car, a team I joined while I
              was still in high school. The summer before that, spaceflight omics at NASA GeneLab.
            </p>
            <p className="mt-8 t-mono">
              <Link to="/about" className="link-accent">
                The longer version
              </Link>
            </p>
          </div>
        </section>

        {/* Right now */}
        <section className="border-t border-accent-tint bg-base">
          <div className="mx-auto max-w-[1080px] px-6 section-pad">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="eyebrow text-accent">Right now</p>
              <p className="t-mono opacity-70">updated August 2026</p>
            </div>
            <p className="mt-6 t-body">
              This fall I'm at Queen's University Belfast for my first semester. I am currently
              working as COO of Artistic Builders Guild (
              <a href="https://abg.institute" className="link-accent">
                abg.institute
              </a>
              ), and working on my project. I am also currently working on certification for IBM
              Generative AI Engineering. January is Boston, where I'm after a lab spot and the
              telemetry side of Northeastern Electric Racing.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-6 pb-16 md:pb-28">
            <p className="eyebrow text-accent">Projects</p>
            <ol className="mt-10">
              {projects.map((p) => (
                <li
                  key={p.index}
                  className="group border-t border-transparent py-5 first:pt-0 md:grid md:grid-cols-[56px_1fr] md:py-7 [&+li]:border-accent-tint"
                >
                  <span className="t-mono opacity-70 transition-colors duration-150 group-hover:text-accent md:block">
                    {p.index}
                  </span>
                  <div className="mt-2 md:mt-0">
                    <h3 className="flex flex-wrap items-baseline gap-x-4 t-project">
                      {p.title}
                      <span className="eyebrow opacity-70">{p.meta}</span>
                    </h3>
                    <p className="mt-4 t-body">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 t-body">
              Repos go up as I finish the write-ups. Email me if you want a look before then.
            </p>
          </div>
        </section>

        {/* From 400 feet */}
        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] px-6 section-pad">
            <p className="eyebrow">From 400 feet</p>

            <img
              src={drone2}
              alt="Aerial still from the drone reel: New Jersey coastline seen from 400 feet."
              loading="lazy"
              decoding="async"
              className="mt-10 aspect-video w-full media-placeholder object-cover"
            />

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-[2fr_3fr]">
              <img
                src={drone1}
                alt="Aerial view of a New Jersey shoreline, water meeting sand in a long curve."
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full media-placeholder object-cover md:row-span-2 md:h-full"
              />
              <img
                src={drone2}
                alt="Wide aerial view of New Jersey coastline with waves rolling toward the beach."
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full media-placeholder object-cover"
              />
              <img
                src={drone3}
                alt="Wide aerial view of open water and beach in New Jersey, shot from high above."
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full media-placeholder object-cover"
              />
            </div>

            <p className="mt-6 t-body">
              Everything in the reel is New Jersey from above, shot on a DJI Mavic 3 Pro Cine. The
              drone and web design practice runs alongside the technical work. If you want aerial
              coverage or a site built, say so in the form.
            </p>
          </div>
        </section>

        {/* Write to me */}
        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] gap-16 px-6 pb-16 md:pb-28 lg:grid lg:grid-cols-[5fr_6fr]">
            <div>
              <h2 className="t-section">Write to me</h2>
              <p className="mt-6 t-body">
                If you're hiring for summer 2027, or you run a lab anywhere near human performance or
                human-AI systems, I'd like to hear from you. Drone and web inquiries welcome too. The
                form works. Email is faster:{" "}
                <a href="mailto:bellamallegri@gmail.com" className="link-accent">
                  bellamallegri@gmail.com
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
