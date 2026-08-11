import { useEffect, useState } from "react";
import { CopyEmail } from "./CopyEmail";

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    setPlayVideo(!reduced && !conn?.saveData);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-band">
      {/* Poster frame placeholder until the reel is uploaded */}
      <div className="absolute inset-0 media-placeholder" aria-hidden="true" />
      {playVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
          poster=""
        />
      )}
      {/* Flat charcoal scrim */}
      <div className="absolute inset-0" style={{ background: "#26292C", opacity: 0.35 }} aria-hidden="true" />

      <div className="on-media relative z-10 mx-auto flex h-full max-w-[1080px] flex-col justify-end px-6 pb-20 pt-28">
        <h1 className="t-hero text-band-ink">
          Bella Michele
          <br />
          Allegri
        </h1>
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
