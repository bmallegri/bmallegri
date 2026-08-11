import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { LineReveal } from "@/components/site/LineReveal";
import abgLogoAsset from "@/assets/abg-logo.png.asset.json";

const DESCRIPTION =
  "First-year at Northeastern studying Artificial Intelligence and Behavioral Neuroscience. Chess trainer, Python game, NASA GeneLab GL4HS, Formula SAE. Looking for summer 2027 research.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Bella Allegri" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "About | Bella Allegri" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const paragraphs = [
  "I got here through wires. I started in high school on my school's FTC robotics team, eventually running it as captain. Senior year, I joined Brown Formula Racing and spent ten months in the electronics subsystem. I also found I liked strategy. With an FRC team I was helping, the Excel spreadsheet full of match data and automatic macros calculating scoring chances was the part I kept coming back to. The numbers told a story about what a person under pressure was likely to do next.",
  "That gap became the plan. At Northeastern I study Artificial Intelligence and Behavioral Neuroscience, and both are about the same thing: people under load. I like tools that notice what is happening in the person using them. What you know. When you are about to make a bad call.",
  "In my own notes I call this work human systems architecture. Systems that understand, support, predict, and improve how people think and perform. Big words for what is currently a chess trainer and a Python game. The direction holds.",
  "This fall I'm in Belfast for my first semester, at Queen's University. Boston from January.",
  "Aside from all that, I'm COO of Artistic Builders Guild, a collective of student builders and artists with members across Brown, MIT, Stanford, and more. I run the operations side. And the drone practice, and the web design work. This site is one of the builds.",
  "For the summer of 2027, I would love to do research or a first-year technical program. If your lab or team sits anywhere near human performance or human\u2011AI systems, please write to me.",
];

const shelf = [
  {
    index: "01",
    title: "Turing, Computing Machinery and Intelligence (1950).",
    note: "Where the whole field's question comes from.",
  },
  {
    index: "02",
    title: "Hebb, The Organization of Behavior (1949).",
    note: "How learning physically changes a brain.",
  },
  {
    index: "03",
    title: "Kahneman and Tversky, Judgment under Uncertainty (1974).",
    note: "Why smart people decide badly.",
  },
  {
    index: "04",
    title: "Vaswani et al., Attention Is All You Need (2017).",
    note: "Modern AI starts here.",
  },
  {
    index: "05",
    title: "Marr, Vision (1982).",
    note: "Three levels for understanding any thinking system.",
  },
  {
    index: "06",
    title: "Endsley, Toward a Theory of Situation Awareness in Dynamic Systems (1995).",
    note: "What a person inside a fast machine actually knows.",
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
            <div className="relative">
              <LineReveal as="h1" className="t-section t-heading-italic" lines={["Who I am"]} />
              <div className="mt-10 flex flex-col gap-7 t-body">
                {paragraphs.slice(0, 5).map((p, i) => (
                  <Reveal as="p" key={p.slice(0, 24)} delay={i * 60}>
                    {p}
                  </Reveal>
                ))}
                <Reveal as="div" delay={5 * 60} className="mt-4 flex items-start gap-5">
                  <a
                    href="https://abg.institute"
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-sm bg-[#F3F0E9] p-2 dark:bg-[#F3F0E9]"
                  >
                    <img
                      src={abgLogoAsset.url}
                      alt="Artistic Builders Guild logo"
                      className="h-14 w-14 object-contain"
                    />
                  </a>
                  <div className="t-mono">
                    <p>COO, Artistic Builders Guild</p>
                    <a href="https://abg.institute" className="link-accent">
                      abg.institute
                    </a>
                    <p className="mt-1">
                      <a href="mailto:bella@abg.institute" className="link-accent">
                        bella@abg.institute
                      </a>
                    </p>
                  </div>
                </Reveal>
                {paragraphs.slice(5).map((p, i) => (
                  <Reveal as="p" key={p.slice(0, 24)} delay={(6 + i) * 60}>
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
            <Reveal as="p" className="eyebrow text-accent">
              The shelf
            </Reveal>
            <Reveal as="p" delay={60} className="relative mt-6 max-w-[720px] t-body">
              Six papers I keep coming back to. The list is the plan.
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

        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] px-6 section-pad">
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
