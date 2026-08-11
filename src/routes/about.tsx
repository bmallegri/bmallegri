import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";

const DESCRIPTION =
  "First-year at Northeastern studying Artificial Intelligence and Behavioral Neuroscience. Chess trainer, Python game, NASA GeneLab, Formula SAE. Looking for summer 2027 research.";

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
  "I got here through race cars. In high school I joined Brown Formula Racing and stayed ten months, working on the electronics subsystem. The part that stuck with me wasn't the car. A race car reports everything about itself. The person driving it reports almost nothing.",
  "That gap became the plan. At Northeastern I study Artificial Intelligence and Behavioral Neuroscience, and both are about the same thing, people under load. I like tools that notice what's happening in the person using them. What you know. When you're about to make a bad call.",
  "In my own notes I call this work human systems architecture. Systems that understand, support, predict, and improve how people think and perform. Big words for what is currently a chess trainer and a Python game. The direction holds.",
  "This fall I'm in Belfast for my first semester, at Queen's University. Boston from January.",
  "Aside from all that, I'm COO of Artistic Builders Guild. And the drone practice, and the web design work. This site is one of the builds.",
  "For summer 2027 I want research or a first-year technical program. If your lab or team sits anywhere near human performance or human-AI systems, write to me.",
];

function About() {
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
        <section className="bg-base">
          <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-28">
            <h1 className="text-5xl leading-tight sm:text-6xl">Who I am</h1>
            <div className="mt-12 max-w-[640px] space-y-7 text-lg leading-[1.85]">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-12 font-mono text-xs">
              <Link to="/" className="text-accent underline underline-offset-4">
                Home
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-band text-band-ink">
          <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-28">
            <h2 className="text-4xl">Write to me</h2>
            <div className="mt-10 max-w-[640px]">
              <ContactForm extended idPrefix="about" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}