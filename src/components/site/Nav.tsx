import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setPast(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const overlayMode = overlay && !past;

  return (
    <nav
      className={
        overlay
          ? `fixed inset-x-0 top-0 z-30 ${overlayMode ? "text-ink" : "nav-solid bg-band text-band-ink"}`
          : "nav-solid bg-base"
      }
    >
      <div className="mx-auto flex max-w-[1080px] flex-nowrap items-center justify-between gap-4 px-6 py-5">
        <span className="flex shrink-0 items-center gap-3">
          <span className="nav-square" aria-hidden="true" />
        <Link
          to="/"
          className={`t-wordmark shrink-0 transition-colors duration-150 ${
            overlay && !overlayMode ? "text-band-ink" : "text-ink hover:text-accent"
          }`}
        >
          BMAllegri
        </Link>
        </span>
        <div className="flex shrink-0 items-center gap-5">
          <Link to="/about" className="t-mono link-accent">
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
