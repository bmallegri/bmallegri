import { useEffect, useState } from "react";
import { CopyEmail } from "./CopyEmail";
import { Seal } from "./Seal";
import { LineReveal } from "./LineReveal";

export function Hero() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date()
        .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        .toUpperCase(),
    );
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden hero-surface md:min-h-[80svh]">
      <span className="hero-rules" aria-hidden="true" />
      <span className="hero-grain" aria-hidden="true" />

      {/* Viewfinder readouts */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <span className="readout absolute left-6 top-24">
          {today}
        </span>
        <span className="readout absolute right-6 top-24">ALT 400 FT</span>
        <span className="readout absolute bottom-6 left-6">41.826155 N / 71.403275 W</span>
        <span className="readout absolute bottom-6 right-6">MAVIC 3 PRO CINE</span>
      </div>

      <div className="on-media relative z-10 mx-auto flex h-full max-w-[1080px] flex-col justify-between px-6 pb-28 pt-24 md:pb-20 md:pt-32">
        <div className="flex items-start justify-between gap-6">
          <Seal className="h-14 w-14" />
          <span className="hero-index hidden md:inline">Human systems architecture</span>
        </div>
        <div className="mt-auto">
        <div className="hero-hairline mb-6" aria-hidden="true" />
        <h1 className="t-hero text-ink">
          <LineReveal as="span" className="block" lines={["Bella Michele"]} />
          <LineReveal as="span" className="hero-accent-line block" lines={["Allegri"]} />
          <span className="sr-only">
            Bella Michele Allegri, Artificial Intelligence and Behavioral Neuroscience student.
          </span>
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-[46ch] space-y-2 t-mono text-ink">
            <p>I build tools that pay attention to how people learn and decide.</p>
            <p>Northeastern University, Artificial Intelligence and Behavioral Neuroscience.</p>
          </div>
          <span className="now-tag text-ink">Providence, RI / now</span>
        </div>
        <div className="hero-hairline mt-8" aria-hidden="true" />
        <p className="mt-6 flex flex-wrap items-baseline gap-4 t-mono text-ink">
          <a href="mailto:bellamallegri@gmail.com" className="link-accent t-mono">
            bellamallegri@gmail.com
          </a>
          <CopyEmail />
        </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}
