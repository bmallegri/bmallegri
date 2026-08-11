import { useEffect, useState } from "react";

function setThemeColor(dark: boolean) {
  let m = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!m) {
    m = document.createElement("meta");
    m.name = "theme-color";
    document.head.appendChild(m);
  }
  m.setAttribute("content", dark ? "#26292C" : "#ECEBE7");
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    setThemeColor(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="t-mono link-accent shrink-0"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
