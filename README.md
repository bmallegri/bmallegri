# bmallegri_ai_website

Build a two-page personal website for Bella Michele Allegri, a first-year
university student. The site's job: when a professor or recruiter clicks her
link in September, they understand within ninety seconds who she is, what she
builds, and how to reach her. Audience is faculty running research labs and
recruiters for first-year technical programs, with a side audience of drone
photography clients.

This replaces an existing Squarespace site. Keep its mood: quiet, warm,
coastal, unhurried, confident. Do not make it feel like a startup landing
page or a template portfolio.

TECH AND CONSTRAINTS

React with Tailwind, static content only. No database, no authentication, no
Supabase, no CMS, no analytics scripts. Two routes: / (Home) and /about.
Mobile-first responsive. Semantic HTML throughout (nav, main, section,
footer, one h1 per page). The site must be fast: no animation libraries, no
carousel libraries, lazy-load all media below the fold, font-display swap.

DESIGN SYSTEM

The site has a light mode and a dark mode. Default follows the visitor's
prefers-color-scheme. A small text toggle in the nav switches modes: set in
IBM Plex Mono, reading "Dark" while in light mode and "Light" while in dark
mode. No sun or moon icons. Persist the choice in localStorage and apply the
theme class before first paint so there is no flash on load.

Flat color only in both modes. No gradients anywhere, not on backgrounds,
text, or buttons.

Light mode tokens:
- Base (page background): #ECEBE7
- Contrast band: #43474B
- Text on base: #1C1D1E
- Text on contrast band: #F5F4F1
- Accent (links, hover, focus rings, small marks): #4E7F77
- Accent tint (thin borders, subtle fills): #A8CFC9

Dark mode tokens:
- Base (page background): #26292C
- Contrast band: #43474B
- Text on base: #F5F4F1
- Text on contrast band: #F5F4F1
- Accent (links, hover, focus rings, small marks): #A8CFC9
- Accent tint (thin borders, subtle fills): #4E7F77

Usage rules: base and contrast bands do almost all the work. Accent appears
on links, hover states, form focus rings, and at most a few small marks per
page. Never use accent for large fills. No other colors. No purple, no
indigo, no blue-violet anything, in either mode.

Typography, two families only, from Google Fonts:

- Fraunces for the wordmark, headings, and pull lines. Use its softer
  optical sizes; it should feel like a warm editorial serif, not a fashion
  magazine.
- IBM Plex Mono for small labels, section eyebrows, buttons, form labels,
  dates, the theme toggle, and the footer. Uppercase with letter-spacing for
  eyebrows, sentence case everywhere else.
- Body text: Fraunces at text sizes if it stays readable, otherwise system
  serif (Georgia stack). No Inter, no Roboto, no default sans body.

Layout rules: max content width around 1080px. Text blocks left-aligned; do
not center body paragraphs. The page alternates base and contrast full-width
bands. Generous vertical space between sections. Break symmetry deliberately
in two places: the hero name sits left of center with the two lines under it
offset right on desktop, and the drone still strip uses unequal widths (one
tall portrait, two wide landscape), not an equal grid.

HARD RULES, DO NOT VIOLATE

- No emoji anywhere, including as icons, bullets, or the theme toggle.
- No icon library sprinkled across sections. The only icons permitted are
  LinkedIn and GitHub marks in the footer, and they stay commented out until
  URLs are provided.
- No floating rounded cards with soft drop shadows. Projects are an
  editorial list, not a card grid. Surfaces are flat; separation comes from
  the band color changes and thin 1px borders in accent tint.
- No perfectly centered equal-column feature grids.
- No parallax, no scroll-triggered animation, no typewriter effects, no
  counters. Hover states and a single gentle fade on page load are the
  ceiling. Respect prefers-reduced-motion.
- No stock images, no AI-generated images, no illustration packs. Every
  image slot is a gray placeholder with correct aspect ratio until real
  files are uploaded.
- Use the copy below exactly as written. Do not improve it, expand it,
  shorten it, or add taglines, section subtitles, or microcopy of your own.
  Where structure needs a label I have not provided, use the plainest
  possible word.

HOME PAGE, top to bottom

Nav: base band. Left: wordmark "BMAllegri" in Fraunces. Right: the "About"
link and the theme toggle, both in IBM Plex Mono. Sticky is fine, keep it
thin.

Section 1, hero, base band: her name "Bella Michele Allegri" very large in
Fraunces. Under it these two lines, smaller:

I build tools that pay attention to how people learn and decide.

First semester at Queen's University Belfast, then Boston in January.

Then her email as a plain accent-colored text link: bmallegri@gmail.com

Section 2, base band. Mono eyebrow: THE SHORT VERSION. Then this paragraph:

I'm a first-year at Northeastern studying Artificial Intelligence and
Behavioral Neuroscience. I want to know what happens when a person learns
something hard, and whether software can see it. Right now that's a chess
trainer that models what you know instead of counting your puzzle streak, and
a game that teaches Python. Until June it was ten months on the electronics of
Brown's Formula SAE car, a team I joined while I was still in high school. The
summer before that, spaceflight omics at NASA GeneLab.

Under it a mono text link to /about reading: The longer version

Section 3, base band with a thin accent-tint top border. Mono eyebrow: RIGHT
NOW, with a small mono stamp on the same line reading "updated August 2026".
Then:

