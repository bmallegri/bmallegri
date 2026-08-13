import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionMark } from "@/components/site/SectionMark";
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
import pythonSpellbook from "@/assets/python-spellbook.png.asset.json";

const TITLE = "Bella Allegri | AI & Behavioral Neuroscience";
const DESCRIPTION =
  "Bella Michele Allegri builds tools for how people learn and decide: a chess trainer, a Python game, NASA GeneLab GL4HS, and Formula SAE electronics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Bella Michele Allegri",
          jobTitle: "Student Researcher",
          url: "https://bmallegri.ai",
          email: "mailto:bellamallegri@gmail.com",
          affiliation: [
            { "@type": "CollegeOrUniversity", name: "Northeastern University" },
            { "@type": "CollegeOrUniversity", name: "Queen's University Belfast" },
            { "@type": "Organization", name: "Artistic Builders Guild", url: "https://abg.institute" },
          ],
          knowsAbout: [
            "Artificial Intelligence",
            "Behavioral Neuroscience",
            "Human-AI systems",
            "Racing electronics",
          ],
        }),
      },
    ],
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
    url: "https://github.com/bmallegri/python-spellbook",
    body: "A browser game that teaches Python one line at a time. You start with an empty spellbook, and a page only fills in once you can rebuild that line from scrambled tokens in three different contexts. It sits somewhere between recognising code and writing it cold, which is where things start to stick.",
  },
  {
    index: "03",
    title: "Brown Formula Racing",
    meta: "September 2025 to May 2026",
    status: "done" as const,
    statusLabel: "done",
    body: "Nine months on the electronics subsystem of a Formula SAE car, on a team I joined in high school. Most of my hours went to the wiring harness and electrical QA, and also driving up 4 hours on weekends from New Jersey.",
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
    title: "NASA GeneLab GL4HS internship",
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
    note: "now / ABG, before the semester",
    state: "current" as const,
  },
  { place: "BELFAST, Northern Ireland", note: "september", state: "future" as const },
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
            <SectionMark>SEC 01 / SHORT</SectionMark>
            <div className="relative">
              <Reveal as="h2" className="eyebrow text-accent">
                The short version
              </Reveal>
              <Reveal as="p" delay={60} className="mt-6 t-body">
                I'm a first-year at Northeastern studying Artificial Intelligence and Behavioral
                Neuroscience. I want to know what happens when a person learns something hard, and
                whether software can see it. Right now that's a chess trainer that models what you
                know instead of counting your puzzle streak, and a game that teaches Python. Until
                this May it was nine months on the electronics of Brown's Formula SAE car, a team I
                joined while I was still in high school. The summer before that, spaceflight omics
                at NASA GeneLab GL4HS.
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
            <SectionMark>SEC 02 / NOW</SectionMark>
            <div className="relative">
              <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="eyebrow text-accent">Right now</h2>
                <span className="t-mono opacity-70">
                  updated August 2026, Providence before the semester
                </span>
              </Reveal>
              <Reveal as="p" delay={60} className="mt-6 t-body">
                This fall I'm at Queen's University Belfast for my first semester. Until then I'm
                in Providence, running operations as COO of Artistic Builders Guild (abg.institute),
                finishing the IBM Generative AI Engineering certification, and building the chess
                trainer. January is Boston, where I'm after a lab spot and the telemetry side of
                Northeastern Electric Racing.
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
            <SectionMark>SEC 03 / PROJECTS</SectionMark>
            <div className="relative">
              <Reveal as="h2" className="eyebrow text-accent">
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
                          {p.url ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noreferrer"
                              className="link-accent"
                            >
                              {p.title}
                            </a>
                          ) : (
                            p.title
                          )}
                          <span className="status-tag" data-status={p.status}>
                            {p.statusLabel}
                          </span>
                          {p.meta && (
                            <span className="eyebrow opacity-70">
                              <span className="md:hidden">{p.index}. </span>
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
          src={active === 1 ? pythonSpellbook.url : active === 2 ? bfrTeam.url : undefined}
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
            <SectionMark>SEC 04 / 400 FT</SectionMark>
            <div className="relative">
              <Reveal as="h2" className="eyebrow">
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
                    caption="SAN DIEGO, CA / 400 FT"
                  />
                </Reveal>
              </div>

              <Reveal as="p" delay={60} className="mt-12 t-body">
                Everything here is San Diego, California from above, shot on a DJI Mavic 3
                Pro Cine. The drone and web design practice runs alongside the technical work. If
                you want aerial coverage or a site built, say so in the form.
              </Reveal>
            </div>
          </div>
        </section>


        {/* Write to me */}
        <section className="relative bg-tide">
          <div className="relative mx-auto max-w-[1080px] gap-16 px-6 section-pad lg:grid lg:grid-cols-[5fr_6fr]">
            <SectionMark>SEC 05 / WRITE</SectionMark>
            <Reveal>
              <LineReveal
                as="h2"
                className="t-section t-heading-italic"
                lines={["Write to me"]}
              />
              <p className="mt-6 t-body">
                For the summer of 2027, I would love to do research or a first-year technical
                program. If your lab or team sits anywhere near human performance or{" "}
                <span className="whitespace-nowrap">human-AI</span> systems, please write to me.
                Drone and web inquiries welcome too. The form works. Email is faster:{" "}
                <a
                  href="mailto:bellamallegri@gmail.com"
                  className="link-accent [overflow-wrap:anywhere]"
                >
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
