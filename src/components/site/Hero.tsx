import { useEffect, useState } from "react";
import { CopyEmail } from "./CopyEmail";
import { Seal } from "./Seal";
import { LineReveal } from "./LineReveal";

// Drop the reel and poster here once the files are uploaded.
const REEL_SRC: string | null = null;
const POSTER_SRC: string | null = null;

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    setPlayVideo(!reduced && !conn?.saveData);
    setToday(
      new Date()
        .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        .toUpperCase(),
    );
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-band">
      {/* Poster frame placeholder until the reel is uploaded */}
      <div className="absolute inset-0 media-placeholder" aria-hidden="true" />
      {POSTER_SRC && (
        <img src={POSTER_SRC} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      {playVideo && REEL_SRC && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
          poster={POSTER_SRC ?? undefined}
          src={REEL_SRC}
        />
      )}
      {/* Flat charcoal scrim */}
      <div className="absolute inset-0" style={{ background: "#26292C", opacity: 0.35 }} aria-hidden="true" />
      <span className="hero-grain" aria-hidden="true" />

      {/* Viewfinder readouts */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <span className="readout absolute left-6 top-24">{today}</span>
        <span className="readout absolute right-6 top-24">ALT 400 FT</span>
        <span className="readout absolute bottom-6 left-6">54.60 N / 5.93 W</span>
        <span className="readout absolute bottom-6 right-6">MAVIC 3 PRO CINE</span>
      </div>

      <div className="on-media relative z-10 mx-auto flex h-full max-w-[1080px] flex-col justify-end px-6 pb-28 pt-16 md:pb-20 md:pt-28">
        <Seal className="mb-6 h-14 w-14" />
        <LineReveal as="h1" className="t-hero text-band-ink" lines={["Bella Michele", "Allegri"]} />
        <div className="mt-8 max-w-[46ch] space-y-2 t-mono text-band-ink">
          <p>I build tools that pay attention to how people learn and decide.</p>
          <p>First semester at Queen's University Belfast, then Boston in January.</p>
        </div>
        <p className="mt-8 flex flex-wrap items-baseline gap-4 t-mono text-band-ink">
          <a href="mailto:bellamallegri@gmail.com" className="link-accent t-mono">
            bellamallegri@gmail.com
          </a>
          <CopyEmail />
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}
