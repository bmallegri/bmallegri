import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { useCursorPreview, CursorPreviewLayer } from "@/components/site/CursorPreview";
import { Photo, FullBleedPhoto } from "@/components/site/Photo";
import { Ticker } from "@/components/site/Ticker";
import { LineReveal } from "@/components/site/LineReveal";
import drone1 from "@/assets/drone-1.webp";
import drone2 from "@/assets/drone-2.webp";
import drone3 from "@/assets/drone-3.webp";
import bfrTeam from "@/assets/bfr-team.jpg.asset.json";

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
    meta: "",
    status: "working" as const,
    statusLabel: "working on it",
    body: "Chess apps count your puzzle streak and call it progress. Mine keeps a model of what you actually know and schedules positions with spaced retrieval. Between positions it has you talk through candidate moves the way strong players do out loud. The goal is the useful part of a coach.",
  },
  {
    index: "02",
    title: "Python game",
    meta: "",
    status: "working" as const,
    statusLabel: "working on it",
    body: "A game that teaches Python. It comes from the same place as the chess trainer, the idea that you learn a thing by being made to do it, not by reading about it. Write-up and repo when it's done.",
  },
  {
    index: "03",
    title: "Brown Formula Racing",
    meta: "September 2025–May 2026",
    status: "done" as const,
    statusLabel: "done",
    body: "Ten months on the electronics subsystem of a Formula SAE car, on a team I joined in high school. Most of my hours went to the wiring harness and electrical QA, and also driving up 4 hours on weekends from New Jersey.",
  },
  {
    index: "04",
    title: "PKU dietary recommendation app",
    meta: "Kean University, July 2025",
    status: "done" as const,
    statusLabel: "done",
    body: "Built during a four-week research program. Phenylketonuria means tracking protein in almost everything you eat, so meal planning is daily cognitive work. I built a hybrid recommender over a database of 900+ foods and deployed it with Streamlit.",
  },
  {
    index: "05",
    title: "NASA GeneLab internship",
    meta: "Summer 2025",
    status: "done" as const,
    statusLabel: "done",
    body: "A summer internship analyzing omics data from spaceflight experiments in Python. GeneLab is NASA's open repository of biology data from missions, gene expression from organisms that have actually been to space, and the summer went to turning that raw data into something you could ask questions of, about how living systems respond to spaceflight.",
  },
];

const route = [
  { place: "METUCHEN, NJ", note: "home", state: "past" as const },
  {
    place: "PROVIDENCE, RI",
    note: "the race car, Artistic Builders Guild",
    state: "past" as const,
  },
  { place: "BELFAST, Northern Ireland", note: "now", state: "current" as const },
  { place: "BOSTON, MA", note: "january", state: "future" as const },
];

