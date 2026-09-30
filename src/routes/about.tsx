import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { LineReveal } from "@/components/site/LineReveal";
import { SectionMark } from "@/components/site/SectionMark";

const TITLE = "About Bella Allegri | Human Systems Architecture";
const DESCRIPTION =
  "From FTC robotics captain to Brown Formula Racing electronics to human systems architecture: Bella Allegri's background, current work, and the papers she keeps.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://bmallegri.com/about" },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: "https://bmallegri.com/logo.png" },
      { property: "og:image:alt", content: "BMAllegri seal logo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: "https://bmallegri.com/logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://bmallegri.com/about" }],
  }),
  component: About,
});

const paragraphs = [
  "I got here through wires. I captained my high school's FTC robotics team, then spent nine months on the electronics subsystem of Brown Formula Racing, a team I joined while I was still in high school. Strategy came next. With an FRC team I was helping, the match-data spreadsheet and the macros working out scoring odds were the part I kept returning to. The numbers described what a person under pressure does next.",
  "That question became the plan. At Northeastern I study Artificial Intelligence and Behavioral Neuroscience, and both are about people under load. I like tools that notice what is happening in the person using them: what you know, and when you are about to make a bad call.",
  "In my notes I call this human systems architecture: systems that understand, support, and improve how people think and perform. Big words for what is currently a chess trainer. The direction holds.",
  "I'm COO & Cofounder of a non-profit, a collective of student builders and artists with members across Brown, MIT, Stanford, and more.",
  "I'm in Belfast for my first semester at Queen's University. Boston from January.",
  "For summer 2027 I would love research or a first-year technical program. If your lab or team sits near human performance or human-AI systems, write to me.",
];

const shelf = [
  {
    index: "01",
    title: "Turing, Computing Machinery and Intelligence (1950).",
    note: "Where the question comes from.",
  },
  {
    index: "02",
    title: "Hebb, The Organization of Behavior (1949).",
    note: "How learning changes a brain.",
  },
  {
    index: "03",
    title: "Kahneman and Tversky, Judgment under Uncertainty (1974).",
    note: "Why smart people decide badly.",
  },
  {
    index: "04",
    title: "Marr, Vision (1982).",
    note: "Three levels for any thinking system.",
  },
  {
    index: "05",
    title: "Endsley, Situation Awareness in Dynamic Systems (1995).",
    note: "What a person in a fast machine knows.",
  },
];

function About() {
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
        <section className="relative overflow-hidden bg-base">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <span className="ghost-word" aria-hidden="true">
              Who
            </span>
            <SectionMark>SEC 01 / WHO</SectionMark>
            <div className="relative">
              <LineReveal as="h1" className="t-section t-heading-italic" lines={["Who I am"]} />
              <div className="mt-10 flex flex-col gap-7 t-body">
                {paragraphs.map((p, i) => (
                  <Reveal as="p" key={p.slice(0, 24)} delay={Math.min(i, 6) * 60}>
                    {p}
                  </Reveal>
                ))}
              </div>
              <Reveal as="p" delay={60} className="mt-12 t-mono">
                <Link to="/" className="link-accent">
                  Home
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-accent-tint bg-base">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <span className="ghost-word" aria-hidden="true">
              Shelf
            </span>
            <SectionMark>SEC 02 / SHELF</SectionMark>
            <Reveal as="p" className="eyebrow text-accent">
              The shelf
            </Reveal>
            <Reveal as="p" delay={60} className="relative mt-6 max-w-[720px] t-body">
              Five papers I keep going back to.
            </Reveal>
            <ol className="shelf-list relative mt-10">
              {shelf.map((item, i) => (
                <Reveal as="li" key={item.index} delay={Math.min(i, 8) * 40} className="shelf-item">
                  <span className="shelf-index">{item.index}</span>
                  <div>
                    <p className="shelf-title">{item.title}</p>
                    <p className="shelf-note">{item.note}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative bg-band text-band-ink">
          <div className="relative mx-auto max-w-[1080px] px-6 section-pad">
            <SectionMark>SEC 03 / WRITE</SectionMark>
            <LineReveal as="h2" className="t-section t-heading-italic" lines={["Write to me"]} />
            <Reveal delay={60} className="mt-10 max-w-[640px]">
              <ContactForm extended idPrefix="about" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
