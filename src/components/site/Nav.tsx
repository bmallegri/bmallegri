import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-accent-tint/60 bg-base">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="text-lg text-ink transition-colors hover:text-accent">
          BMAllegri
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="font-mono text-xs tracking-widest text-ink transition-colors hover:text-accent"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}