function Index() {
  const { active, setActive, el: previewRef } = useCursorPreview();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-accent focus:bg-base focus:px-3 focus:py-2 focus:t-mono"
      >
        Skip to content
      </a>
      <Nav overlay />
      <main id="main">
        <Hero />

        {/* The short version */}
        <section className="relative overflow-hidden bg-base">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <span className="ghost-word" aria-hidden="true">
              Short
            </span>
            <div className="relative">
              <Reveal as="p" className="eyebrow text-accent">
                The short version
              </Reveal>
              <Reveal as="p" delay={60} className="mt-6 t-body">
                I'm a first-year at Northeastern studying Artificial Intelligence and Behavioral
                Neuroscience. I want to know what happens when a person learns something hard, and
                whether software can see it. Right now that's a chess trainer that models what you
                know instead of counting your puzzle streak, and a game that teaches Python. Until
                June it was ten months on the electronics of Brown's Formula SAE car, a team I
                joined while I was still in high school. The summer before that, spaceflight omics
                at NASA GeneLab.
              </Reveal>
              <Reveal as="p" delay={120} className="mt-8 t-mono">
                <Link to="/about" className="link-accent">
                  The longer version
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Right now */}
        <section className="relative overflow-hidden border-t border-accent-tint bg-base">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <span className="ghost-word" aria-hidden="true">
              Now
            </span>
            <div className="relative">
              <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="eyebrow text-accent">Right now</span>
                <span className="t-mono opacity-70">
                  updated August 2026, mid-packing for Belfast
                </span>
              </Reveal>
              <Reveal as="p" delay={60} className="mt-6 t-body">
                This fall I'm at Queen's University Belfast for my first semester. I am currently
                working as COO of Artistic Builders Guild (
                <a href="https://abg.institute" className="link-accent">
                  abg.institute
                </a>
                ), and working on my project. I am also currently working on certification for IBM
                Generative AI Engineering. January is Boston, where I'm after a lab spot and the
                telemetry side of Northeastern Electric Racing.
              </Reveal>
              <Reveal delay={120} className="mt-10">
                <ol className="route-line">
                  {route.map((stop) => (
                    <li key={stop.place} className="route-stop" data-state={stop.state}>
                      <span>{stop.place}</span>
                      <span className="route-stop-note">/ {stop.note}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="relative overflow-hidden bg-base">
          <div className="relative mx-auto max-w-[1080px] px-6 pb-16 md:pb-28">
            <span className="ghost-word" aria-hidden="true">
              Projects
            </span>
            <div className="relative">
              <Reveal as="p" className="eyebrow text-accent">
                Projects
              </Reveal>
              <ol className="mt-10">
                {projects.map((p, i) => (
                  <Reveal
                    as="li"
                    key={p.index}
                    delay={i * 60}
                    className="group border-t border-transparent py-5 first:pt-0 md:grid md:grid-cols-[120px_1fr] md:gap-x-6 md:py-7 [&+li]:border-accent-tint"
                  >
                    <div
                      onPointerEnter={() => setActive(i)}
                      onPointerLeave={() => setActive(null)}
                      className="contents"
                    >
                      <div className="hidden md:block">
                        <span className="block t-gutter-num">{p.index}</span>
                        <span className="mt-2 block t-mono opacity-70 transition-colors duration-150 group-hover:text-accent">
                          {p.index}
                        </span>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <h3 className="flex flex-wrap items-baseline gap-x-4 t-project">
                          {p.title}
                          <span className="status-tag" data-status={p.status}>
                            {p.statusLabel}
                          </span>
                          {p.meta && (
                            <span className="eyebrow opacity-70">
                              <span className="md:hidden">{p.index} — </span>
                              {p.meta}
                            </span>
                          )}
                        </h3>
                        <p className="mt-4 t-body">{p.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal as="p" delay={60} className="mt-10 t-body">
                Repos go up as I finish the write-ups. Email me if you want a look before then.
              </Reveal>
            </div>
          </div>
        </section>

        <CursorPreviewLayer
          previewRef={previewRef}
          visible={active !== null}
          label={active !== null ? (projects[active]?.title ?? "") : ""}
          src={active === 2 ? bfrTeam.url : undefined}
        />

        {/* Full-bleed still */}
        <FullBleedPhoto src={drone1} alt="Full-bleed aerial still of the San Diego coastline." />

        <Ticker />

        {/* From 400 feet */}
        <section className="relative overflow-hidden bg-band text-band-ink">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <span className="ghost-word" aria-hidden="true">
              400
            </span>
            <div className="relative">
              <Reveal as="p" className="eyebrow">
                From 400 feet
              </Reveal>

              {/* Staggered cluster */}
              <div className="mt-12 md:relative md:min-h-[640px]">
                <Reveal className="md:absolute md:left-0 md:top-0 md:w-[54%]">
                  <Photo
                    src={drone2}
                    alt="Aerial still from the drone reel: San Diego coastline seen from 400 feet."
                    ratio="16 / 10"
                    caption="SAN DIEGO, CA / 400 FT"
                  />
                </Reveal>

                <Reveal
                  delay={60}
                  className="mt-10 md:absolute md:right-[-8%] md:top-[260px] md:mt-0 md:w-[46%]"
                >
                  <Photo
                    src={drone3}
                    alt="Wide aerial view of open water and beach in San Diego, shot from high above."
                    ratio="16 / 10"
                    caption="SAN DIEGO, CA / 400 FT / DATE TBC"
                  />
                </Reveal>
              </div>

              <Reveal as="p" delay={60} className="mt-12 t-body">
                Everything in the reel is San Diego, California from above, shot on a DJI Mavic 3
                Pro Cine. The drone and web design practice runs alongside the technical work. If
                you want aerial coverage or a site built, say so in the form.
              </Reveal>
            </div>
          </div>
        </section>


        {/* Write to me */}
        <section className="bg-tide">
          <div className="mx-auto max-w-[1080px] gap-16 px-6 section-pad lg:grid lg:grid-cols-[5fr_6fr]">
            <Reveal>
              <LineReveal
                as="h2"
                className="t-section t-heading-italic"
                lines={["Write to me"]}
              />
              <p className="mt-6 t-body">
                If you're hiring for summer 2027, or you run a lab anywhere near human performance
                or human-AI systems, I'd like to hear from you. Drone and web inquiries welcome too.
                The form works. Email is faster:{" "}
                <a href="mailto:bellamallegri@gmail.com" className="link-accent">
                  bellamallegri@gmail.com
                </a>
              </p>
            </Reveal>
            <Reveal delay={60} className="mt-12 lg:mt-0">
              <ContactForm idPrefix="home" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
