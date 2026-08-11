import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Smooth inertial scrolling (Lenis) plus a thin viewfinder-style
 * scroll-progress hairline pinned to the top of the viewport.
 *
 * Respects prefers-reduced-motion: smoothing is disabled and only the
 * passive progress bar remains.
 */
export function SmoothScroll() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = barRef.current;

    let lenis: Lenis | null = null;
    let rafId = 0;

    const updateBar = (progress: number) => {
      if (bar) bar.style.transform = `scaleX(${progress})`;
    };

    // Set initial state
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      updateBar(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Lenis emits scroll progress; use it to drive the bar
      lenis.on("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="scroll-progress">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}