This fall I'm at Queen's University Belfast for my first semester. Discrete
math, Python, biology, and a class called Shared Space in the Divided City.
January is Boston, where I'm after a lab spot and the telemetry side of
Northeastern Electric Racing.

Section 4, base band. Mono eyebrow: PROJECTS. An editorial list, single
column. Each entry: a hanging mono index in the left margin (01 through 05),
the title in Fraunces with its status or date in mono beside it, then the
paragraph. Entries:

01 - Chess trainer. In progress.
Chess apps count your puzzle streak and call it progress. Mine keeps a model
of what you actually know and schedules positions with spaced retrieval.
Between positions it has you talk through candidate moves the way strong
players do out loud. The goal is the useful part of a coach.

02 - Python game. In progress.
A game that teaches Python. That's the honest one-line version until the
write-up is done.

03 - PKU dietary recommendation app. Kean University, July 2025.
Built during a four-week research program. Phenylketonuria means tracking
protein in almost everything you eat, so meal planning is daily cognitive
work. I built a hybrid recommender over a database of 900+ foods and deployed
it with Streamlit.

04 - NASA GeneLab internship. Summer 2025.
Analyzed omics data from spaceflight experiments in Python.

05 - Brown Formula Racing. Through June 2026.
Ten months on the electronics subsystem of a Formula SAE car, on a team I
joined in high school.

After the list, one line: Repos go up as I finish the write-ups. Email me if
you want a look before then.

Section 5, contrast band. Mono eyebrow: FROM 400 FEET. A 16:9 video
placeholder with a poster-frame placeholder (no autoplay; click to play),
then the unequal three-still strip described above. Caption under the media:

Everything in the reel is New Jersey from above, shot on a DJI Mavic 3 Pro
Cine. The drone and web design practice runs alongside the technical work. If
you want aerial coverage or a site built, say so in the form.

Section 6, contrast band continues. Heading in Fraunces: Write to me. Then:

If you're hiring for summer 2027, or you run a lab anywhere near human
performance or human-AI systems, I'd like to hear from you. Drone and web
inquiries welcome too. The form works. Email is faster: bmallegri@gmail.com

Beside or under that, a form: First name, Last name, Email, Message, all
required, mono labels, submit button reading "Send". Form behavior: no
backend. On submit, open a prefilled mailto to bmallegri@gmail.com with the
fields in the body. If mailto handling fails, reveal the email address with a
line saying to write directly. Never show a fake "message sent" success
state.

Footer, base band: "Bella Michele Allegri" in Fraunces, then in mono: New
Jersey, and bmallegri@gmail.com as a link. Include commented-out slots for
LinkedIn and GitHub links to be filled later. A small circular slot for her
seal logo image, gray placeholder for now.

ABOUT PAGE

Same nav and footer. Base band. One h1 in Fraunces: Who I am.

Then these six paragraphs, generous line height, max width around 640px for
comfortable reading:

I got here through race cars. In high school I joined Brown Formula Racing
and stayed ten months, working on the electronics subsystem. The part that
stuck with me wasn't the car. A race car reports everything about itself. The
person driving it reports almost nothing.

That gap became the plan. At Northeastern I study Artificial Intelligence and
Behavioral Neuroscience, and both are about the same thing, people under
load. I like tools that notice what's happening in the person using them.
What you know. When you're about to make a bad call.

In my own notes I call this work human systems architecture. Systems that
understand, support, predict, and improve how people think and perform. Big
words for what is currently a chess trainer and a Python game. The direction
holds.

This fall I'm in Belfast for my first semester, at Queen's University. Boston
from January.

Aside from all that, I'm COO of Artistic Builders Guild. And the drone
practice, and the web design work. This site is one of the builds.

For summer 2027 I want research or a first-year technical program. If your
lab or team sits anywhere near human performance or human-AI systems, write
to me.

Then a contrast band with a second form, heading in Fraunces: Write to me.
Fields: First name, Last name, Email, then a required "Purpose" choice
rendered as mono pill buttons: Hiring info, Full portfolio, Artistic Builders
Guild, Other. Then a required dropdown "How did you hear about me?" with
options: Friend, LinkedIn, Networking event or college event, Artistic
Builders Guild, Other. Then Message, and a Submit button. Same mailto
behavior as the Home form.

META AND SEO

- Home title: Bella Allegri | AI and Behavioral Neuroscience at Northeastern
- About title: About | Bella Allegri
- Meta description: First-year at Northeastern studying Artificial
  Intelligence and Behavioral Neuroscience. Chess trainer, Python game,
  NASA GeneLab, Formula SAE. Looking for summer 2027 research.
- Open Graph tags with the same title and description. Favicon slot wired to
  a placeholder until her seal image is uploaded.
- Alt text: real descriptions on every image slot, written plainly, no
  keyword stuffing.

Accessibility: AA contrast everywhere in both modes (check chalk text on the
contrast band, and accent links on both backgrounds), visible focus states
in accent, labels tied to inputs, skip link.

Build the Home page first, then About. When the structure is done, ask me
for: the drone reel video file, a poster frame still, three drone stills,
and the circular seal logo. Do not generate stand-in imagery.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bmallegri.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dc3946f9-96f2-4b18-a256-6ac5f1062eee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
