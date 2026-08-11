import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="bg-base">
      <div className="mx-auto flex max-w-[1080px] flex-nowrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="t-wordmark shrink-0 text-ink transition-colors duration-150 hover:text-accent">
          BMAllegri
        </Link>
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
